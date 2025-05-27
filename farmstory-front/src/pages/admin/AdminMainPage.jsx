import React from "react";
import { Footer } from "../../components/common/admin/Footer";
import { Header } from "../../components/common/admin/Header";
import { Main } from "../../components/common/admin/Main";
import { AdminLayout } from "../../layouts/AdminLayout";

export const AdminMainPage = () => {
  return (
    <div id="admin-container">
      <AdminLayout>
        <Main />
      </AdminLayout>
    </div>
  );
};
