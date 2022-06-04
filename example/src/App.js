import React from 'react'

import { Button } from 'btnify'
import 'btnify/dist/index.css'

const App = () => {
  return (
    <>
    <h3>Button Variants</h3>
      <div className='buttons'>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='success'>Success</Button>
        <Button variant='warning'>Warning</Button>
        <Button variant='danger'>Danger</Button>
      </div>
      <h3>Outline Buttons</h3>
      <div className='buttons'>
        <Button variant='primary' outline>Primary Outline</Button>
        <Button variant='secondary' outline>Secondary Outline</Button>
        <Button variant='success' outline>Success Outline</Button>
        <Button variant='warning' outline>Warning Outline</Button>
        <Button variant='danger' outline>Danger Outline</Button>
      </div>
      <h3>Button Sizes</h3>
      <div className='buttons'>
        <Button variant='primary' size="sm">Button Small</Button>
        <Button variant='secondary' size="md">Button Medium</Button>
        <Button variant='success' size="lg">Buttom Large</Button>
        <Button variant='warning' size="xl">Buttom XLarge</Button>
      </div>
      <h3>Button Types</h3>
      <div className='buttons'>
        <Button variant='primary' size="md" rounded>Button Rounded</Button>
      </div>
    </>
  )
}

export default App
