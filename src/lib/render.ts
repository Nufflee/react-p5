import {ReactElement} from 'react'
import { P5Renderer } from './P5Reconciler'
import {createElement} from './utils'

export default function render<T>(element: ReactElement<T>, target: HTMLElement) {
  P5Renderer.injectIntoDevTools({
    bundleType: 1,
    version: '0.0.1',
    renderPackageName: 'p5renderer',
    findHostInstanceByFiber: P5Renderer.findHostInstance
  })

  const container = createElement('ROOT', target)

  const node = P5Renderer.createContainer(container)

  P5Renderer.updateContainer(element, node, null)

  container.render()

  return container
}
