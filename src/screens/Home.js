import React, { useState, useEffect, createContext } from 'react';
import { Container } from '@material-ui/core';

import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

export const TaskContext = createContext();

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const uncompletedTasks = tasks.filter(item => !item.done);

    document.title = uncompletedTasks.length > 0  
      ? `You still got ${uncompletedTasks.length} tasks` 
      : "You don't have more tasks";
  }, [tasks]);

  return (
    <>
      <Container fixed maxWidth="md">
        <TaskContext.Provider value={[tasks, setTasks]}>
          <TaskForm></TaskForm>
          <TaskList></TaskList>
        </TaskContext.Provider>
      </Container>
    </>
  );
};
