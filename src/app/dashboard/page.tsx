'use client'
import ViewDashboard from "@/components/viewDashboard";
// components
import Layout from "@/layout/layout";
import {
    FaMagnifyingGlass
} from 'react-icons/fa6';
export default function Dashboard() {
    return (
        <Layout>
            <div className="px-8 py-8 mt-20">
                <ViewDashboard/>
            </div>
        </Layout>
    );
}
