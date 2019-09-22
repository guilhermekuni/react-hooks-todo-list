import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, MenuItem } from '@material-ui/core';

import { priorityLevels } from '../utils/constants';
import { TaskContext } from '../screens/Home';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4)
  },
  selectField: {
    width: 200,
  }
}));

export default function TaskForm() {
  const classes = useStyles();
  const [tasks, setTasks] = useContext(TaskContext);
  const [taskTitle, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState(priorityLevels[0]);

  function handleDescriptionChange(event) {
    setTaskDescription(event.target.value);
  }

  function handlePriorityChange(event) {
    const selectedPriority = priorityLevels.find(item => item.value === event.target.value);
    setTaskPriority(selectedPriority);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;

    const newTask = {
      id: lastId + 1,
      title: taskTitle,
      done: false,
      level: taskPriority.value,
    }

    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <Paper>
        <form className={classes.container} onSubmit={handleSubmit}>
          <TextField
            id='taskTitle'
            label='Title'
            className={classes.textField}
            value={taskTitle}
            onChange={handleDescriptionChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="taskPriority"
            select
            label="Priority"
            className={`${classes.textField} ${classes.selectField}`}
            value={taskPriority.value}
            onChange={handlePriorityChange}
            margin="normal"
            variant="outlined"
          >
            {priorityLevels.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem >
            ))}
          </TextField>
        </form>
      </Paper>
    </>
  );
}
