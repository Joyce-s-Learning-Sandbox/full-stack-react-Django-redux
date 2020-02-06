/** @format */

import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'

import { Provider } from 'react-redux'
import store from '../store'

// Alert Options
const options = {
    position: 'top center',
    timeout: 1500
    // transition: transitions.SCALE
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className='container'>
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
