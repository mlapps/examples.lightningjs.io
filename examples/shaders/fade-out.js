class ExampleApp extends Lightning.Application {
    static _template() {
        const SIZE = 300;
        const SRC = './images/sample1.jpg';
        return {
            w: 1920, h: 1080,
            FadeOut1: {
                x: 90,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.FadeOut, top: 40}
            },
            FadeOut2: {
                x: 480,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.FadeOut, top: 40, right: 40}
            },
            FadeOut3: {
                x: 870,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.FadeOut, top: 40, right: 40, bottom: 40}
            },
            FadeOut4: {
                x: 1260,
                y: 90,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.FadeOut, top: 40, right: 40, bottom: 40, left: 40}
            },
            FadeOut5: {
                x: 90,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.FadeOut, fade: 40}
            },
            FadeOut6: {
                x: 480,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.FadeOut, fade: [40, 0, 40, 0]}
            },
            FadeOut7: {
                x: 870,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.FadeOut, fade: [0, 40, 0, 40]}
            },
            FadeOut8: {
                x: 1260,
                y: 480,
                w: SIZE,
                h: SIZE,
                src: SRC,
                shader: {type: Lightning.shaders.FadeOut, fade: [0, 40]}
            },
            FadeOutText: {
                x: 90,
                y: 840,
                w: SIZE,
                h: 80,
                rtt: true,
                shader: {type: Lightning.shaders.FadeOut, right: 40},
                Label: {text: {text: 'This piece of text is way to long!', fontSize: 42}}
            }
        }
    }

    _handleUp() {
        this.tag('FadeOut1').animation({duration: 0.2, actions: [
                {p: 'shader.top', v: {0: 1, 1: 40}}
            ]}).start();
    }

    _handleDown() {
        this.tag('FadeOut1').animation({duration: 0.2, actions: [
                {p: 'shader.bottom', v: {0: 1, 1: 40}}
            ]}).start();
    }

    _handleLeft() {
        this.tag('FadeOut1').animation({duration: 0.2, actions: [
                {p: 'shader.left', v: {0: 1, 1: 40}}
            ]}).start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());