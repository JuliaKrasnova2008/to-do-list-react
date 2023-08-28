import React from 'react'
import logout from '../images/logout.svg';

export default function NavBar() {
  return (
    <div className='navigation'>
      <img className='navigation__logout-img' src={logout} alt='Вход в личный кабинет'></img>  
    </div>
  )
}
