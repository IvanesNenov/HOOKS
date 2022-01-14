import React, {useContext, useState} from 'react'
import AlertContext from "../context/alert/alertContext";
import {githubContext} from "../context/github/githubContext";

const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(githubContext)


    console.log('github', github)


    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        github.clearUser()
        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
                alert.show('Воу Воу друг, надо что-то ввести!')


        }
    }
    return (
        <div className="form-group pb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                value={value}
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}
export default Search