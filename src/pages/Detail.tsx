import React from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  [key: string]: string;
}

const Detail = () => {
  const { id } = useParams<RouteParams>();
  console.log(id);
  return (
    <>
      <h1>Detail</h1>
    </>
  );
};

export default Detail;
