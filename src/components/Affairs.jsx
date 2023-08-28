import React, { useState } from 'react'

export default function () {

    const [arr, setArr] = useState([]);
    const [value, setValue] = useState("");

    //функция добавления карточки в массив
    function handleAdd() {
        setArr((preArr) => {
            return [...preArr, value]
        })
        setValue("")
    }

    //функция удаления карточки из массива
    function handleRemove(index) {
        // setArr([...arr.slice(0, index), ...arr.slice(index + 1)]); //создаю новый массив и копирую из старого элементы 1часть- с нулевого по индекс(не включая сам индекс) и 2часть-со следующего индекса до конца
        //или
        setArr((preArr) => {
            return preArr.filter((elem, i) => { 
                return i !== index
            })
        })
    }

    return (
        <div className='elements'>
            <form
                className="form form__add-todo"
                id="formAdd"
                name="addForm"
                method="POST"
            // novalidate
            >
                <input
                    className="form__input"
                    id="inputForm"
                    name="titleForm"
                    type="text"
                    placeholder="Введите дело"
                    // autocomplete="off"
                    minLength="1"
                    maxLength="55"
                    required
                    value={value}
                    onChange={(evt) => setValue(evt.target.value)}

                />
                <button
                    className="form__submit"
                    type="submit"
                    aria-label="Добавить"
                    onClick={handleAdd}
                    disabled={value == ""} //условие для блокировки кнопки
                >
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8H1M9 16V8V16ZM9 8V0V8ZM9 8H17H9Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </form>


            <ul className='elements__list'>
                {arr.map((elem, index) => {
                    return <li className="elements__item" key={index}>
                        <p className="elements__subtitle">{elem}</p>
                        <div className='button__check'>
                            <button
                                className="elements__btn elements__btn_ready"
                                type="button"
                                aria-label="Сделано"
                                onClick={(evt) => evt.target.closest(".elements__item").classList.toggle("elements__item_ready")}>
                            </button>
                            <button
                                className="elements__btn elements__btn_delete"
                                type="button"
                                aria-label="Удалить"
                                onClick={() => handleRemove(index)}
                            >
                            </button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}
