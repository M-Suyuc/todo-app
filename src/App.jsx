import { useEffect, useState } from 'react'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)
  console.log(tasksItems)

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  const ClearTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done))
    setShowCompleted(false)
  }

  const deleteTask = (name) => {
    setTasksItems(tasksItems.filter((task) => task.name !== name))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <main className='bg-dark min-vh-100 text-white'>
      <div className='container p-4 col-md-4 offset-md-4'>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          ClearTasks={ClearTasks}
        />

        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
            deleteTask={deleteTask}
          />
        )}
      </div>
      <footer>
        <a href='https//:www.github'>github</a>
        <a href=''>portafolio</a>
      </footer>
    </main>
  )
}
