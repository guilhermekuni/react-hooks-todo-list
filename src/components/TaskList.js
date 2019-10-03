import React, { useContext } from 'react';
import { Table, TableBody, TableRow, TableCell, TableHead, Paper, Typography, Grid } from '@material-ui/core/';

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
              tasks.length > 0 ? (
                tasks.map((item, index) => <TaskListItem key={index} task={item}></TaskListItem>))
                : (
                  <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                    <Typography>You don't have more tasks</Typography>
                  </Grid>
                )
            }
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}