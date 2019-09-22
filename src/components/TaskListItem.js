import React, { useContext } from 'react';
import { TableCell, TableRow, Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { TaskContext } from '../screens/Home';

export default function TaskListItem(props) {
  const [tasks, setTasks] = useContext(TaskContext);

  const { id, title, done, level } = props.task;

  const priorityLevels = ['Low', 'Medium', 'High'];

  function handleCheck() {
    const updatedTasks = tasks.map(item => item.id === id ? { ...item, done: !item.done } : item);
    setTasks(updatedTasks);
  }

  function handleDelete() {
    const updatedTasks = tasks.filter(item => item.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <TableRow hover>
        <TableCell>
          <Checkbox checked={done} onClick={handleCheck} />
          {id}
        </TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>{priorityLevels[level]}</TableCell>
        <TableCell>
          <IconButton>
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}