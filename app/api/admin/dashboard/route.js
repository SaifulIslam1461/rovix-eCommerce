import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Sales', val: '৳ 14,85,000', color: 'border-amber-500' },
    { title: 'Total Orders', val: '324', color: 'border-blue-500' },
    { title: 'Pending Orders', val: '18', color: 'border-red-500' },
    { title: 'VIP Customers', val: '42', color: 'border-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col md:flex-row font-sans">
      {/* 🔐 Admin Sidebar */}
      <aside className="w-full md:w-64 bg-black border-r border-amber-600/20 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-black text-amber-500 tracking-widest uppercase mb-8">
            ROVIX CONTROL
          </h2>
          <nav className="space-y-3 text-xs uppercase font-bold tracking-wider">
            <Link href="/admin" className="block py-2.5 px-4 rounded bg-amber-500 text-black">
              📊 Dashboard
            </Link>
            <div className="py-2.5 px-4 rounded hover:bg-gray-900 text-gray-300 cursor-pointer">
              📦 Product Manager
            </div>
            <div className="py-2.5 px-4 rounded hover:bg-gray-900 text-gray-300 cursor-pointer">
              🛒 Order System
            </div>
            <div className="py-2.5 px-4 rounded hover:bg-gray-900 text-gray-300 cursor-pointer">
              👥 Customer CRM & VIP
            </div>
            <div className="py-2.5 px-4 rounded hover:bg-gray-900 text-gray-300 cursor-pointer">
              🏷️ Coupons & Flash Sales
            </div>
            <div className="py-2.5 px-4 rounded hover:bg-gray-900 text-gray-300 cursor-pointer">
              📝 Blog Management
            </div>
          </nav>
        </div>

        {/* Security Info */}
        <div className="mt-8 pt-4 border-t border-gray-900 text-[10px] text-gray-500 space-y-1">
          <p className="text-emerald-500 font-bold">🔒 SSL & 2FA Active</p>
          <p>Brute Force / SQLi Protected</p>
          <p>Auto Database Backup: OK</p>
          <Link href="/" className="inline-block mt-3 text-amber-500 font-bold uppercase underline">
            &larr; Return To Website
          </Link>
        </div>
      </aside>

      {/* 📈 Main Dashboard Area */}
      <main className="flex-1 p-6 md:p-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-gray-800 pb-4">
          <div>
            <h1 className="text-2xl font-black text-white uppercase tracking-wider">Super Admin Console</h1>
            <p className="text-xs text-gray-400">ROVIX Business & Security Operations Hub</p>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded font-mono">
              System Health: 100%
            </span>
            <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded font-mono">
              Role: Super Admin
            </span>
          </div>
        </header>

        {/* 📊 Overview Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <div key={i} className={`bg-black p-5 rounded-lg border-l-4 ${s.color} border-y border-r border-gray-900`}>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">{s.title}</p>
              <h3 className="text-xl font-black text-white mt-1">{s.val}</h3>
            </div>
          ))}
        </div>

        {/* 🛒 Live Orders & Management */}
        <div className="bg-black p-6 rounded-lg border border-gray-900 mb-8">
          <h3 className="text-sm font-extrabold text-amber-500 uppercase tracking-wider mb-4">
            Recent Orders & Status
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-gray-900 text-gray-400 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900 font-mono text-[11px]">
                <tr>
                  <td className="p-3 text-amber-400">#RVX-9081</td>
                  <td className="p-3">Tanvir Hasan</td>
                  <td className="p-3">01711***890</td>
                  <td className="p-3 font-bold text-white">৳ 12,500</td>
                  <td className="p-3"><span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-[10px]">Processing</span></td>
                  <td className="p-3"><button className="bg-amber-500 text-black px-2 py-1 rounded font-bold text-[10px]">Manage</button></td>
                </tr>
                <tr>
                  <td className="p-3 text-amber-400">#RVX-9082</td>
                  <td className="p-3">Sharmin Akter</td>
                  <td className="p-3">01822***123</td>
                  <td className="p-3 font-bold text-white">৳ 6,800</td>
                  <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px]">Delivered</span></td>
                  <td className="p-3"><button className="bg-amber-500 text-black px-2 py-1 rounded font-bold text-[10px]">Manage</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 🛡️ System Security Logs */}
        <div className="bg-black p-6 rounded-lg border border-gray-900">
          <h3 className="text-sm font-extrabold text-amber-500 uppercase tracking-wider mb-4">
            Live Security & Activity Logs
          </h3>
          <div className="space-y-2 text-[11px] font-mono text-gray-400">
            <p className="text-emerald-400">[2026-10-07 22:40] System backup auto-completed successfully.</p>
            <p className="text-gray-400">[2026-10-07 22:25] Admin login verified via Two-Factor Authentication (2FA).</p>
            <p className="text-gray-400">[2026-10-07 22:10] SSL Check OK | CSRF & XSS Guard Active.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
