'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';
import { Icons } from './icons';

export default function LinkedinSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className="flex justify-around"
      variant="outline"
      type="button"
      size="lg"
      onClick={() =>
        signIn('linkedin', { callbackUrl: callbackUrl ?? '/dashboard' })
      }
    >
      <Icons.linkedin className="mr-2 h-4 w-4" />
      LinkedIn
    </Button>
  );
}
