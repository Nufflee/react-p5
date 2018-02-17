import P5Root from "./P5Root"
import P5SketchInstance from "./sketch/P5SketchInstance";

export default class P5Base {
  //TODO: Do I need this?
  protected p5Sketch: P5SketchInstance
  private _props: P5Props
  public children: Array<P5Base | string> = []
  public parent: P5Base
  public root: P5Root
  //TODO: Make this work
  public id: number
  //TODO: Move text to P5Text
  public isText: boolean

  constructor(isText: boolean, root: P5Root, props: P5Props/*, p5Sketch: P5SketchInstance*/) {
    this.isText = isText
    this.root = root
    this._props = props

    if (root)
      this.p5Sketch = root.p5Sketch
}

  updateProps(nextProps: P5Props) {
    this._props = nextProps

    this.updateP5()
  }

  appendChild(child: P5Base | string) {
    if(!child)
      return

    if (!this.isText  && typeof child === 'string') {
      throw Error('Can not append text child to a non-text component')
    }

    child = child as P5Base

    this.children.push(child)

    if(typeof child !== 'string') {
      child.parent = this
      child.root = this.root
    }
  }

  removeChild(child: P5Base) {
    if (!child) {
      return
    }

    if (child.parent !== this) {
      throw new Error('Cannot remove child because this is not it\'s parent.')
    }

    const index = this.children.indexOf(child)

    this.children.splice(index, 1)

    child.parent = null
  }

  render() {
    for (const child of this.children) {
      if(child instanceof P5Base) {
        child.render()
      }
    }
  }

  private updateP5() {
    console.log('update?')
  }

  set props(newProps: P5Props) {
    this.updateProps(newProps)
  }

  get props() {
    return this._props
  }
}