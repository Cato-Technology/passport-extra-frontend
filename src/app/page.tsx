'use client'
import { useState } from "react";
import { AppView } from "@/sections/overview/view";
import DashboardLayout from "@/layouts/admindashboard";

export default function Home() {


  return (
    <DashboardLayout>
    <AppView />
    </DashboardLayout>
   
  );
}
