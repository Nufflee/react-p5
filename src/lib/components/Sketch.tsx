import P5Base from "../P5Base"
import P5Root from "../P5Root"
import {addText} from "../P5Manager"
import P5Text from "./P5Text";

class P5Sketch extends P5Base {
  constructor(root: P5Root, props: P5Props) {
    super(false, root, props)
  }

  appendChild(child) {
    super.appendChild(child)
  }

  removeChild(child) {
    super.removeChild(child)
  }

  renderChildNode() {
    for (let i = 0; i < this.children.length; i += 1) {
      if (this.children[i] instanceof P5Text) {
        addText(this.children[i])
      } else if (this.children[i] instanceof P5Base) {
        this.children[i].render()
      }
    }
  }

  render() {
    this.renderChildNode()
  }
}

export default P5Sketch