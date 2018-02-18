import * as React from 'react'
import render from '../../src/lib/render'

class App extends React.Component {
  render() {
    return (
      <sketch>
        <p>Tes2t</p>
      </sketch>
    )
  }
}

render(<App/>, document.getElementById('root') as HTMLElement)
