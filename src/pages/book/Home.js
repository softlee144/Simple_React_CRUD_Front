import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {
  const [books, setBooks] = useState([]);

  // 함수 실행 시 최초 한 번 실행되는 것 + deps [] 처리 안 해주면 상태 변경될 때마다 실행
  useEffect(() => {
    fetch('http://localhost:8080/book')
      .then((res) => res.json()) // 응답이 오면 응답 결과를 json으로 변경시킨다.
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      }); // 비동기 함수
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
