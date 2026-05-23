"use client";

import type { ReactNode } from "react";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageLoader } from "@/components/ui/PageLoader";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <PageLoader />
      {children}
    </SmoothScrollProvider>
  );
}
