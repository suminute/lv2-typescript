import React, { useState } from "react";
import shortid from "shortid";
import TodoList from "./TodoList";
import Button, { StyleType } from "./Button";
import InputItem from "./InputItem";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { addTodo } from "../redux/modules/todoSlice";

export interface Todo {
  id: string;
  title: string;
  body: string;
  isDone: boolean;
}

const Main = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const submitDiasbled = !title || !body;

  // Redux
  const todos = useSelector((state: RootState) => state.data.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
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
        <TodoList todos={todos} isDone={false} />
        <h2>Done...! 🎉</h2>
        <TodoList todos={todos} isDone={true} />
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
