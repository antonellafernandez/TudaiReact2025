import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={`flex items-center justify-between w-1/2 p-2 border-2 border-cyan-500 ${isActive ? 'active' : undefined}`}>
      <span className="flex justify-between w-3/4 font-extrabold">
        {editablePlayerName}
        <span>{symbol}</span>
      </span>
      <button onClick={handleEditClick} className="hover:text-amber-600">{isEditing ? 'Save' : 'Edit'}</button>
    </li >
  );
}
