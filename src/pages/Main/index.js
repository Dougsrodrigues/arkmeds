import React from 'react';

import { Container, BookTable } from './styles';

export default function Main() {
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
          <tr>
            <td>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41q87h8PXtL._SX346_BO1,204,203,200_.jpg"
                alt="Livro"
              />
            </td>
            <td>
              <strong>Titulo do livro</strong>
            </td>
            <td>Autor do produto</td>
            <td>4.03</td>
            <td>R$: 14,00</td>
          </tr>
        </tbody>
      </BookTable>
    </Container>
  );
}
