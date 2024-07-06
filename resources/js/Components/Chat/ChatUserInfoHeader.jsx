export default function ChatUserInfoHeader({receiver}) {
    return (
        <div className="user-info-header bg-white px-5 py-3">
            <div className="flex justify-between">
                <div className="flex items-center">
                {receiver?.avatar !== undefined ? (
                                <img
                                    src="https://i.ibb.co/dfMMdYc/png-transparent-avatar-user-computer-icons-softwar.png"
                                    alt=""
                                    width="50"
                                />
                            ) : (
                                <i className="fa fa-user-circle text-gray-300 text-5xl"></i>
                            )}
                    {/* <img
                        src="https://i.ibb.co/dfMMdYc/png-transparent-avatar-user-computer-icons-softwar.png"
                        alt=""
                        width="40"
                    /> */}
                    <h3 className="text-md pl-4 text-gray-400">{receiver.name}</h3>
                </div>
                <div className="">
                    <i className="fa fa-message text-violet-300"></i>
                    <i className="fa fa-video ml-3 text-gray-300"></i>
                    <i className="fa fa-phone ml-3 text-gray-300"></i>
                </div>
            </div>
        </div>
    );
}
