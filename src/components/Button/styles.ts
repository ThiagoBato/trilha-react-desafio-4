import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 42px;
  background-color: #81259D;
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;

  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 0.8)};
  }
`;