class ExampleApp extends Lightning.Application {
    static _template() {
        return {
            Rectangle: {mount: 0.5, x: 480, y:270, w: 600, h: 300, rect: true}
        }
    }
}
const options = {stage: {w: 960, h: 540, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());