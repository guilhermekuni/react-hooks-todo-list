import React, { useContext } from 'react';

import { TableCell, TableRow, Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { TaskContext } from '../screens/Home';
import { priorityLevels } from '../utils/constants';


export default function TaskListItem(props) {
  const [tasks, setTasks] = useContext(TaskContext);

  const { id, title, done, level } = props.task;

  function handleCheck() {
    const updatedTasks = tasks.map(item => item.id === id ? { ...item, done: !item.done } : item);
    setTasks(updatedTasks);
  }

  function handleDelete() {
    const updatedTasks = tasks.filter(item => item.id !== id);
    setTasks(updatedTasks);
  }

  function getPriority(level) {
    const priority = priorityLevels.find(item => item.value === level);
    return priority.name;
  }

  return (
    <>
      <TableRow hover>
        <TableCell>
          <Checkbox checked={done} onClick={handleCheck} />
        </TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>{getPriority(level)}</TableCell>
        <TableCell>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}