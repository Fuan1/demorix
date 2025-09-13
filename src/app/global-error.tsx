'use client';

import styled from '@emotion/styled';
import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <Container>
          <Content>
            <ErrorCode>500</ErrorCode>
            <Title>Something went wrong</Title>
            <Description>
              An unexpected error occurred while running the interactive demo.
              Our team has been notified.
            </Description>
            <ActionButtons>
              <RetryButton onClick={reset}>Try Again</RetryButton>
              <HomeButton onClick={() => (window.location.href = '/')}>
                Back to Demorix
              </HomeButton>
            </ActionButtons>
            {process.env.NODE_ENV === 'development' && (
              <ErrorDetails>
                <summary>Error Details (Development Only)</summary>
                <pre>{error.message}</pre>
                {error.digest && <p>Digest: {error.digest}</p>}
              </ErrorDetails>
            )}
          </Content>
        </Container>
      </body>
    </html>
  );
};

export default GlobalError;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 48px 24px;
  background: #f8f9fa;
`;

const Content = styled.div`
  text-align: center;
  max-width: 480px;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: 800;
  color: #dc3545;
  margin: 0;
  line-height: 1;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #212529;
  margin: 24px 0 16px 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin: 0 0 32px 0;
  line-height: 1.5;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const RetryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #c82333;
  }
`;

const HomeButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: transparent;
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #dc3545;
    color: white;
  }
`;

const ErrorDetails = styled.details`
  margin-top: 24px;
  text-align: left;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 16px;

  summary {
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 8px;
  }

  pre {
    background: #e9ecef;
    padding: 12px;
    border-radius: 4px;
    font-size: 14px;
    overflow-x: auto;
  }
`;
