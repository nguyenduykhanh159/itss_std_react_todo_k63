import React, { useState } from 'react';

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  }
  
  return (
    <label className="panel-block">
      <input type="checkbox" onClick = {handleClick} />
      <p className={checked ? "has-text-grey-light" : ""}>{item.text}</p>
    </label>
  );
}

export default TodoItem;