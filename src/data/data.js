const explorerObj = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "index",
          isFolder: false,
        },
      ],
    },
    {
      id: 4,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 5,
          name: "Folder 1",
          isFolder: true,
          items: [
            {
              id: 6,
              name: "App",
              isFolder: false,
            },
            {
              id: 7,
              name: "styles",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

export default explorerObj;
