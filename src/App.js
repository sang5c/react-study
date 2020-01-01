import React, {Component} from 'react';

class App extends Component {
    state = {
        count: 0,
        res: {},
        result: 'test!',
      result2: '',
    };

    callApi = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          // .then(json => console.log(json))
          .then(json => this.setState({
            res: json,
            result: json.title,
            result2: json.id
          }));
    };

    render() {
        return (
            <div className="App">
                <h3>API CALL TEST</h3>
                <div>
                  {this.state.result}<br/>
                  {this.state.result2}<br/>
                  <button onClick={this.callApi}>test api</button>
                </div>
            </div>
        );
    }
}

export default App;
