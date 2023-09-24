import React from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}

const Detail = () => {
  const { id } = useParams<RouteParams>();
  //   const { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <>
      <h1>Detail</h1>
    </>
  );
};

export default Detail;
