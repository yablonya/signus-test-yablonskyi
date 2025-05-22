import { type PropsWithChildren } from "react";

import QueryProvider from "@/providers/query-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  );
};

export default Providers;