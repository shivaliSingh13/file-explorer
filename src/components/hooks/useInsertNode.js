const useInsertNode = () => {
  function handleInsert(tree, id, name, isFolder) {
    if (tree.id === id) {
      tree.items.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        items: [],
      });
      return tree;
    }

    let newTree = tree.items?.map((obj) =>
      handleInsert(obj, id, name, isFolder)
    );

    return { ...tree, items: newTree };
  }

  function handleRemove(tree, id, parentId) {
    console.log(tree, id, parentId);
    if (tree.id === parentId) {
      const index = tree.items.findIndex((itm) => itm.id === id);
      tree.items.splice(index, 1);
      console.log(index, tree, "pp");
      return tree;
    }

    let newTree = tree.items?.map((obj) => handleRemove(obj, id, parentId));
    return { ...tree, items: newTree };
  }

  return { handleInsert, handleRemove };
};

export default useInsertNode;
