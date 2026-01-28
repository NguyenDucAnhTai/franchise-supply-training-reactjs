import { NavLink } from 'react-router-dom';
import { 
  HiHome, 
  HiCube, 
  HiViewList, 
  HiArchive, 
  HiDocumentText, 
  HiUsers, 
  HiOfficeBuilding, 
  HiCreditCard, 
  HiStar, 
  HiUser, 
  HiShieldCheck,
  HiLogout
} from 'react-icons/hi';

interface MenuItem {
  path: string;
  label: string;
  icon: typeof HiHome;
}

const menuItems: MenuItem[] = [
  {
    path: '/admin/dashboard',
    label: 'Dashboard',
    icon: HiHome,
  },
  {
    path: '/admin/product',
    label: 'Sản phẩm',
    icon: HiCube,
  },
  {
    path: '/admin/category',
    label: 'Danh mục',
    icon: HiViewList,
  },
  {
    path: '/admin/inventory',
    label: 'Tồn kho',
    icon: HiArchive,
  },
  {
    path: '/admin/order',
    label: 'Đơn hàng',
    icon: HiDocumentText,
  },
  {
    path: '/admin/customer',
    label: 'Khách hàng',
    icon: HiUsers,
  },
  {
    path: '/admin/franchise',
    label: 'Nhượng quyền',
    icon: HiOfficeBuilding,
  },
  {
    path: '/admin/payments',
    label: 'Thanh toán',
    icon: HiCreditCard,
  },
  {
    path: '/admin/loyalty',
    label: 'Loyalty',
    icon: HiStar,
  },
  {
    path: '/admin/user',
    label: 'Người dùng',
    icon: HiUser,
  },
  {
    path: '/admin/role',
    label: 'Vai trò',
    icon: HiShieldCheck,
  },
];

const AdminSidebar = () => {
  // Dữ liệu mẫu - có thể lấy từ context hoặc API
  const adminName = 'Admin User';
  const adminAvatar = null; // Có thể là URL ảnh hoặc null để hiển thị icon mặc định

  const handleLogout = () => {
    // Xử lý logout ở đây
    console.log('Logout clicked');
  };

  return (
    <div className="w-64 min-h-screen flex flex-col border-r" style={{ backgroundColor: '#D9B596' }}>
      {/* Phần header với avatar và tên */}
      <div className="p-4">
        <NavLink
          to="/admin/profile"
          className="flex items-center space-x-3 px-4 py-3 rounded-xl border transition-colors shadow-sm hover:bg-opacity-90"
          style={{ borderColor: '#A67153', backgroundColor: 'rgba(166, 113, 83, 0.2)' }}
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#D9B596' }}>
            {adminAvatar ? (
              <img 
                src={adminAvatar} 
                alt={adminName} 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <HiUser className="w-6 h-6 text-white" />
            )}
          </div>
          <span className="font-medium truncate text-white">{adminName}</span>
        </NavLink>
      </div>

      {/* Menu items */}
      <nav className="flex-1 pt-2">
        <ul className="space-y-1 px-4">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={(props) => {
                    const baseClasses = 'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white';
                    if (props.isActive) {
                      return `${baseClasses} shadow-sm`;
                    }
                    return `${baseClasses} hover:bg-[#A67153]`;
                  }}
                  style={(props) => ({
                    backgroundColor: props.isActive ? '#A67153' : 'transparent',
                  })}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Phần Logout ở dưới */}
      <div className="border-t p-4" style={{ borderColor: '#A67153' }}>
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#A67153';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        >
          <HiLogout className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
