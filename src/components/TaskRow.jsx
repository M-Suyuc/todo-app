export const TaskRow = ({ task, toggleTask, deleteTask }) => {
  return (
    <tr>
      <td className='d-flex justify-content-between'>
        {task.name}
        <div className=''>
          <input
            type='checkBox'
            checked={task.done}
            onChange={() => toggleTask(task)}
          />
          <button
            onClick={() => deleteTask(task.name)}
            className='btn btn-danger mx-1'
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}
