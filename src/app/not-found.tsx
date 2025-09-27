'use client';

import { Button } from '@/components/ui/button';

type NotFoundPageProps = Record<string, never>;

const NotFoundPage = ({}: NotFoundPageProps) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-12">
      <div className="text-center max-w-md flex flex-col gap-6">
        <h1 className="text-9xl font-extrabold text-muted m-0 leading-none">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist in our interactive
          demo collection.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={() => (window.location.href = '/')}>
            Back to Demorix
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/lexorank')}
          >
            Explore LexoRank Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
