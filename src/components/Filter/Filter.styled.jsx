import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[1]}px;

  font-weight: 500;
  font-size: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 30px;
  padding-left: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
