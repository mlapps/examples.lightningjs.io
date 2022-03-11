let pageData = {
    exampleCode: undefined,
    exampleLink: undefined,
    catalog: undefined,
    deeplink: undefined
}

const updatePageData = (...args) => {
    if(typeof args[0] === 'object') {
        pageData = {...pageData, ...args[0]};
    }
    else if(args.length === 2) {
        pageData[args[0].toString()] = args[1];
    }
}

const getData = (url, options) => {
    return new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        for(let key in options) {
            xhttp[key] = options[key];
        }
        xhttp.onload = () => {
            resolve(xhttp.response);
        }
        xhttp.open("GET", url);
        xhttp.send();
    });
}

const fetchCatalog = async () => {
    return getData('examples/catalog.json', {responseType: 'json'});
}

const fetchCodeExample = (url) => {
    return getData(url, {responseType: 'text'})
        .then((response) => {
            pageData.exampleCode = response;
            const {category, example} = pageData.deeplink;
            document.getElementsByClassName('example-label')[0].innerHTML = pageData.catalog[category][example].label;
            generateCodeBlock();
            generateDemo();
        });
}

const onBodyClick = (el) => {
    const frame = document.getElementById('demo');
    console.log(frame.contentWindow.document.hasFocus() );

}

const onToggleMenu = () => {
    document.getElementsByTagName('nav')[0].classList.toggle('show');
}

const onCategoryClick = (el) => {
    el.parentNode.classList.toggle('active');
}

const onExampleClick = (el) => {
    pageData.exampleLink = el;
    const {category, example} = el.dataset;
    pageData.deeplink = {category, example};
    document.location.href = document.location.href.replace(document.location.hash,  `#/${category}/${example}`); 
    fetchCodeExample(`/examples/${category}/${example}.js`);
    document.getElementsByTagName('nav')[0].classList.toggle('show', false);
}

const onInfoClick = (e) => {
    document.getElementsByClassName('demo-instructions')[0].classList.toggle('show');
}

const focusDemoContent = () => {
    document.getElementsByClassName('demo-instructions')[0].classList.toggle('show', false);
    document.getElementById('demo').contentWindow.focus();
}

const onRunCode = () => {
    generateDemo(pageData.editor.getValue());
}

const onResetCode = () => {
    generateCodeBlock();
    generateDemo();
}

const initNav = (catalog, deeplink) => {
    let openCategory = 0;
    const nav = document.getElementsByTagName('nav')[0];
    const cat = Object.keys(catalog).reduce((acc, categoryKey, catalogIndex) => {
        const examples = catalog[categoryKey];
        if(categoryKey === deeplink.category) {
            openCategory = catalogIndex;
        }
        acc += `<div class="examples"><div class="category" onclick="onCategoryClick(this)">${categoryKey}</div>`;
        Object.keys(examples).forEach((exampleKey) => {
            acc += `<div class="example-link ${exampleKey === deeplink.example ? 'selected' : ''}" data-category="${categoryKey}" data-example="${exampleKey}" onclick="onExampleClick(this)">${examples[exampleKey].label}</div>`;
        });
        acc += '</div></ul>';
        return acc;
    }, '');
    nav.innerHTML = cat;
    nav.getElementsByClassName('category')[openCategory].onclick();
}

const generateCodeBlock = () => {
    if(pageData.editor) {
        document.getElementsByClassName('CodeMirror')[0].remove();
    }
    const codeSample = document.getElementById('code-sample');
    codeSample.value = pageData.exampleCode;
    pageData.editor = CodeMirror.fromTextArea(codeSample, {
        mode: 'javascript',
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        viewportMargin: Infinity
    });
}

const generateDemo = (source = pageData.exampleCode) => {
    let html = '<!DOCTYPE html><html><head><style type="text/css" media="screen">';
    html += 'body,html{margin:0px;height:100%;overflow:hidden;}canvas{width:100%;height:100%;}</style>';
    html += '<script src="https://cdn.jsdelivr.net/npm/@lightningjs/core@2.6.0/dist/lightning.min.js"></script>';
    html += '</head><body>';
    html += `<script type="module">
    import Lightning from "https://cdn.jsdelivr.net/npm/@lightningjs/core@2.6.0/src/lightning.mjs";
    window.onfocus = () => {
        const main = parent.document.getElementsByTagName("main")[0];
        main.scrollTop = 0;
        main.classList.toggle('demo-has-focus', true);
    }
    window.onblur = () => {
        parent.document.getElementsByTagName("main")[0].classList.toggle('demo-has-focus', false);
    }
    window.onload = function(){
        parent.document.getElementsByTagName("main")[0].classList.toggle('demo-has-focus', false);    
    `;
    html += source;
    html += '}</script></body></html>';

    let frame = document.getElementById('demo');
    const frameSizer = frame.parentNode;
    frame.remove();
    frame = document.createElement('iframe');
    frame.id = 'demo';
    frameSizer.appendChild(frame);
    const frameDoc = frame.contentDocument || frame.contentWindow.document;
    frameDoc.clear();
    frameDoc.open();
    frameDoc.write(html);
    frameDoc.close();
}

window.onload = (event) => {
    fetchCatalog()
        .then((catalog) => {
            const hash = window.location.hash;
            const split = hash.replace('#/', '').split('/');
            let category = split[0];
            let example = split[1];
            let replaceURL = false;

            if(category.length > 0 && !catalog[category]) {
                category = '';
            }
            if(category.length > 0 && catalog[category] && !catalog[category][example]) {
                example = Object.keys(catalog[category])[0];
                replaceURL = true;
            }
            else if (category.length === 0) {
                category = Object.keys(catalog)[0];
                example = Object.keys(catalog[category])[0];
                replaceURL = true;
            }

            if(replaceURL) {
                window.location.replace(window.location.href.replace(hash, `#/${category}/${example}`));
            }
            const deeplink = {category, example};
            updatePageData({deeplink, catalog});
            initNav(catalog, deeplink);
            fetchCodeExample(`/examples/${category}/${example}.js`);
        });
};

window.addEventListener('hashchange', function(){
    const currentSelected = document.getElementsByClassName('example-link selected')[0];
    if(currentSelected) {
        currentSelected.classList.toggle('selected', false);
    }
    if(pageData.exampleLink) {
        pageData.exampleLink.classList.toggle('selected', true);
    }
})