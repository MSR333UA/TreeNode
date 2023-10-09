import React, { useState, useEffect } from 'react';

const treeData = [
  {
    id: 1,
    label: 'Body',
    children: [
      {
        id: 2,
        label: 'Header',
        children: [
          {
            id: 2.1,
            label: 'Logo',
            children: [
              {
                id: 2.11,
                label: 'img',
                children: [],
              },
            ],
          },
          {
            id: 2.2,
            label: 'Title',
            children: [
              {
                id: 2.21,
                label: 'Developer',
                children: [],
              },
            ],
          },
          {
            id: 2.3,
            label: 'Nav',
            children: [
              {
                id: 2.31,
                label: 'About Us',
                children: [],
              },
              {
                id: 2.32,
                label: 'Join Us',
                children: [],
              },
              {
                id: 2.33,
                label: 'Contacts',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: 'Wrapper',
        children: [
          {
            id: 3.1,
            label: 'Banner',
            children: [
              {
                id: 3.11,
                label: 'banner-img',
                children: [],
              },
              {
                id: 3.12,
                label: 'banner-caption',
                children: [],
              },
            ],
          },
          {
            id: 3.2,
            label: 'Events',
            children: [
              {
                id: 2.21,
                label: 'Running',
                children: [],
              },
            ],
          },
          {
            id: 3.3,
            label: 'Links',
            children: [
              {
                id: 3.31,
                label: 'Instagram',
                children: [],
              },
              {
                id: 3.32,
                label: 'Telegram',
                children: [],
              },
              {
                id: 3.33,
                label: 'LinkedIn',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        label: 'Footer',
        children: [
          {
            id: 4.1,
            label: 'Address',
            children: [
              {
                id: 4.11,
                label: 'Lviv',
                children: [],
              },
            ],
          },
          {
            id: 4.2,
            label: 'Phone',
            children: [
              {
                id: 4.21,
                label: '+38099000000',
                children: [],
              },
            ],
          },
          {
            id: 4.3,
            label: 'Email',
            children: [
              {
                id: 4.31,
                label: 'mail@gmail.com',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <span onClick={toggleNode}>{isOpen ? '🔽' : '➡️'}</span>
      {node.label}
      {isOpen && node.children.length > 0 && (
        <ul>
          {node.children.map(child => (
            <li key={child.id}>
              <TreeNode node={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TreeView = () => {
  const [treeDataState, setThreeDataState] = useState(
    JSON.parse(localStorage.getItem('threeData')) || []
  );

  useEffect(() => {
    localStorage.setItem('threeData', JSON.stringify(treeDataState));
  }, [treeDataState]);

  return (
    <div>
      {treeDataState.map(node => (
        <TreeNode key={node.id} node={node} />
      ))}
      <button onClick={() => setThreeDataState(treeData)}>
        test add three to local storage{' '}
      </button>
    </div>
  );
};

export default TreeView;
