export const CompTodo = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div className="compliteArea">
      <p className="title">完了のTODO</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
