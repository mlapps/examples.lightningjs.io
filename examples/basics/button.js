class ExampleApp extends Lightning.Application {
    static _template() {
        return {
            Button: {mount: 0.5, x: 480, y:270, type: Button, label: 'Button'}
        }
    }
}

class Button extends Lightning.Component {
    static _template() {
        return {
            h: 50, w: 200, rect: true,
            Label: {
                x: 10, color: 0xff000000, text: {fontSize: 32}
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