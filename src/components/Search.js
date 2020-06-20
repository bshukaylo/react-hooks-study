import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
    const [value, setValue] = useState('');
    const {show} = useContext(AlertContext);

    function onSubmit(event) {
        if (event.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            //get data from github
        } else {
            show("Enter username!")
        }
    }

    return (
        <div className='form-group'>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                type="text"
                name="form-control"
                placeholder='Введите ник пользователя'
                onKeyPress={onSubmit}
            />
        </div>
    )
}