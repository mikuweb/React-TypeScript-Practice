type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "✔" : "🔲";
  return <p>{`${completedMark} ${title}(ユーザー：${userId})`}</p>;
};
