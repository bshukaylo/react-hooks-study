import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
    const {show} = useContext(AlertContext);

    function onSubmit(event) {
        if (event.key === 'Enter') {
            show('this is alert!')
        }
    }

    return (
        <div className='form-group'>
            <input
                type="text"
                name="form-control"
                placeholder='Введите ник пользователя'
                onKeyPress={onSubmit}
            />
        </div>
    )
}