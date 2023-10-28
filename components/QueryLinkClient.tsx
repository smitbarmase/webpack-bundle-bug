"use client";

import { PropsWithChildren } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function QueryLinkClient({
  href,
  children,
}: PropsWithChildren<{
  href: string;
}>) {
  const searchParams = useSearchParams();
  return (
    <Link href={href} prefetch={false} style={{ color: "blue" }}>
      {children}
    </Link>
  );
}
