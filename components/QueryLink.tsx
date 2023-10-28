import { PropsWithChildren, Suspense } from "react";

import QueryLinkClient from "./QueryLinkClient";

export default function QueryLink({
  children,
  href,
}: PropsWithChildren<{
  href: string;
}>) {
  return (
    <Suspense fallback={<span>{children}</span>}>
      <QueryLinkClient href={href}>{children}</QueryLinkClient>
    </Suspense>
  );
}
