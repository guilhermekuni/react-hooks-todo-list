import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, MenuItem, Button, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { priorityLevels } from '../utils/constants';
import { TaskContext } from '../screens/Home';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  container: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  selectField: {
    width: 200,
  },
  button: {
    maxHeight: 54,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  sendIcon: {
    marginLeft: theme.spacing(1),
  },
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

    if (taskTitle.length === 0) return;

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
      <Paper className={classes.paper}>
        <Box display="flex" justifyContent="center">
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
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
              disabled={taskTitle.length === 0}>
              Save Task
            <SendIcon className={classes.sendIcon} />
            </Button>
          </form>
        </Box>
      </Paper>
    </>
  );
}
