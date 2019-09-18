import React, { useContext } from 'react';
import { TableCell, TableRow, Checkbox, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
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
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}