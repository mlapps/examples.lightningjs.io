class ExampleApp extends Lightning.Application {
    static _template() {
        return {
            Image: {mount: 0.5, x: 480, y:270, w: 300, h: 300, src: './images/sample1.jpg'}
        }
    }
}
const options = {stage: {w: 960, h: 540, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());