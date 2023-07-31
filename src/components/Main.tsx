import React, { useState } from "react";
import shortid from "shortid";
import TodoList from "./TodoList";
import Button, { StyleType } from "./Button";
import InputItem from "./InputItem";
import { styled } from "styled-components";

export interface Todo {
  id: string;
  title: string;
  body: string;
  isDone: boolean;
}

const Main = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: shortid.generate(),
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: shortid.generate(),
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);
  const submitDiasbled = !title || !body;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    setTodos((todos) => [...todos, newTodo]);
    setTitle("");
    setBody("");
  };

  return (
    <main>
      <Stform>
        <StInputContainer>
          <InputItem type='text' title='제목' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <InputItem type='text' title='내용' name='body' value={body} onChange={(e) => setBody(e.target.value)} />
        </StInputContainer>
        <Button
          type='submit'
          styleType={StyleType.FORM_SUBMIT}
          disabled={submitDiasbled}
          onClick={(e) => {
            handleSubmit(e);
          }}>
          추가하기
        </Button>
      </Stform>
      <div>
        <h2>Working... 🔥</h2>
        <TodoList todos={todos} isDone={false} setTodos={setTodos} />
        <h2>Done...! 🎉</h2>
        <TodoList todos={todos} isDone={true} setTodos={setTodos} />
      </div>
    </main>
  );
};

export default Main;

const Stform = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
