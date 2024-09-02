"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div>
      Logged in!
      <Button className="block m-4 " variant="destructive" onClick={() => signOut()}>
        Log out
      </Button>
    </div>

  );
}
