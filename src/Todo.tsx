export const Todo = (props) => {
  const { title, userid, completed } = props;
  const completedMark = completed ? "✔" : "🔲";
  return <p>{`${completedMark} ${title}(ユーザー：${userid})`}</p>;
};
