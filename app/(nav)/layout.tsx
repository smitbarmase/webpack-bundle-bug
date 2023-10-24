import { ReactNode } from "react";

import QueryLink from "../../components/QueryLink";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div style={{ backgroundColor: "greenyellow" }}>
        {/* using query link on nav bar */}
        <QueryLink href="/">Home</QueryLink>
      </div>
      {children}
    </>
  );
}
