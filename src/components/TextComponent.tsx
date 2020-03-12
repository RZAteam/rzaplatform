import React from 'react';
import './ExploreContainer.css';

interface Props {
  name: string;
}

const TextComponent: React.FC<Props> = ({ name }) => {
  return (
    <div className="container">
      <text>Hello, {name}</text>
    </div>
  );
};

export default TextComponent;