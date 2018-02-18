import P5Base from '../P5Base'
import {addText} from '../P5Manager'
import P5Root from '../P5Root'
import P5SketchInstance from "../sketch/P5SketchInstance"

class P5Text extends P5Base {
  public textValue: string

  constructor(root: P5Root, props: P5Props) {
    super(true, root, props)

    this.textValue = props.children[0]
  }

  appendChild(child: P5Base) {
    super.appendChild(child)
  }

  removeChild(child: P5Base) {
    super.removeChild(child)
  }

  renderChildren() {
    for (const child of this.children) {
      if (child instanceof P5Text) {
        this.sketch.addHook('draw', (p5) => {
          p5.textSize(32)
          p5.text(child.textValue, 10, 10)
        })
      } // else { some_custom_method(); } here it's upto you how do you handle the nested components. For our example, we won't go into much details.
    }
  }

  render() {
    this.renderChildren()
  }
}

export default P5Text
