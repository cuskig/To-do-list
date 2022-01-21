import React from 'react';
import './style.css';

export default function App() {
  let [item, setitem] = React.useState('');
  let [todos, settodos] = React.useState([]);
  return (
    <div>
      <input value={item} onChange={(e) => setitem(e.target.value)} />
      <button
        onClick={() => {
          settodos(todos.concat(item));
          setitem('');
        }}
      >
        Add
      </button>
      <div>
        {todos.map((t, i) => (
          <div>
            <input
              type="checkbox"
              checked={false}
              onChange={() => {
                let newtodos = todos.slice()
                newtodos.splice(i, 1)
                settodos(newtodos);
              }}
            />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
