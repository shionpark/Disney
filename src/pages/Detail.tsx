import React from 'react';
import { useParams } from 'react-router';
import { Character } from '@/components';

interface RouteParams {
  [key: string]: string;
}

const Detail = () => {
  const { id } = useParams<RouteParams>();
  console.log(id);
  return (
    <>
      <Character />
    </>
  );
};

export default Detail;
