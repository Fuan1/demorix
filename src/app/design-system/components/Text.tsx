import styled from '@emotion/styled';

import { theme } from '@/app/design-system/tokens';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'small'
  | 'caption';
type TextColor =
  | 'primary'
  | 'secondary'
  | 'inverse'
  | 'success'
  | 'warning'
  | 'error';
type TextAlign = 'left' | 'center' | 'right';

type TextProps = {
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  children: React.ReactNode;
  className?: string;
};

const Text = ({
  variant = 'body',
  color = 'primary',
  align = 'left',
  children,
  className,
  ...props
}: TextProps) => {
  const Component = getComponent(variant);

  return (
    <Component $color={color} $align={align} className={className} {...props}>
      {children}
    </Component>
  );
};

export default Text;

const getComponent = (variant: TextVariant) => {
  const baseStyles = `
    margin: 0;
    font-family: ${theme.fontFamily.sans.join(', ')};
  `;

  switch (variant) {
    case 'h1':
      return styled.h1<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize['3xl']};
        font-weight: ${theme.fontWeight.bold};
        line-height: ${theme.lineHeight.tight};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
    case 'h2':
      return styled.h2<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize['2xl']};
        font-weight: ${theme.fontWeight.semibold};
        line-height: ${theme.lineHeight.tight};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
    case 'h3':
      return styled.h3<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize.xl};
        font-weight: ${theme.fontWeight.semibold};
        line-height: ${theme.lineHeight.normal};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
    case 'h4':
      return styled.h4<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize.lg};
        font-weight: ${theme.fontWeight.medium};
        line-height: ${theme.lineHeight.normal};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
    case 'h5':
      return styled.h5<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize.md};
        font-weight: ${theme.fontWeight.medium};
        line-height: ${theme.lineHeight.normal};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
    case 'h6':
      return styled.h6<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.medium};
        line-height: ${theme.lineHeight.normal};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
    case 'small':
      return styled.small<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.normal};
        line-height: ${theme.lineHeight.normal};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
    case 'caption':
      return styled.span<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize.xs};
        font-weight: ${theme.fontWeight.normal};
        line-height: ${theme.lineHeight.normal};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
    default:
      return styled.p<{ $color: TextColor; $align: TextAlign }>`
        ${baseStyles}
        font-size: ${theme.fontSize.md};
        font-weight: ${theme.fontWeight.normal};
        line-height: ${theme.lineHeight.normal};
        ${getColorStyles}
        text-align: ${({ $align }) => $align};
      `;
  }
};

const getColorStyles = ({ $color }: { $color: TextColor }) => {
  switch ($color) {
    case 'secondary':
      return `color: ${theme.colors.text.secondary};`;
    case 'inverse':
      return `color: ${theme.colors.text.inverse};`;
    case 'success':
      return `color: ${theme.colors.status.success};`;
    case 'warning':
      return `color: ${theme.colors.status.warning};`;
    case 'error':
      return `color: ${theme.colors.status.error};`;
    default:
      return `color: ${theme.colors.text.primary};`;
  }
};
