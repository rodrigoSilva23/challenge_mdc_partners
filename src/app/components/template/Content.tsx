import { ReactNode } from "react";


export const Content = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="content">
      {children}
    </main>
  );
}