import P5Base from './P5Base'
import P5SketchInstance from "./sketch/P5SketchInstance"

export default class P5Root extends P5Base {
  public target: HTMLElement

  constructor(target: HTMLElement) {
    super(false, null, null)

    this.target = target
    this.sketch = new P5SketchInstance()
  }
}
