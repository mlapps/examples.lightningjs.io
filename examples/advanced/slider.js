class ExampleApp extends Lightning.Application {
    static _template() {
        return {
            Slider: {
                w: 800, h: 350, x: 480, y: 270, mount: 0.5,
                Wrapper: {

                }
            }
        }
    }

    _init() {
        this.index = 0;
        this.dataLength = 6;
        const buttons = [];
        for(let i = 0; i < this.dataLength; i++) {
            buttons.push({type: Tile, x: i * (300 + 30), item: {label: `Train ${i + 1}`, src: `./images/sample${i + 1}.jpg`}});
        }
        this.tag('Wrapper').children = buttons;
    }

    repositionWrapper() {
        const wrapper = this.tag('Wrapper');
        const sliderW = this.tag('Slider').w;
        const currentWrapperX = wrapper.transition('x').targetvalue || wrapper.x;
        const currentFocus = wrapper.children[this.index];
        const currentFocusX = currentFocus.x + currentWrapperX;
        const currentFocusOuterWidth = currentFocus.x + currentFocus.w;

        if(currentFocusX < 0) {
            wrapper.setSmooth('x', -currentFocus.x);
        }
        else if(currentFocusOuterWidth > sliderW) {
            wrapper.setSmooth('x', sliderW - (currentFocusOuterWidth));
        }
    }

    _handleLeft() {
        if(this.index === 0) {
            this.index = this.dataLength - 1;
        }
        else {
            this.index -= 1;
        }
        this.repositionWrapper();
    }

    _handleRight() {
        if(this.index === this.dataLength - 1) {
            this.index = 0;
        }
        else {
            this.index += 1;
        }
        this.repositionWrapper();
    }

    _getFocused() {
        return this.tag('Slider.Wrapper').children[this.index];
    }
}

class Tile extends Lightning.Component {
    static _template() {
        return {
            w: 300, h: 350, rect: true,
            Image: {
                w: w => w, h: h => h - 50,
            },
            Label: {
                x: 10, y: 302, color: 0xff000000, text: {fontSize: 32}
            }
        }
    }

    set item(obj) {
        const {label, src} = obj;
        this.patch({
            Image: {src},
            Label: {text: label.toString()}
        })
    }

    _focus() {
        this.patch({
            smooth: {color: 0xff763ffc, scale: 1.1},
            Label: {
                smooth: {color: 0xffffffff}
            }
        });
    }

    _unfocus() {
        this.patch({
            smooth: {color: 0xffffffff, scale: 1.0},
            Label: {
                smooth: {color: 0xff000000}
            }
        });
    }
 }

const options = {stage: {w: 960, h: 540, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());