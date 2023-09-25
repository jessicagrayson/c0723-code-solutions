/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';

/**
 * Manages the Todos by reading from and writing to the backend API.
 *
 * @returns {Object} with the following properties:
 *   isLoading: a boolean indicating if the data has not yet loaded;
 *   error: any error that occurred
 *   todos: a list of To Do items;
 *   addTodo: a function (newTodo) that will add a new To Do;
 *   toggleCompleted: a function (todoId) that will toggle the completion of an existing To Do.
 */
export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        if (!todos.length) {
          const res = await fetch('/api/todos');
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await res.json();
          setTodos(data);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchTodos();
  }, [todos]);

  async function addTodo(newTodo) {
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error('Failed to create new todo');
      }
      const createdTodo = await res.json();
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
      setError(null);
    } catch (error) {
      setError(error);
    }
  }

  function toggleCompleted(todoId) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return {
    isLoading: todos === undefined && error === undefined,
    error,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos() {
  const res = await fetch('/api/todos');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo) {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo) {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
