import { useState } from "react"

export default function Player({initialName,symbol,isActive,onChangeName}){
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false)

    function handleEditClick(){
        setIsEditing(editing => !editing);
        if(isEditing){
            onChangeName(symbol,playerName);
        }
    }

    function handleChange(event){
      setPlayerName(event.target.value)
    }

    let editableName= playerName;
    let btnCaption= "Edit";
    if(isEditing){
        editableName= <input type="text" value={playerName} onChange={handleChange} />
        btnCaption= "Save";
    }

    return (
      <li className={isActive?'active':''}>
        <span className="player">
          <span className="player-name">{editableName}</span>
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </li>
    )
}