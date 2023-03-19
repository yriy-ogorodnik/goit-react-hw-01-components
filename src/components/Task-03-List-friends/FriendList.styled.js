import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap:8px;
  border: 1px solid;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
  padding: 10px;

  &:hover {
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
    transition: all 0.25s 0s ease-out;
  }
`;

export const SpanStatus = styled.span`
display: flex;
width: 15px;
height:15px;
border-radius: 50%;
background-color: ${props =>  props.isOnline ? "green" : "red"}
`;
