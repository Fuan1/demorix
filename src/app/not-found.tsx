'use client';

import styled from '@emotion/styled';

import { Button, Text, theme } from '@/app/design-system';

type NotFoundPageProps = Record<string, never>;

const NotFoundPage = ({}: NotFoundPageProps) => {
  return (
    <Container>
      <Content>
        <ErrorCode>404</ErrorCode>
        <Text variant="h2">Page Not Found</Text>
        <Text color="secondary">
          The page you&apos;re looking for doesn&apos;t exist in our interactive
          demo collection.
        </Text>
        <ActionButtons>
          <Button onClick={() => (window.location.href = '/')}>
            Back to Demorix
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/lexorank')}
          >
            Explore LexoRank Demo
          </Button>
        </ActionButtons>
      </Content>
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${theme.spacing['2xl']} ${theme.spacing.lg};
`;

const Content = styled.div`
  text-align: center;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: ${theme.fontWeight.extrabold};
  color: ${theme.colors.background.tertiary};
  margin: 0;
  line-height: 1;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;
