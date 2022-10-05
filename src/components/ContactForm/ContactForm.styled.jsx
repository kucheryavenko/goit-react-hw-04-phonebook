import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 380px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[1]}px;

  font-weight: 700;
  font-size: ${p => p.theme.space[4]}px;
`;

export const InputName = styled.input`
  display: block;
  width: 340px;
  height: 30px;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[1]}px;
`;

export const InputNumber = styled.input`
  display: block;
  width: 340px;
  height: 30px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[1]}px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[4]}px;
  font-weight: 500;
  font-size: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.accent};
  border: none;
  border-radius: ${p => p.theme.radii.s}px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: ${p => p.theme.colors.hover};
    box-shadow: ${p => p.theme.shadows.shadow};
  }
`;
