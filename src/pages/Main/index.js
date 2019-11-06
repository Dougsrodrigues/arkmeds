import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';

import { Container, BookTable } from './styles';

function Main() {
  const [books, setBooks] = useState([{}]);

  useEffect(async () => {
    Tabletop.init({
      key:
        'https://docs.google.com/spreadsheets/d/15vojm9rpUj-YiQS21CxQ8B6I69Yqrx7vLO3eq3k4oy8/edit?usp=sharing',
      simpleSheet: true,
    }).then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <Container>
      <BookTable>
        <thead>
          <tr>
            <th />
            <th>NOME</th>
            <th>AUTOR</th>
            <th>AVALIAÇÃO</th>
            <th>PREÇO</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr>
              <td>
                <img src={book.url} alt={book.titulo} />
              </td>
              <td>
                <strong>{book.titulo}</strong>
              </td>
              <td>{book.autor}</td>
              <td>{book.avaliacao}</td>
              <td>R$: {book.preco}</td>
            </tr>
          ))}
        </tbody>
      </BookTable>
    </Container>
  );
}
export default Main;

// <tr>
// <td>
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/41q87h8PXtL._SX346_BO1,204,203,200_.jpg"
//     alt="Livro"
//   />
// </td>
// <td>
//   <strong>Titulo do livro</strong>
// </td>
// <td>Autor do produto</td>
// <td>4.03</td>
// <td>R$: 14,00</td>
// </tr>
