class ExampleApp extends Lightning.Application {
    static _template() {
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            SpinnerExample1: {
                x: 90,
                y: 90,
                w: 300,
                h: 300,
                rect: true,
                src: SRC,
                shader: {type: Lightning.shaders.Spinner2, radius: 100, width: 50}
            },
            SpinnerExample2: {
                x: 450,
                y: 90,
                w: 80,
                h: 80,
                src: SRC,
                shader: {type: Lightning.shaders.Spinner2}
            },
            SpinnerExample3: {
                x: 580,
                y: 90,
                w: 120,
                h: 120,
                rect: true,
                shader: {type: Lightning.shaders.Spinner2, color: 0xffff0000, stroke: 15, showDot: true}
            },
            SpinnerExample4: {
                x: 730,
                y: 90,
                w: 150,
                h: 150,
                rect: true,
                shader: {type: Lightning.shaders.Spinner2, color: 0xffff0000, backgroundColor: 0xff0000ff, stroke: 10, showDot: true}
            },
            SpinnerExample5: {
                x: 90,
                y: 480,
                w: 150,
                h: 150,
                rect: true,
                shader: {type: Lightning.shaders.Spinner2, stroke: 10, showDot: true}
            },
            SpinnerExample6: {
                x: 350,
                y: 480,
                w: 150,
                h: 150,
                rect: true,
                shader: {type: Lightning.shaders.Spinner2, stroke: 10, showDot: true}
            },
            SpinnerExample7: {
                x: 610,
                y: 480,
                w: 150,
                h: 150,
                rect: true,
                shader: {type: Lightning.shaders.Spinner2, clockwise: true, stroke: 10, showDot: true}
            },
            SpinnerExample8: {
                x: 870,
                y: 480,
                w: 150,
                h: 150,
                src: SRC,
                shader: {type: Lightning.shaders.Spinner2, stroke: 10, showDot: true}
            }
        }
    }

    _init() {
        this._animationDemo = this.animation({duration: 2, repeat: -1, actions: [
            {t: 'SpinnerExample5', p: 'shader.stroke', v: {0: 10, 0.5: 20, 1: 10}},
            {t: 'SpinnerExample6', p: 'shader.radius', v: {0: 75, 0.5: 40, 1: 75}},
            {t: 'SpinnerExample7', p: 'shader.stroke', v: {0: 10, 0.5: 20, 1: 10}},
            {t: 'SpinnerExample7', p: 'shader.radius', v: {0: 75, 0.5: 40, 1: 75}},
            {t: 'SpinnerExample8', p: 'shader.stroke', v: {0: 10, 0.5: 20, 1: 10}},
            {t: 'SpinnerExample8', p: 'shader.radius', v: {0: 75, 0.5: 40, 1: 75}},
            {t: 'SpinnerExample8', p: 'shader.color', v: {0: 0xffff0000, 0.5: 0xff0000ff, 1: 0xffff0000}},
        ]});
    }

    _active() {
        this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());