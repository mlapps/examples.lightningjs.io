class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            Pixelate1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Pixelate, size: 4}
            },
            Pixelate2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Pixelate, size: 8}
            },
            Pixelate3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Pixelate, size: 16}
            },
            Pixelate4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Pixelate, size: 32}
            },
            Pixelate5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Pixelate, x: 16, y: 32}
            },
            Pixelate6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Pixelate, y: 16, x: 32}
            },
            Pixelate7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Pixelate, y: SIZE, x: 16}
            },
            Pixelate8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Pixelate, size: 4}
            }
        }
    }

    _init() {
        this._animationDemo = this.animation({duration: 2, repeat: -1, actions: [
            {t: 'Pixelate7', p: 'shader.h', v: {0: 300 / 2, 0.5: 16, 1: 300 / 2}},
            {t: 'Pixelate8', p: 'shader.size', v: {0: 0, 0.5: 32, 1: 0}}
        ]});
    }

    _active() {
        this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());