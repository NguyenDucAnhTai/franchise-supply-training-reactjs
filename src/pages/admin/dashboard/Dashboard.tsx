import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dữ liệu mẫu cho doanh thu theo tháng
const monthlyRevenueData = [
  { month: 'Tháng 1', revenue: 45000000 },
  { month: 'Tháng 2', revenue: 52000000 },
  { month: 'Tháng 3', revenue: 48000000 },
  { month: 'Tháng 4', revenue: 61000000 },
  { month: 'Tháng 5', revenue: 55000000 },
  { month: 'Tháng 6', revenue: 67000000 },
  { month: 'Tháng 7', revenue: 72000000 },
  { month: 'Tháng 8', revenue: 68000000 },
  { month: 'Tháng 9', revenue: 75000000 },
  { month: 'Tháng 10', revenue: 69000000 },
  { month: 'Tháng 11', revenue: 81000000 },
  { month: 'Tháng 12', revenue: 85000000 },
];

// Dữ liệu mẫu
const totalProducts = 1250;
const totalInventory = 15680;

// Hàm format số tiền
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value);
};

// Hàm format số lượng
const formatNumber = (value: number) => {
  return new Intl.NumberFormat('vi-VN').format(value);
};

const Dashboard = () => {
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Thống kê tổng quan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
        {/* Card Tổng số sản phẩm */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Tổng số sản phẩm</p>
              <p className="text-3xl font-bold text-gray-800">{formatNumber(totalProducts)}</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-full">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card Số lượng tồn kho */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Số lượng tồn kho</p>
              <p className="text-3xl font-bold text-gray-800">{formatNumber(totalInventory)}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-full">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Biểu đồ doanh thu theo tháng */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Doanh thu theo tháng</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={monthlyRevenueData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
            />
            <Tooltip 
              formatter={(value: number | undefined) => value ? formatCurrency(value) : ''}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Bar 
              dataKey="revenue" 
              fill="#3b82f6" 
              name="Doanh thu"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
