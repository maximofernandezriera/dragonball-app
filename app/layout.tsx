import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Dragon Ball App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;