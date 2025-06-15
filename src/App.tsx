// App.tsx

import React, { Component } from 'react';
import Result from './components/Result';
import './App.css';

interface AppProps {
    secret?: number;
}

interface AppState {
    term: string;
}

class App extends Component<AppProps, AppState> {
    static defaultProps = {
        secret: Math.floor(Math.random() * 20) + 1
    };

    constructor(props: AppProps) {
        super(props);
        this.state = { term: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            [event.target.name]: event.target.value
        } as Pick<AppState, keyof AppState>);
    }

    render() {
        return (
            <div className='container'>
                <div className='head'>
                    <label htmlFor='term'>
                        Guess Number between 1 to 20
                    </label>
                </div>
                <input
                    id='term'
                    type='text'
                    name='term'
                    value={this.state.term}
                    onChange={this.handleChange}
                />

                <Result term={this.state.term} secretNum={this.props.secret} />
            </div>
        );
    }
}

export default App;

