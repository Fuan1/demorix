'use client';

import styled from '@emotion/styled';
import { ReactNode } from 'react';

import Sidebar from '@/app/components/Sidebar';
import { navigationCategories } from '@/app/constants/navigation';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <LayoutContainer>
      <Sidebar categories={navigationCategories} />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default AppLayout;

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main`
  margin-left: 280px;
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  height: 100vh;
`;
