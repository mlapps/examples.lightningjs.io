class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            HolePunch1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Hole, w: 100, h: 75, x: 40, y: 20}
            },
            HolePunch2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                color: 0xffff0000,
                rect: true,
                shader: {type: Lightning.shaders.Hole, w: 100, h: 75, x: 40, y: 20}
            },
            HolePunch3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.Hole, w: 75, h: 100, x: 140, y: 120}
            },
            HolePunch4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                rect: true,
                src: SRC,
                shader: {type: Lightning.shaders.Hole, w: 75, h: 100, x: 140, y: 120}
            },
            HolePunch5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorTop: 0xff00ff00,
                colorBottom: 0xffff0000,
                shader: {type: Lightning.shaders.Hole, w: 100, h: 75, x: 40, y: 20, radius: 10}
            },
            HolePunch6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                colorLeft: 0xff00ff00,
                colorRight: 0xffff0000,
                shader: {type: Lightning.shaders.Hole, w: 100, h: 75, x: 40, y: 20, radius: [10, 20]}
            },
            HolePunch7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                rect: true,
                shader: {type: Lightning.shaders.Hole, w: 75, h: 100, x: 140, y: 120, radius: [10, 20, 30]}
            },
            HolePunch8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Hole, topLeft: 40,  w: 75, h: 100, x: 140, y: 120}
            },
        }
    }

    _init() {
        this._animationDemo = this.animation({duration: 2, repeat: -1, actions: [
                {p: 'color', v: {0: 0xff000000, 0.5: 0xff888888, 1: 0xff000000}},
                {t: 'HolePunch8', p: 'shader.x', v: {0: 140, 0.5: 40, 1: 140}},
                {t: 'HolePunch8', p: 'shader.y', v: {0: 120, 0.5: 20, 1: 120}    }
            ]});
    }

    _active() {
        this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());