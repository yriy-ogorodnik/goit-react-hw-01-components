import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  thead {
    background-color: #00ffff;
    font-weight: bold;
  }
  th {
    padding: 12px;
    border: 1px solid #ccc;
  }
  tbody tr:nth-of-type(even) {
    background-color: #ace4ff;
  }
  tbody tr:hover {
    background-color: #ffff00;
  }
`;
