import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="main">
      <header>Header</header>
      <main>{children}</main>
    </section>
  );
};

export default MainLayout;
