class ExampleApp extends Lightning.Application {
    static _template() {
        return {
            Menu: {
                w: 300, h: 400, x: 480, y: 270, mount: 0.5, rect: true
            }
        }
    }

    _init() {
        this.index = 0;
        this.dataLength = 8;
        const buttons = [];
        for(let i = 0; i < this.dataLength; i++) {
            buttons.push({type: MenuItem, y: i * 50, w: 300, label: `Button ${i + 1}`});
        }
        this.tag('Menu').children = buttons;
    }

    _handleUp() {
        if(this.index === 0) {
            this.index = this.dataLength - 1;
        }
        else {
            this.index -= 1;
        }
    }

    _handleDown() {
        if(this.index === this.dataLength - 1) {
            this.index = 0;
        }
        else {
            this.index += 1;
        }
    }

    _getFocused() {
        return this.tag('Menu').children[this.index];
    }
}

class MenuItem extends Lightning.Component {
    static _template() {
        return {
            h: 50, w: 200, rect: true,
            Label: {
                y: h => h / 2, mountY: 0.5, color: 0xff000000, text: {fontSize: 32}
            }
        }
    }

    set label(value) {
        this.tag('Label').text = value.toString();
    }

    _focus() {
        this.patch({
            smooth: {color: 0xff763ffc},
            Label: {
                smooth: {color: 0xffffffff}
            }
        });
    }

    _unfocus() {
        this.patch({
            smooth: {color: 0xffffffff},
            Label: {
                smooth: {color: 0xff000000}
            }
        });
    }
 }

const options = {stage: {w: 960, h: 540, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());