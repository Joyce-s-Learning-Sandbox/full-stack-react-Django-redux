/** @format */

import axios from 'axios'
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types' // import the type

// make HTTP requests

// GET LEADS action
export const getLeads = () => dispatch => {
    //dispatch an action to the reducer
    axios
        .get('/api/leads') //will return a promise
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// DELETE LEAD
export const deleteLead = id => dispatch => {
    axios
        .delete(`/api/leads/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        })
        .catch(err => console.log(err))
}

//ADD LEAD
export const addLead = lead => dispatch => {
    axios
        .post('/api/leads/', lead)
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data))
}
