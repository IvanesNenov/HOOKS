import React, {useContext, useState} from 'react'
import AlertContext from "../context/alert/alertContext";

const Search = () => {
    const [value,setValue] = useState(null)
    const {show} = useContext(AlertContext)

    const onSubmit = (event) =>{
        if (event.key !=='Enter') { return }

        if (value.trim()) {
            console.log('make request with '+ value)
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