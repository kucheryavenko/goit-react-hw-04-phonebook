import styled from 'styled-components';

export const List = styled.ul`
  width: 520px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: ${p => p.theme.space[0]}px;

  border-bottom: 1px solid ${p => p.theme.colors.border};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[1]}px;
  }
`;

export const Description = styled.p``;

export const Button = styled.button`
  display: inline-block;
  padding: ${p => p.theme.space[0]}px ${p => p.theme.space[2]}px;
  font-weight: 400;

  background-color: ${p => p.theme.colors.secondary};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.s}px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.delete};
    box-shadow: ${p => p.theme.shadows.shadow};
  }
`;
