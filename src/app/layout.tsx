import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="pt-BR">
        <body>
          <div className="pagina">
            <Header />
            <main className="conteudo">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
