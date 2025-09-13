import styled from '@emotion/styled';

import { theme } from '@/app/design-system/tokens';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.fontWeight.medium};
  cursor: pointer;
  transition: ${theme.transition.normal};
  text-decoration: none;

  /* Size variants */
  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.fontSize.sm};
          gap: ${theme.spacing.xs};
        `;
      case 'lg':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fontSize.lg};
          gap: ${theme.spacing.sm};
        `;
      default:
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
          font-size: ${theme.fontSize.md};
          gap: ${theme.spacing.xs};
        `;
    }
  }}

  /* Color variants */
  ${({ $variant }) => {
    switch ($variant) {
      case 'secondary':
        return `
          background: ${theme.colors.background.secondary};
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.border.primary};
          
          &:hover:not(:disabled) {
            background: ${theme.colors.background.tertiary};
            border-color: ${theme.colors.border.secondary};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          
          &:hover:not(:disabled) {
            background: ${theme.colors.primary};
            color: ${theme.colors.text.inverse};
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${theme.colors.text.primary};
          border: 1px solid transparent;
          
          &:hover:not(:disabled) {
            background: ${theme.colors.background.secondary};
          }
        `;
      default:
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.text.inverse};
          border: 1px solid ${theme.colors.primary};
          
          &:hover:not(:disabled) {
            background: ${theme.colors.primaryHover};
            border-color: ${theme.colors.primaryHover};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;
