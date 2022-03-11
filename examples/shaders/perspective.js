class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const rotate45 = Math.PI * 0.25;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            Perspective1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Perspective, rx: rotate45}
            },
            Perspective2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Perspective, ry: rotate45}
            },
            Perspective3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Perspective, rx: rotate45}
            },
            Perspective4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Perspective, ry: rotate45}
            },
            Perspective5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Perspective, rx: -rotate45}
            },
            Perspective6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Perspective, ry: -rotate45}
            },
            Perspective7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Perspective, rx: -rotate45}
            },
            Perspective8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.Perspective, ry: -rotate45}
            }
        }
    }

    _init() {
        const rotate45 = Math.PI * 0.25;
        this._animationDemo = this.animation({duration: 2, repeat: -1, actions: [
            {t: 'Perspective1' ,p: 'shader.rx', v: {0: rotate45, 0.5: -rotate45, 1.0: rotate45}},
            {t: 'Perspective5' ,p: 'shader.rx', v: {0: -rotate45, 0.5: rotate45, 1.0: -rotate45}},
            {t: 'Perspective2' ,p: 'shader.ry', v: {0: rotate45, 0.5: -rotate45, 1.0: rotate45}},
            {t: 'Perspective6' ,p: 'shader.ry', v: {0: -rotate45, 0.5: rotate45, 1.0: -rotate45}},
            {t: 'Perspective3' ,p: 'shader.rx', v: {0: rotate45, 0.5: -rotate45, 1.0: rotate45}},
            {t: 'Perspective7' ,p: 'shader.rx', v: {0: -rotate45, 0.5: rotate45, 1.0: -rotate45}},
            {t: 'Perspective4' ,p: 'shader.ry', v: {0: rotate45, 0.5: -rotate45, 1.0: rotate45}},
            {t: 'Perspective8' ,p: 'shader.ry', v: {0: -rotate45, 0.5: rotate45, 1.0: -rotate45}}
        ]});
    }

    _active() {
        this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());