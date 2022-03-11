class ExampleApp extends Lightning.Application {
    static _template() {
        return {
            Button1: {x: 100, y:270, mountY: 0.5, type: Button, label: 'Button 1'},
            Button2: {x: 380, y: 270, h: 100, mountY: 0.5, type: Button, label: 'Button 2'},
            Button3: {x: 660, y: 270, h: 200, mountY: 0.5, type: Button, label: {text: '3', fontSize: 92}}
        }
    }

    _init() {
        this._setState('Button1');
    }

    static _states() {
        return [
            class Button1 extends this {
                _getFocused() {
                    return this.tag('Button1');
                }
                _handleRight() {
                    this._setState('Button2');
                }
            },
            class Button2 extends this {
                _getFocused() {
                    return this.tag('Button2');
                }
                _handleLeft() {
                    this._setState('Button1');
                }
                _handleRight() {
                    this._setState('Button3');
                }
            },
            class Button3 extends this {
                _getFocused() {
                    return this.tag('Button3');
                }
                _handleLeft() {
                    this._setState('Button2');
                }
            }
        ]
    }
}

class Button extends Lightning.Component {
    static _template() {
        return {
            h: 50, w: 200, rect: true,
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