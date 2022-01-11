import React, {useReducer} from 'react'
import {githubContext} from './githubContext'
import {githubReducer} from "./githubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET


const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }


    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`))

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }
    const getRepos = async name => {
        setLoading()

        const response = await axios.get(withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`))

        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }
    const getUser = async name => {
        setLoading()

        const response = await axios.get(withCreds(`https://api.github.com/users/${name}?`))

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }
    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }
    const clearUser = () => {
        dispatch({type: CLEAR_USERS})
    }

    const {users, user, repos, loading} = state

    return (
        <githubContext.Provider value={{
            setLoading, clearUser, getUser, getRepos, search,
            users, user, repos, loading
        }}>
            {children}
        </githubContext.Provider>
    )
}