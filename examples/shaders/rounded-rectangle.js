class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            RoundedRectangle1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.RoundedRectangle, radius: 50}
            },
            RoundedRectangle2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                color: 0xffff0000,
                rect: true,
                shader: {type: Lightning.shaders.RoundedRectangle, radius: [50, 90]}
            },
            RoundedRectangle3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.RoundedRectangle, radius: [50, 70, 30]}
            },
            RoundedRectangle4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                src: SRC,
                shader: {type: Lightning.shaders.RoundedRectangle, radius: [40, 0, 0, 0]}
            },
            RoundedRectangle5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorTop: 0xff00ff00,
                colorBottom: 0xffff0000,
                shader: {type: Lightning.shaders.RoundedRectangle, radius: 75, stroke: 10, strokeColor: 0xffffffff}
            },
            RoundedRectangle6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorLeft: 0xff00ff00,
                colorRight: 0xffff0000,
                shader: {type: Lightning.shaders.RoundedRectangle, radius: [50, 70], stroke: 15, strokeColor: 0xff0000ff}
            },
            RoundedRectangle7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.RoundedRectangle, radius: [50, 70, 30], stroke: 10, strokeColor: 0xffffffff}
            },
            RoundedRectangle8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.RoundedRectangle, topLeft: 70, stroke: 10, strokeColor: 0xffffffff}
            },
        }
    }

    _init() {
        this._animationDemo = this.tag('RoundedRectangle8').animation({duration: 2, repeat: -1, actions: [
                {p: 'shader.fillColor', v: {0: 0xffffffff, 0.5: 0xff000000, 1: 0xffffffff}},
                {p: 'shader.topLeft', v: {0: 70, 0.5: 0, 1: 70}}
            ]});
    }

    _active() {
        this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());