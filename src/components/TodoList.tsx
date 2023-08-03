import { styled } from "styled-components";
import Button, { StyleType } from "./Button";
import { Todo } from "./Main";
import { useDispatch } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todoSlice";
import { Link } from "react-router-dom";

const TodoList = ({ todos, isDone }: { todos: Todo[]; isDone: boolean }) => {
  const dispatch = useDispatch();
  const deleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const isDoneSwitchHandler = (id: string) => {
    dispatch(switchTodo(id));
  };

  return (
    <StDiv>
      {todos
        .filter((todo: Todo) => todo.isDone === isDone)
        .map((todo: Todo) => {
          return (
            <StTodoCard key={todo.id}>
              <Link to={`${todo.id}`}>
                <h4>{todo.title}</h4>
                <p>{todo.body}</p>
              </Link>
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

  & a {
    text-decoration: none;
    color: black;
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
