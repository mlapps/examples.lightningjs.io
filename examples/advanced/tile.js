class ExampleApp extends Lightning.Application {
    static _template() {
        return {
            Tile1: {mountY: 0.5, x: 100, y:270, type: Tile, item: {label: 'Train 1', src: './images/sample1.jpg'}},
            Tile2: {mountY: 0.5, x: 540, y:270, type: Tile, item: {label: 'Train 2', src: './images/sample2.jpg'}}
        }
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