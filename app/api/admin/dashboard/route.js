import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      totalRevenue: 2500000,
      totalProducts: 450,
      totalCustomers: 1200,
      totalOrders: 850,
      pendingOrders: 15,
      processingOrders: 32,
      deliveredOrders: 780,
      returnedOrders: 23
    }
  });
}
