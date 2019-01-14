const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: '', color: 'black'},
    'task-2': {id: 'task-2', content: '', color: 'blue'},
    'task-3': {id: 'task-3', content: '', color: 'yellow'},
    'task-4': {id: 'task-4', content: '', color: 'red'},
    'task-5': {id: 'task-5', content: '', color: 'black'},
    'task-6': {id: 'task-6', content: '', color: 'blue'},
    'task-7': {id: 'task-7', content: '', color: 'yellow'},
    'task-8': {id: 'task-8', content: '', color: 'red'},
    'task-9': {id: 'task-9', content: '', color: 'black'},
    'task-10': {id: 'task-10', content: '', color: 'blue'},
    'task-11': {id: 'task-11', content: '', color: 'yellow'},
    'task-12': {id: 'task-12', content: '', color: 'red'},

    'task-13': {id: 'task-13', content: '', color: 'black'},
    'task-14': {id: 'task-14', content: '', color: 'blue'},
    'task-15': {id: 'task-15', content: '', color: 'yellow'},
    'task-16': {id: 'task-16', content: '', color: 'red'},
    'task-17': {id: 'task-17', content: '', color: 'black'},
    'task-18': {id: 'task-18', content: '', color: 'blue'},
    'task-19': {id: 'task-19', content: '', color: 'yellow'},
    'task-20': {id: 'task-20', content: '', color: 'red'},
    'task-21': {id: 'task-21', content: '', color: 'black'},
    'task-22': {id: 'task-22', content: '', color: 'blue'},
    'task-23': {id: 'task-23', content: '', color: 'yellow'},
    'task-24': {id: 'task-24', content: '', color: 'red'},


  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: '',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4','task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10', 'task-11', 'task-12'],
    }, 
    'column-2': {
      id: 'column-2',
      title: '',
      taskIds: ['task-13', 'task-14', 'task-15', 'task-16','task-17', 'task-18', 'task-19', 'task-20', 'task-21', 'task-22', 'task-23', 'task-24'],
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