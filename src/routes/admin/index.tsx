import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../../layouts/admin/index.tsx';
import Dashboard from '../../pages/admin/dashboard/Dashboard';
import ProductPage from '../../pages/admin/product/index.tsx';
import CategoryPage from '../../pages/admin/category/index.tsx';
import InventoryPage from '../../pages/admin/inventory/index.tsx';
import OrderPage from '../../pages/admin/order/index.tsx';
import CustomerPage from '../../pages/admin/customer/index.tsx';
import FranchisePage from '../../pages/admin/franchise/index.tsx';
import PaymentsPage from '../../pages/admin/payments/index.tsx';
import LoyaltyPage from '../../pages/admin/loyalty/index.tsx';
import UserPage from '../../pages/admin/user/index.tsx';
import RolePage from '../../pages/admin/role/index.tsx';
import ProfilePage from '../../pages/admin/profile/index.tsx';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="customer" element={<CustomerPage />} />
        <Route path="franchise" element={<FranchisePage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="loyalty" element={<LoyaltyPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="role" element={<RolePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
