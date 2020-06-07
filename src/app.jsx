import React from 'react'
import ReactDOM from 'react-dom'
import './app.less'

class App extends React.Component {
    render() {
        return (
            <div>React Source : root/code/packages</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))