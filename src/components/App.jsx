import React, { useState } from 'react';
import TreeView from './TreeView';

export const App = () => {
  const [root, setRoot] = useState([
    {
      id: 1,
      label: 'Body',
      children: [
        {
          id: 2,
          label: 'Header',
          children: [],
        },
        { id: 3, label: 'Wrapper', children: [] },
        { id: 4, label: 'Footer', children: [] },
      ],
    },
  ]);

  // useEffect(() => {
  //   localStorage.setItem('root', root);
  // }, [root]);

  const renderTree = nodes => {
    return nodes.map((node, index) => (
      <TreeView key={index} node={node.label}>
        {node.isOpen && renderTree(node.children)}
      </TreeView>
    ));
  };

  return (
    <div className="App">
      <h1>TreeNode</h1>
      <div className="tree">{renderTree(root)}</div>
    </div>
  );
};
