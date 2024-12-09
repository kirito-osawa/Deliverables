export const InCompTodo = (props) => {
  const { todos, onClickComp, onClickDelete } = props;

  return (
    <div className="incompleteArea">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list">
                <p>{todo}</p>
                <button onClick={() => onClickComp(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
