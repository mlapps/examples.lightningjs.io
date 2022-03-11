class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const rotate45 = Math.PI * 0.25;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            Light3d1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Light3d, rx: rotate45, strength: 0.3}
            },
            Light3d2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Light3d, ry: rotate45, strength: 0.5}
            },
            Light3d3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Light3d, rx: rotate45, pivotX: SIZE, strength: 0.7}
            },
            Light3d4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Light3d, ry: rotate45, pivotY: SIZE, strength: 0.9}
            },
            Light3d5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Light3d, rx: -rotate45, ambient: 0.2}
            },
            Light3d6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Light3d, ry: -rotate45, ambient: 0.4}
            },
            Light3d7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Light3d, rx: -rotate45, pivotX: SIZE, ambient: 0.6}
            },
            Light3d8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Light3d, ry: -rotate45, pivotY: 0, ambient: 0.8}
            },
        }
    }

    _init() {
        this._animationDemo = this.animation({duration: 2, repeat: -1, actions: [
            {t: 'Inversion8', p: 'shader.amount', v: {0: 0, 0.5: 1, 1: 10}}
        ]});
    }

    _active() {
        this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());