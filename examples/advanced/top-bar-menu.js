class ExampleApp extends Lightning.Application {
    static _template() {
        return {
            Menu: {
                w: 800, h: 80, x: 480, y: 270, mount: 0.5
            }
        }
    }

    _init() {
        this.index = 0;
        this.dataLength = 4;
        const buttons = [];
        for(let i = 0; i < this.dataLength; i++) {
            buttons.push({type: MenuItem, x: i * 200, label: `Button ${i + 1}`});
        }
        this.tag('Menu').children = buttons;
    }

    _handleLeft() {
        if(this.index === 0) {
            this.index = this.dataLength - 1;
        }
        else {
            this.index -= 1;
        }
    }

    _handleRight() {
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
            h: 80, w: 200, rect: true,
            Label: {
                x: w => w / 2, y: h => h / 2, mountX: 0.5, mountY: 0.45, color: 0xff000000, text: {fontSize: 32}
            }
        }
    }

    set label(value) {
        if(typeof value === 'string') {
            value = {text: value}
        }
        this.tag('Label').text = value;
    }

    get padding() {
        return this._padding || 5;
    }

    set padding(num) {
        this._padding = num;
    }

    _init() {
        const label = this.tag('Label');
        label.on('txLoaded', () => {
            if(this.w < label.renderWidth + this.padding * 2) {
                this.w = label.renderWidth + this.padding * 2;
            }
        });
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