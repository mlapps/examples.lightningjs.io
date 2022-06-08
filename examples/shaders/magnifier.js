class ExampleApp extends Lightning.Application {
    static _template() {
        const offset = 120;
        return {
            w: 1920, h: 1080,
            Scene: {
                x: 240,
                y: 200,
                w: 1440,
                h: 680,
                rtt: true,
                Lorem: {
                    w: 1440,
                    text: {text: `A bardic name (Welsh: enw barddol, Cornish: hanow bardhek) is a pseudonym used in Wales, Cornwall, or Brittany by poets and other artists, especially those involved in the eisteddfod movement.

                    The Welsh term bardd ("poet") originally referred to the Welsh poets of the Middle Ages, who might be itinerant or attached to a noble household. Some of these medieval poets were known by a pseudonym, for example Cynddelw Brydydd Mawr ("Cynddelw the Master Poet"), fl. 1155–1200 and Iolo Goch ("Iolo the Red"), c. 1320 – c. 1398. The practice seems to have very ancient antecedents, as in the names of the presumably 6th century poets Talhaearn Tad Awen, Blwchfardd and Culfardd, mentioned by the Welsh historian Nennius alongside Taliesin and Aneirin, the last referred to as Aneurin Gwenithwawd ("Aneurin of the Corn Poetry").
                    
                    The revival of bardic names became something of a conceit following the reinvention of medieval tradition by Iolo Morganwg in the 18th century. The usage has also extended to Breton and Cornish poetry.[1] In Cornwall, some of the pioneers of the Cornish language movement are referred to by their bardic names, e.g. "Mordon" for Robert Morton Nance, and "Talek" for E. G. Retallack Hooper.[2]`, textAlign: "center"}
                },
                shader: {
                    type: Lightning.shaders.Magnifier,
                    w: 300,
                    h: 300,
                    x: offset,
                    y: 0,
                    radius: 150
                }
            },
            MagnifierBorder: {
                x: 240 + offset,
                y: 200,
                w: 300, h: 300,
                rect: true,
                shader: {
                    type: Lightning.shaders.RoundedRectangle,
                    stroke: 5,
                    strokeColor: 0xffff0000,
                    fillColor: 0x00ffffff,
                    radius: 150
                }
            }
        }
    }

    _init() {
        const SIZE = 300;
        const items = [];
        // for(let i = 0; i < 2; i++) {
        //     for(let j = 0; j < 4; j++) {
        //         items.push({
        //             x: j * 380,
        //             y: i * 380,
        //             w: SIZE,
        //             h: SIZE,
        //             src: `./images/sample${Math.floor((Math.random() * 6) + 1)}.jpg`
        //         });
        //     }
        // }
        // const offsetX = 240;
        // const offsetY = 200;
        // this.tag('Scene').children = items;
        // this._animationDemo = this.animation({duration: 10, repeat: -1, actions: [
        //     {t: 'Scene', p: 'shader.x', v: {0: 0, 0.5: 1290, 1: 0}},
        //     {t: 'Scene', p: 'shader.y', v: {0: 0, 0.5: 530, 1: 0}},
        //     {t: 'MagnifierBorder', p: 'x', v: {0: offsetX, 0.5: offsetX + 1290, 1: offsetX}},
        //     {t: 'MagnifierBorder', p: 'y', v: {0: offsetY, 0.5: offsetY + 530, 1: offsetY}}
        // ]});
    }

    _active() {
        // this._animationDemo.start();
    }
}
const options = {stage: {w: 1920, h: 1080, clearColor: 0x00000000}};
const app = new ExampleApp(options);
document.body.appendChild(app.stage.getCanvas());