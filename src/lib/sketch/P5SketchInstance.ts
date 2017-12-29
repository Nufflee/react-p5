const { diff } = require('deep-object-diff')

class P5SketchInstance {
  private events: {}

  constructor (private p5Instance: p5) {

  }

  public update(newEvents) {
    console.log(newEvents)
    console.log(diff(this.events, newEvents))
  }

  public addHook(eventName: P5EventName, callback: () => void) {
    let newEvents = {}

    Object.assign(newEvents, this.events)
    newEvents[eventName].push(callback)

    this.update(newEvents)
  }
}

export default P5SketchInstance