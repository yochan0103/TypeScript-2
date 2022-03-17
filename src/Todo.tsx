import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<TodoType> = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>;
};
