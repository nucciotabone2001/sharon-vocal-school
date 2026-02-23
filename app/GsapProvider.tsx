"use client";

import useGsapGlobal from "@/hooks/useGsapGlobal";

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useGsapGlobal();
  return <>{children}</>;
}
