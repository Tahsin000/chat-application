import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div className="p-6 bg-white border-b border-gray-200">
            
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium">Statistics</h3>
                        <p className="mt-2 text-gray-600">
                            Overview of your application statistics.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium">Recent Messages</h3>
                        <p className="mt-2 text-gray-600">
                            View your most recent messages.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium">User Management</h3>
                        <p className="mt-2 text-gray-600">
                            Manage your user settings and profiles.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
