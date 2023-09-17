import { useState } from 'react'

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTaskName === '') {
      return
    }
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  const handleChange = (e) => {
    const newTask = e.target.value
    setNewTaskName(newTask)
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
        <input
          type='text'
          placeholder='Enter a new task'
          value={newTaskName}
          onChange={handleChange}
          className='form-control'
        />
      </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm'>Save task</button>
      </div>
    </form>
  )
}
