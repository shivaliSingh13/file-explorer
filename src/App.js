import Folder from "./components/Folder";
import explorerObj from "./data/data";
import { useState } from "react";
import "./styles.css";
import useInsertNode from "./components/hooks/useInsertNode";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorerObj);
  const { handleInsert, handleRemove } = useInsertNode();

  const onHandleInsert = (id, name, isFolder) => {
    const newTree = handleInsert(explorerData, id, name, isFolder);
    setExplorerData(newTree);
  };

  const onHandleDelete = (id, parentId) => {
    const newTree = handleRemove(explorerData, id, parentId);
    console.log(newTree, "lll");
    setExplorerData(newTree);
  };

  return (
    <div className="App">
      <Folder
        handleDelete={onHandleDelete}
        handleInsert={onHandleInsert}
        explorerData={explorerData}
        parentId={null}
      />
    </div>
  );
}
