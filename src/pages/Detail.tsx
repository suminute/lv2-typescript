import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/config/configStore";

const Detail = () => {
  const { id } = useParams();
  const todo = useSelector((state: RootState) => state.data.todos.find((todo) => todo.id === id));
  return (
    <div>
      <h3>{todo?.title}</h3>
      <h4>{todo?.body}</h4>
      <p>{todo?.isDone.toString()}</p>
    </div>
  );
};

export default Detail;
