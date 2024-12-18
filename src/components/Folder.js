import { useState } from "react";
import "./Folder.css";

const Folder = ({ explorerData, handleInsert, handleDelete, parentId }) => {
  const [expand, setExpand] = useState(false);
  const [inputObj, setInputObj] = useState({
    value: "",
    isVisible: false,
    isFolder: false,
  });

  const handleExpand = () => {
    setExpand((ex) => !ex);
  };

  const handleAdd = (event, isFolder) => {
    event.stopPropagation();
    setExpand(true);
    setInputObj((obj) => ({ ...obj, isVisible: true, isFolder: isFolder }));
  };

  const handleInput = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      setInputObj((obj) => ({ ...obj, isVisible: false }));
      handleInsert(explorerData.id, event.target.value, inputObj.isFolder);
    }
  };

  const handleBlur = () => {
    setInputObj((obj) => ({ ...obj, isVisible: false }));
  };

  const onHandleDelete = (event, id, parentId) => {
    event.stopPropagation();
    handleDelete(id, parentId);
  };

  if (explorerData.isFolder) {
    return (
      <div style={{ textAlign: "left" }}>
        <div className="folder-name-tab" onClick={handleExpand}>
          <span>📁 {explorerData.name}</span>
          <span style={{ display: "flex", gap: 5 }}>
            <button onClick={(event) => handleAdd(event, false)}>+ File</button>
            <button onClick={(event) => handleAdd(event, true)}>
              + Folder
            </button>
            {parentId ? (
              <button
                onClick={(event) =>
                  onHandleDelete(event, explorerData.id, parentId)
                }
              >
                🛢️
              </button>
            ) : null}
          </span>
        </div>
        <div style={{ display: expand ? "block" : "none", marginLeft: "15px" }}>
          {inputObj.isVisible ? (
            <>
              {inputObj.isFolder ? <span>📁</span> : <span>📃</span>}
              <input autoFocus onKeyDown={handleInput} onBlur={handleBlur} />
            </>
          ) : null}
          {explorerData.items?.map((item) => (
            <Folder
              key={item.id}
              explorerData={item}
              handleInsert={handleInsert}
              handleDelete={handleDelete}
              parentId={explorerData.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file-name-tab">
        <span>📃 {explorerData.name}</span>
        {parentId ? (
          <button
            onClick={(event) =>
              onHandleDelete(event, explorerData.id, parentId)
            }
          >
            🛢️
          </button>
        ) : null}
      </div>
    );
  }
};

export default Folder;
