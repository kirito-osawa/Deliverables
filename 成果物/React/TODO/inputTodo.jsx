const style = {
  backgroundColor: 'aqua',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        //変更があった際に発火
        onChange={onChange}
      ></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
