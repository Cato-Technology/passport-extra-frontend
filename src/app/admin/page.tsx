'use client'
import React from 'react'
import AdminDashboardLayout from '@/layouts/admindashboard'
import { AppView } from '@/sections/overview/view'
export default function Admin() {
  return (
   <AdminDashboardLayout>
     <AppView/>
   </AdminDashboardLayout>
  )
}
