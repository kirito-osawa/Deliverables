import './style.css';

//テキストボックスに入力した値を取得
const onClickAdd = () => {
  const inputText = document.getElementById('addText').value;

  //テキスト入力欄を空にする
  document.getElementById('addText').value = '';

  //未完了作成メソッドを実行
  createInCompTodo(inputText);
};

//渡された引数をもとに未完了を作成
const createInCompTodo = (todo) => {
  //li生成
  const li = document.createElement('li');
  //div生成
  const div = document.createElement('div');
  div.className = 'list';
  //p生成
  const p = document.createElement('p');
  p.innerText = todo;

  //完了ボタンの生成
  const compButton = document.createElement('button');
  compButton.innerText = '完了';
  compButton.addEventListener('click', () => {
    //完了リストに移動
    const compTarget = compButton.closest('li');
    //対象の次に出てくる要素を取得して、削除
    compButton.nextElementSibling.remove();
    //完了ボタンを削除
    compButton.remove();

    //戻すボタンを生成してdivタグ配下に設定
    const backButton = document.createElement('button');
    backButton.innerText = '戻る';

    backButton.addEventListener('click', () => {
      const todoText = backButton.previousElementSibling.innerText;
      createInCompTodo(todoText);

      backButton.closest('li').remove();
    });

    compTarget.firstElementChild.appendChild(backButton);

    //完了リストに移動
    document.getElementById('complist').appendChild(compTarget);
  });

  //削除ボタンの生成
  const delButton = document.createElement('button');
  delButton.innerText = '削除';
  delButton.addEventListener('click', () => {
    //押された場合に要素を削除
    const delTarget = delButton.closest('li');
    document.getElementById('incomplist').removeChild(delTarget);
  });

  //divタグ配下
  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(delButton);
  //liタグ配下
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById('incomplist').appendChild(li);
};

//追加ボタンをクリックしたときにテキストの内容を
//未完了に追加する
document.getElementById('add').addEventListener('click', onClickAdd);
