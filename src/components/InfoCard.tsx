import React from 'react';

interface ContainerProps {
  name: string;
}

const InfoCard: React.FC<ContainerProps> = ({name}) => {
  return (
      <text> Привет, {name}</text>
  );
};

export default InfoCard;