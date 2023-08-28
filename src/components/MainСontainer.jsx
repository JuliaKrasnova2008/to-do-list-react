import React from 'react'
import Affairs from './Affairs'
import UserInfo from './UserInfo'

export default function () {
  return (
    <div className='container'>
      <h1 className='container__title'>MY TO-DO LIST</h1>
      <div className='container__list'>
      <UserInfo />
      <Affairs />
      </div>
    </div>
  )
}
