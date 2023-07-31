import { styled } from "styled-components";
import Button, { StyleType } from "./Button";
import { Todo } from "./Main";

const TodoList = ({ todos, isDone, setTodos }: { todos: Todo[]; isDone: boolean; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  const deleteHandler = (id: string) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  const isDoneSwitchHandler = (id: string) => {
    const switchedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !isDone };
      } else return todo;
    });
    setTodos(switchedTodos);
  };

  return (
    <StDiv>
      {todos
        .filter((todo: Todo) => todo.isDone === isDone)
        .map((todo: Todo) => {
          return (
            <StTodoCard key={todo.id}>
              <h4>{todo.title}</h4>
              <p>{todo.body}</p>
              <StButtonContainer>
                <Button
                  styleType={StyleType.FORM_DELETE}
                  onClick={() => {
                    deleteHandler(todo.id);
                  }}>
                  삭제하기
                </Button>
                <Button styleType={StyleType.FORM_SWITCH} onClick={() => isDoneSwitchHandler(todo.id)}>
                  {isDone ? "취소하기" : "완료하기"}
                </Button>
              </StButtonContainer>
            </StTodoCard>
          );
        })}
    </StDiv>
  );
};

export default TodoList;

const StDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const StTodoCard = styled.div`
  border: 2px solid #777;
  border-radius: 8px;
  width: 250px;
  margin: 10px;
  padding: 10px;
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
