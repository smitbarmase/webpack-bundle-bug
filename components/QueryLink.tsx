import { PropsWithChildren, Suspense } from "react";
import Link from "next/link";

import QueryLinkClient from "./QueryLinkClient";

export default function QueryLink({
  children,
  href,
}: PropsWithChildren<{
  href: string;
}>) {
  return (
    <Suspense
      fallback={
        <Link href={href} prefetch={false}>
          {children}
        </Link>
      }
    >
      <QueryLinkClient href={href}>{children}</QueryLinkClient>
    </Suspense>
  );
}
