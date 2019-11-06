import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
`;
export const BookTable = styled.table`
  width: 100%;

  thead th {
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 200px;
  }

  strong {
    display: block;
  }
  span {
    margin-top: 5px;
    font-size: 1.125em;
    font-weight: bold;
  }
`;
