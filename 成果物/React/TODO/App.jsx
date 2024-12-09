import { useState } from 'react';
import './App.css';
import { InputTodo } from './components/inputTodo';
import { InCompTodo } from './components/inCompTodo';
import { CompTodo } from './components/compTodo';

export const App = () => {
  //入力されたテキストを取得
  const [todoText, setTodoText] = useState('');
  //未完了の要素
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  //完了の要素
  const [compliteTodos, setCompliteTodos] = useState([]);

  //入力したテキストを取得してセット
  const onChengeTodoText = (event) => {
    //eventのデータが含まれている
    setTodoText(event.target.value);
  };

  //配列に入力されたテキストを追加
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    setTodoText('');
  };

  //削除ボタンが押された場合対象列の要素を削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //spliceメソッドで要素の削除　引数(要素番号,1)
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了ボタンが押されたとき
  const onClickComp = (index) => {
    const compTodo = [...incompleteTodos];
    compTodo.splice(index, 1);
    //完了の配列に追加
    const newConpTodo = [...compliteTodos, incompleteTodos[index]];
    //配列を更新
    setCompliteTodos(newConpTodo);
    setIncompleteTodos(compTodo);
  };
  //戻すボタン
  const onClickBack = (index) => {
    const newCompTodo = [...compliteTodos];
    newCompTodo.splice(index, 1);

    const inCompTodo = [...incompleteTodos, compliteTodos[index]];
    setCompliteTodos(newCompTodo);
    setIncompleteTodos(inCompTodo);
  };

  const isMaxInComp = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChengeTodoText}
        onClick={onClickAdd}
        disabled={isMaxInComp}
      />
      {isMaxInComp && <p style={{ color: 'red' }}>登録できるのは5件までです</p>}
      <InCompTodo
        todos={incompleteTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />
      <CompTodo todo={compliteTodos} onClickBack={onClickBack} />
    </>
  );
};
