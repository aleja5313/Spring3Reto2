import React from 'react'
import ListToDo from './ListToDo'

import { CntrApp } from '../styles/styles'


const Main = () => {

  return (
    <CntrApp >
        <div>
            <h1>Todo</h1>
        </div>
        <ListToDo/>
    </CntrApp>
  )
}

export default Main