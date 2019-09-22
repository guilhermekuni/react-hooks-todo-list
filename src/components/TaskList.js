import React, { useContext } from 'react';
import { Table, TableBody, TableRow, TableCell, TableHead, Paper } from '@material-ui/core/';

import { TaskContext } from '../screens/Home';
import TaskListItem from '../components/TaskListItem';

export default function TaskList() {
  const [tasks] = useContext(TaskContext);

  return (
    <>
      <Paper>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tasks.map((item, index) => <TaskListItem key={index} task={item}></TaskListItem>)
            }
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}