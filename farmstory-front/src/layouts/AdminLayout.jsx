import React from "react";
import { Header } from "../components/common/admin/Header";
import { Footer } from "../components/common/admin/Footer";

export const AdminLayout = ({ children }) => {
  return (
    <div id="admin-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
