import React, {useContext, useState} from 'react'
import AlertContext from "../context/alert/alertContext";
import {githubContext} from "../context/github/githubContext";

const Search = () => {
    const [value,setValue] = useState(null)
    const {show} = useContext(AlertContext)
const github = useContext(githubContext)
    const onSubmit = (event) =>{
        if (event.key !=='Enter') { return }

        if (value.trim()) {
            github.search(value.trim())
        } else {
            return show('Воу Воу друг, надо что-то ввести!')
        }
    }
    return (
        <div className="form-group pb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}
export default Search