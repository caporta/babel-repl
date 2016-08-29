import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'Enter your ES6+/JSX/React here!',
            output: '',
            err: ''
        }
        this.update = this.update.bind(this);
    }
    render() {
        return(
            <div>
                <header><span>{this.state.err}</span></header>
                <div className="container">
                    <textarea onChange={this.update} defaultValue={this.state.placeholder}></textarea>
                    <pre>{this.state.output}</pre>
                </div>
            </div>
        );
    }
    update(el) {
        let input = el.target.value;
        try {
            this.setState({
                output: Babel.transform(input, {
                    presets: ['es2015', 'react']
                }).code,
                err: ''
            });
        } catch (err) {
            this.setState({err: err.message});
        }
    }
}

export default App;
