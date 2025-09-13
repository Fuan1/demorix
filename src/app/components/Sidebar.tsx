'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { theme } from '@/app/design-system/tokens';
import type { NavigationCategory } from '@/app/types/navigation';

type SidebarProps = {
  categories: NavigationCategory[];
};

const Sidebar = ({ categories }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Title>Demorix</Title>
      </SidebarHeader>

      {categories.map(category => (
        <CategorySection key={category.id}>
          <CategoryTitle>{category.title}</CategoryTitle>
          {category.items.map(item => (
            <NavItem
              key={item.id}
              href={item.path}
              $isActive={pathname === item.path}
            >
              {item.title}
              {item.description && (
                <ItemDescription>{item.description}</ItemDescription>
              )}
            </NavItem>
          ))}
        </CategorySection>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  width: 280px;
  height: 100vh;
  background: ${theme.colors.background.secondary};
  border-right: 1px solid ${theme.colors.border.primary};
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
`;

const SidebarHeader = styled.div`
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border.primary};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin: 0;
`;

const CategorySection = styled.div`
  padding: ${theme.spacing.md} 0;
`;

const CategoryTitle = styled.h2`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 ${theme.spacing.sm} 0;
  padding: 0 ${theme.spacing.lg};
`;

const NavItem = styled(Link, {
  shouldForwardProp: prop => prop !== '$isActive',
})<{ $isActive: boolean }>`
  display: block;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  color: ${props =>
    props.$isActive ? theme.colors.primary : theme.colors.text.primary};
  background: ${props => (props.$isActive ? '#e7f1ff' : 'transparent')};
  text-decoration: none;
  font-weight: ${props =>
    props.$isActive ? theme.fontWeight.medium : theme.fontWeight.normal};
  border-left: ${props =>
    props.$isActive
      ? `3px solid ${theme.colors.primary}`
      : '3px solid transparent'};
  transition: ${theme.transition.normal};

  &:hover {
    background: ${props =>
      props.$isActive ? '#e7f1ff' : theme.colors.background.secondary};
    color: ${theme.colors.primary};
  }
`;

const ItemDescription = styled.div`
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.text.secondary};
  margin-top: ${theme.spacing.xs};
`;
