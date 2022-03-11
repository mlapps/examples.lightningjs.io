class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            Vignette1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Vignette, magnitude: 3, intensity: 0.3}
            },
            Vignette2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Vignette, magnitude: 3, intensity: 0.6}
            },
            Vignette3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Vignette, magnitude: 3, intensity: 0.8}
            },
            Vignette4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Vignette, magnitude: 3, intensity: 1}
            },
            Vignette5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorTop: 0xff00ff00,
                colorBottom: 0xffff0000,
                shader: {type: Lightning.shaders.Vignette, magnitude: 5, intensity: 0.7}
            },
            Vignette6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorLeft: 0xff00ff00,
                colorRight: 0xffff0000,
                shader: {type: Lightning.shaders.Vignette, magnitude: 7, intensity: 0.7}
            },
            Vignette7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Vignette, magnitude: 9, intensity: 0.7}
            },
            Vignette8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Vignette, magnitude: 10, intensity: 0.7}
            },
        }
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());