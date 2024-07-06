import ChatInput from "@/Components/Chat/ChatInput";
import ChatMessages from "@/Components/Chat/ChatMessages";
import ChatSidebar from "@/Components/Chat/ChatSidebar";
import ChatUserInfoHeader from "@/Components/Chat/ChatUserInfoHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Chat(props) {
    const { auth } = props;
    console.log(props);
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* <Head title="Chat" /> */}

            <div className="">
                {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Messanger</div>
                    </div>
                </div> */}

                <div className="messenger h-screen overflow-hidden p-4">
                    <div className="flex">
                        <div className="basis-2/6 border-r border-slate-100 bg-white pt-3">
                            <ChatSidebar recentMessage={props.recentMessage} />
                        </div>
                        <div className="basis-4/6">
                            {props.receiver?.id ? (
                                <>
                                    <ChatUserInfoHeader receiver={props.receiver} />
                                    <div className="messanger mt-4">
                                        <div className="px-4">
                                            <ChatMessages
                                                messages={props.messages}
                                                auth_id={props.auth?.user?.id}
                                            />
                                        </div>
                                        <ChatInput receiver={props.receiver} />
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-center items-center bg-slate-100 h-screen">
                                    <p className="font-bold text-3xl text-gray-500">
                                        Please select a user to start
                                        messaging...
                                    </p>
                                </div>
                            )}

                            {/* <ChatUserInfoHeader />
                            <div className="messanger mt-4">
                                <div className="px-4">
                                    <ChatMessages />
                                </div>
                                <ChatInput />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
