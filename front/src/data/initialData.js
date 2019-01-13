const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: '', color: 'black'},
    'task-2': {id: 'task-2', content: '', color: 'blue'},
    'task-3': {id: 'task-3', content: '', color: 'yellow'},
    'task-4': {id: 'task-4', content: '', color: 'red'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: '',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    }, 
    'column-2': {
      id: 'column-2',
      title: '',
      taskIds: [],
    }, 
    'column-3': {
      id: 'column-3',
      title: '',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1'],
};

export default initialData;