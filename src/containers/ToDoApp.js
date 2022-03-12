import React from 'react'
import { Provider } from 'react-redux'
import Main from '../components/Main'

import store from '../redux/store/store'

const ToDoApp = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}

export default ToDoApp