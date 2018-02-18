const { diff } = require('deep-object-diff')
const p5 = require('p5')

class P5SketchInstance {
  private events: P5Events<{preLoad, setup, draw}> = {preLoad: [], setup: [], draw: []}
  private sketch: p5

  constructor() {
    this.sketch = new p5((sketch) => {
      for (const event of Object.values(this.events)) {
        for (const callback of event) {
          // console.log(callback)
        }
      }
    })
  }

  public update(newEvents) {
/*    console.log(newEvents)
    console.log(diff(this.events, newEvents))*/
    this.events = newEvents
    this.sketch = new p5((sketch: p5) => {
      for (const event of Object.values(this.events)) {
        for (const callback of event) {
          sketch.draw = () => callback(sketch)
        }
      }
    })
  }

  public addHook(eventName: P5EventName, callback: (sketch: p5) => void) {
    const newEvents = {}

    Object.assign(newEvents, this.events)

    if (newEvents[eventName] === undefined) {
      newEvents[eventName] = []
    }

    newEvents[eventName].push(callback)

    this.update(newEvents)
  }
}

export default P5SketchInstance
