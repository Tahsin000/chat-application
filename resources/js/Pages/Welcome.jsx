import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-2xl w-full bg-white p-8 shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Welcome to Chat Application
                </h1>
                <p className="mb-6 text-center">
                    Connect with friends and family instantly!
                </p>
                <div className="text-center">
                    <Link
                        href={route("login")}
                        className="btn btn-primary mr-2"
                    >
                        Login
                    </Link>
                    <Link
                        href={route("register")}
                        className="btn btn-secondary"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}
