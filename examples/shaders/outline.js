class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            Outline1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                color: 0xff00ff00,
                shader: {type: Lightning.shaders.Outline, width: 5}
            },
            Outline2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                color: 0xffff0000,
                rect: true,
                shader: {type: Lightning.shaders.Outline, width: 30}
            },
            Outline3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.Outline, width: 10, color: 0xffff00ff}
            },
            Outline4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                src: SRC,
                shader: {type: Lightning.shaders.Outline, width: 20}
            },
            Outline5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorTop: 0xff00ff00,
                colorBottom: 0xffff0000,
                shader: {type: Lightning.shaders.Outline, width: 10, color: 0xffffffff}
            },
            Outline6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorLeft: 0xff00ff00,
                colorRight: 0xffff0000,
                shader: {type: Lightning.shaders.Outline, width: 14, color: 0xff0000ff}
            },
            Outline7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.Outline, width: 18, color: 0xff00ff00}
            },
            Outline8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Outline, width: 10, color: 0xffffffff}
            }
        }
    }

    _init() {
        this._animationDemo = this.animation({duration: 0.8, repeat: -1, actions: [
            {t: 'Outline7', p: 'shader.width', v: {0: 0, 0.5: 30, 1: 0}}
        ]});
    }

    _active() {
        this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());