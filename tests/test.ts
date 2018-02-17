import P5Base from '../src/lib/P5Base'
import P5Root from "../src/lib/P5Root";

declare function expect(args: any): any

describe('P5Base', () => {
  test('should append children', () => {
    const base = new P5Base(false, null, null)

    base.appendChild(new P5Base(false, null, null))

    expect(base.children.length).toBe(1)
  })

  test('should remove children', () => {
    const base = new P5Base(false, null, null)

    const child = new P5Base(false, null, null)

    base.appendChild(child)
    base.removeChild(child)

    expect(base.children.length).toBe(0)
  })

  test('should have a parent', () =>{
    const base = new P5Base(false, null, null)

    const child = new P5Base(false, null, null)

    base.appendChild(child)

    expect(child.parent).toBe(base)
  })

  test('shouldn\'t remove others\' children', () => {
    const base = new P5Base(false, null, null)

    base.appendChild(new P5Base(false, null, null))

    expect(() => base.removeChild(new P5Base(false, null, null))).toThrowError('Cannot remove child because this is not it\'s parent.')
  })

  test('should have a root', () => {
    const root = new P5Root(null)
    const base = new P5Base(false, root, null)

    const child = new P5Base(false, null, null)
    const child2 = new P5Base(false, null, null)
    const child3 = new P5Base(false, null, null)

    base.appendChild(child)
    child.appendChild(child2)
    child2.appendChild(child3)

    expect(child3.root).toBe(root)
  })

  test('should have props', () => {
    const base = new P5Base(false, null, null)

    base.props = {
      textValue: 'text'
    }

    expect(base.props).toEqual({
      textValue: 'text'
    })
  })

  test('should update props', () =>{
    const base = new P5Base(false, null, null)

    base.props = {
      textValue: 'text1'
    }

    base.props = {
      textValue: 'text2'
    }

    expect(base.props.textValue).toBe('text2')
  })

  test('', () => {

  })
})