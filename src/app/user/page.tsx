'use client'
import { Helmet } from 'react-helmet-async';

import { UserView } from '@/sections/user/view';
import DashboardLayout from '@/layouts/userDashboard';
// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <DashboardLayout>
     <UserView />
    </DashboardLayout>
      
    
  );
}
