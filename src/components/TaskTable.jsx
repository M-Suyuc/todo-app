import { TaskRow } from './TaskRow'

export const TaskTable = ({
  tasks,
  toggleTask,
  deleteTask,
  showCompleted = false
}) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow
          task={task}
          key={task.name}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))
  }

  return (
    <table className='table table-dark table-striped table-bordered border-secondary'>
      <thead>
        <tr className='table-primary'>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  )
}
