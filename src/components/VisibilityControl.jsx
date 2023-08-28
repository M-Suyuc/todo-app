export const VisibilityControl = ({
  setShowCompleted,
  ClearTasks,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it?')) {
      ClearTasks()
    }
  }

  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          checked={isChecked}
          type='checkBox'
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{' '}
        <label>Show tasks Done</label>
      </div>
      <button onClick={handleDelete} className='btn btn-danger btn-sm'>
        clear
      </button>
    </div>
  )
}
