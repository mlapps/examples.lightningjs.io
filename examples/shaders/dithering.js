class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            Dithering1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Dithering, graining: 0.1}
            },
            Dithering2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Dithering, graining: 0.2}
            },
            Dithering3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Dithering, graining: 0.3}
            },
            Dithering4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Dithering, graining: 0.5}
            },
            Dithering5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Dithering, graining: 0.6}
            },
            Dithering6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Dithering, graining: 0.8}
            },
            Dithering7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Dithering, graining: 0.9}
            },
            Dithering8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Dithering, graining: 0.3, random: true}
            },
        }
    }

    _init() {
        this._animationDemo = this.animation({duration: 2, repeat: -1, actions: [
                {t: 'Dithering8', p: 'shader.graining', v: {0: 0.2, 0.5: 0.9, 1: 0.2}}
            ]});
    }

    _active() {
        this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());