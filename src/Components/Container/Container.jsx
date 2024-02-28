import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import TodoDiv from '../TodoDiv/TodoDiv';
import List from '../List/List';
import "./Container.css";


const Container = () => {
  return (
      <div className='container'>
          <Wrapper />
          <TodoDiv />
          <List />
    </div>
  )
}

export default Container;