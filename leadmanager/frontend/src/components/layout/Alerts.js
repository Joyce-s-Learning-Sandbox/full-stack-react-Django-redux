/** @format */

import React, { useEffect, useRef, useState, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Alerts = ({ alert, error, message }) => {
    const propTypes = {
        errors: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }
    const prevErrorRef = useRef()
    const [prevError, setPrevError] = useState({})

    useEffect(() => {
        prevErrorRef.current = error
        if (error !== prevError) {
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`)
            if (error.msg.message)
                alert.error(`Message: ${error.msg.message.join()}`)
        }
        return () => {
            setPrevError(prevErrorRef.current)
        }
    }, [error])

    console.log(!(error !== prevError && Object.keys(prevError).length != 0))
    if (
        !(error !== prevError && Object.keys(prevError).length != 0) &&
        message !== prevError.message
    ) {
        if (message.deleteLead) alert.success(message.deleteLead)
        if (message.addLead) alert.success(message.addLead)
    }

    return <Fragment />
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))
