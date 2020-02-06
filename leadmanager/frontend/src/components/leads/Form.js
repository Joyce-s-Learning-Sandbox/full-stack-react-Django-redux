/** @format */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLead } from '../../actions/leads'

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const { name, email, message } = this.state
        const lead = { name, email, message }
        this.props.addLead(lead)
    }

    render() {
        const { name, email, message } = this.state
        return (
            <Fragment>
                <div className='card card-body mt-4 mb-4'>
                    <h2>Add Lead</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label style={{ width: '100%' }}>
                                Name
                                <input
                                    onChange={this.onChange}
                                    value={name}
                                    id='name'
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter name'
                                />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label style={{ width: '100%' }}>
                                Email address
                                <input
                                    onChange={this.onChange}
                                    value={email}
                                    id='email'
                                    type='email'
                                    className='form-control'
                                    placeholder='Enter email'
                                />
                            </label>
                            <small
                                id='emailHelp'
                                className='form-text text-muted'
                            >
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className='form-group'>
                            <label style={{ width: '100%' }}>
                                Message
                                <input
                                    onChange={this.onChange}
                                    value={message}
                                    id='message'
                                    type='message'
                                    className='form-control'
                                    placeholder='Enter message'
                                />
                            </label>
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default connect(null, { addLead })(Form)
