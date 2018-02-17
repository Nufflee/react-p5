const { diff } = require('deep-object-diff')
const p5 = require('p5')

class P5SketchInstance {
  private events: {}
  private sketch: p5

  constructor () {
    this.sketch = new p5((sketch) => {
      for (const event in this.events) {
        console.log(event)
      }
    })
  }

  public update(newEvents) {
    console.log(newEvents)
    console.log(diff(this.events, newEvents))
  }

  public addHook(eventName: P5EventName, callback: (p5: p5) => void) {
    let newEvents = {}

    Object.assign(newEvents, this.events)
    newEvents[eventName].push(callback)

    this.update(newEvents)
  }
}

export default P5SketchInstance