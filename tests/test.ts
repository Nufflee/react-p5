import P5Base from '../src/lib/P5Base'
import P5Root from "../src/lib/P5Root";
const expect = require('chai').expect

describe('P5Base', () => {
  it('should append children', () => {
    const base = new P5Base(false, null, null)

    base.appendChild(new P5Base(false, null, null))

    expect(base.children.length).to.be.equal(1)
  })

  it('should remove children', () => {
    const base = new P5Base(false, null, null)

    const child = new P5Base(false, null, null)

    base.appendChild(child)
    base.removeChild(child)

    expect(base.children.length).to.be.equal(0)
  })

  it('should have a parent', () =>{
    const base = new P5Base(false, null, null)

    const child = new P5Base(false, null, null)

    base.appendChild(child)

    expect(child.parent).to.be.equal(base)
  })

  it('shouldn\'t remove others\' children', () => {
    const base = new P5Base(false, null, null)

    base.appendChild(new P5Base(false, null, null))

    expect(() => base.removeChild(new P5Base(false, null, null))).to.throw('Cannot remove child because this is not it\'s parent.')
  })

  it('should have a root', () => {
    const root = new P5Root(null)
    const base = new P5Base(false, root, null)

    const child = new P5Base(false, null, null)
    const child2 = new P5Base(false, null, null)
    const child3 = new P5Base(false, null, null)

    base.appendChild(child)
    child.appendChild(child2)
    child2.appendChild(child3)

    expect(child3.root).to.be.equal(root)
  })

  it('should have props', () => {
    const base = new P5Base(false, null, null)

    base.props = {
      textValue: 'text'
    }

    expect(base.props).to.deep.equal({
      textValue: 'text'
    })
  })

  it('should update props', () =>{
    const base = new P5Base(false, null, null)

    base.props = {
      textValue: 'text1'
    }

    base.props = {
      textValue: 'text2'
    }

    expect(base.props.textValue).to.be.equal('text2')
  })

  it('', () => {

  })
})