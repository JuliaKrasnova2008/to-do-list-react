import React from 'react'
import avatar from '../images/avatar.svg'

export default function UserInfo() {
  const options = {
    month: "long",
    day: "numeric",
    weekday: "short",
  };
  return (
    <div className='aboutUser'>
      <img className='aboutUser__avatar' src={avatar} alt='Фото профиля'></img>
      <h2 className='aboutUser__name'>Юлия</h2>
      <p className='aboutUser__about'>{new Date().toLocaleDateString("ru", options)}</p>
    </div>
  )
}
