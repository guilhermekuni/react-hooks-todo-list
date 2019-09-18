import React, { useState, useEffect, createContext } from 'react';
import { Container } from '@material-ui/core';

import TaskList from '../components/TaskList';

export const TaskContext = createContext();

export default function Home() {
  const mockTasks = [
    { id: 1, title: 'teste 1', done: false, level: 0 },
    { id: 2, title: 'teste 2', done: false, level: 1 },
    { id: 3, title: 'teste 3', done: false, level: 2 },
    { id: 4, title: 'teste long description teste long description', done: false, level: 2 },
  ]

  const [tasks, setTasks] = useState(mockTasks);
  useEffect(() => {
    const uncompletedTasks = tasks.filter(item => !item.done);
    document.title = `You still got ${uncompletedTasks.length} tasks `;
  }, tasks);

  return (
    <>
      <Container fixed maxWidth="md">
        <TaskContext.Provider value={[tasks, setTasks]}>
          <TaskList></TaskList>
        </TaskContext.Provider>
      </Container>
    </>
  );
};
