import P5Text from "./components/P5Text"

const Reconciler = require('react-reconciler')
const emptyObject = require('fbjs/lib/emptyObject')
import P5Base from './P5Base'
import P5Root from './P5Root'
import {createElement, getHostContextNode} from './utils'

const hostConfig = {
  appendInitialChild(parent: P5Base | Window, child: P5Base) {
    if (!parent || parent instanceof Window) {
      return
    }

    if (parent.appendChild) {
      parent.appendChild(child)
    }
  },

  createInstance(type: string, props: P5Props, root: P5Root, context: HostContext, fiber: FiberNode): P5Base | undefined {
    return createElement(type, root.target, props, root)
  },

  createTextInstance(text: string, root: P5Root, context: HostContext, fiber: FiberNode): P5Text {
    return new P5Text(root, {children: [text]})
  },

  finalizeInitialChildren(instance: P5Base, type: string, props: P5Props, root: P5Root): boolean {
    return false
  },

  getPublicInstance(inst: P5Base): P5Base {
    return inst
  },

  prepareForCommit() {
    // noop
  },

  prepareUpdate(instance: P5Base, type: string, oldProps: P5Props, newProps: P5Props, root: P5Root, context: HostContext): boolean {
    return true
  },

  resetAfterCommit() {
    // noop
  },

  resetTextContent(instance: P5Base) {
    // noop
  },

  getRootHostContext(root: P5Root): HostContext {
    return getHostContextNode(root)
  },

  getChildHostContext() {
    return emptyObject
  },

  shouldSetTextContent(type: string, props: P5Props): boolean {
    return false
  },

  now: () => performance.now(),

  useSyncScheduling: true,

  mutation: {
    appendChild(parent: P5Base, child: P5Base) {
      parent.appendChild(child)
    },

    appendChildToContainer(container: P5Root, child: P5Base) {
      container.appendChild(child)
    },

    removeChild(parent, child) {
      parent.removeChild(child)
    },

    removeChildFromContainer(container: P5Base, child: P5Base) {
      container.removeChild(child)
    },

    insertBefore(parent: P5Base, child: P5Base, beforeChild: P5Base) {
      // noob
    },

    commitUpdate(instance: P5Base, updatePayload: P5Props, type: string, oldProps: P5Props, newProps: P5Props) {
      // noop
    },

    commitMount(instance: P5Base, updatePayload: P5Props, type: string, oldProps: P5Props, newProps: P5Props) {
      // noop
    },

    commitTextUpdate(textInstance: P5Text, oldText: string, newText: string) {
      // textInstance.textValue = newText
    }
  }
}

const P5Renderer = Reconciler(hostConfig)

export {
  P5Renderer
}
