import P5Base from '../P5Base'
import P5Root from '../P5Root'
import {addText} from '../P5Manager'

class P5Text extends P5Base {
  //public textValue: string

  constructor(root: P5Root, props: P5Props) {
    super(true, root, props)
  }

  appendChild(child: P5Base) {
    super.appendChild(child)
  }

  removeChild(child: P5Base) {
    super.removeChild(child)
  }

  renderChildren() {
    for (let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === 'string') {
        addText(this.children[i])
      } // else { some_custom_method(); } here it's upto you how do you handle the nested components. For our example, we won't go into much details.
    }
  }

  render() {
    this.renderChildren()
  }
}

export default P5Text