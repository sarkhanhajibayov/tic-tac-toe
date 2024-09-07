import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(name);
  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) onChangeName(symbol, value);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input onChange={handleChange} value={value} type="text" required />
        ) : (
          <span className="player-name">{value}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
