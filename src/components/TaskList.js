import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, Paper } from '@material-ui/core/';

import { TaskContext } from '../screens/Home';
import TaskListItem from '../components/TaskListItem';

export default function TaskList() {
  const [tasks, setTasks] = useContext(TaskContext);

  return (
    <>
      <h2>Task List ({tasks.length})</h2>
      <Paper>
        <Table>
          <TableHead>
            <TableCell>Task</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Actions</TableCell>
          </TableHead>
          <TableBody>
            {
              tasks.map((item) => <TaskListItem task={item}></TaskListItem>)
            }
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}