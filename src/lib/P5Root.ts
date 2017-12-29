import P5Base from './P5Base'
import P5SketchInstance from "./sketch/P5SketchInstance";
const p5 = require('p5')

export default class P5Root extends P5Base {
  public target: HTMLElement
  public sketch: P5SketchInstance

  constructor(target: HTMLElement) {
    super(false, null, null)

    this.target = target
    this.sketch = new P5SketchInstance(new p5())
  }
}