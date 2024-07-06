import { Link } from "@inertiajs/react";

export default function ChatSidebar({ recentMessage }) {
    return (
        <>
            <div className="search-box h-10 text-slate-300">
                <div className="flex justify-between border-b border-slate-100 px-5 pb-1">
                    <form
                        action=""
                        className="flex justify-center items-center"
                    >
                        <i className="fa fa-search"></i>
                        <input
                            type="search"
                            className="font-light border-0 hover:border-0 focus:border-0 shadow-none focus:!outline-none focus:ring-0"
                            placeholder="search"
                        />
                    </form>
                    <div className="">
                        <button className="relative">
                            <i className="fa fa-message"></i>
                            <i className="fa fa-plus absolute -top-2 text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="user-list h-screen overflow-y-auto">
                {recentMessage.map((user, index) => (
                    <Link
                        href={`/chat/${user.user_id}`}
                        key={index}
                        className="flex px-5 py-3 transition hover:cursor-pointer hover:bg-slate-100"
                    >
                        <div className="pr-4">
                            {user?.avatar !== undefined ? (
                                <img
                                    src="https://i.ibb.co/dfMMdYc/png-transparent-avatar-user-computer-icons-softwar.png"
                                    alt=""
                                    width="50"
                                />
                            ) : (
                                <i className="fa fa-user-circle text-gray-300 text-5xl"></i>
                            )}
                        </div>
                        <div>
                            <h3 className="text-md text-violet-500">
                                {user.name.length > 0 ? user.name : "N/A"}
                            </h3>
                            <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                                {user.message}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
