import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  console.log(2, id);

  const [book, setBook] = useState({
    id: '',
    title: '',
    authour: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  return (
    <div>
      <h1>책 상세보기</h1>
      <hr />
      <h3>{book.authour}</h3>
      <h1>{book.title}</h1>
    </div>
  );
};

export default Detail;
