class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            RadialGradient1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.RadialGradient, x: 150, outerColor: 0xffff0000, innerColor: 0xff0000ff}
            },
            RadialGradient2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                color: 0xffff0000,
                shader: {type: Lightning.shaders.RadialGradient, x: 50, y: 50, radiusX: 30, radiusY: 10, color: 0xff000000}
            },
            RadialGradient3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.RadialGradient, pivotY: 1, outerColor: 0xffff0000, innerColor: 0xff0000ff}
            },
            RadialGradient4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.RadialGradient, pivotX: 1, outerColor: 0xffff0000, innerColor: 0xff0000ff}
            },
            RadialGradient5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorTop: 0xff00ff00,
                colorBottom: 0xffff0000,
                shader: {type: Lightning.shaders.RadialGradient, radius: 75, pivot: 0.5, innerColor: 0xff0000ff}
            },
            RadialGradient6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorLeft: 0xff00ff00,
                colorRight: 0xffff0000,
                shader: {type: Lightning.shaders.RadialGradient, radius: 75, pivot: 0.5, innerColor: 0xff0000ff}
            },
            RadialGradient7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.RadialGradient, pivot: [0.3, 0.9], outerColor: 0xffff0000, innerColor: 0xff0000ff}
            },
            RadialGradient8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.RadialGradient, x: 150, innerColor: 0xff0000ff}
            }
        }
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());