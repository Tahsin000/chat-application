import { Fragment } from "react";

export default function ChatMessages({ messages,auth_id }) {
    const isReceiveMessage = (message) =>{
        return message.receiver_id === auth_id
    };
    return (
        <>
            {(messages || []).map((message, index) => (
                <Fragment key={index}>
                    <div className={`${isReceiveMessage(message) ? "receive-chat justify-start" : "send-chat justify-end"} relative flex `}>
                        <div className={`mb-2 max-w-[80%] rounded-md ${isReceiveMessage(message) ? "bg-violet-400 text-white" : "bg-violet-100 text-slate-500" } px-3 py-2 text-sm `}>
                            <i className={`fa ${isReceiveMessage(message) ? "fa-caret-up text-violet-400 -top-2" : "fa-caret-down bottom-0 right-2 text-violet-100"} absolute  `}></i>
                            <p>
                                {message.message}
                            </p>
                        </div>
                    </div>
                    {/* <div className="send-chat relative flex justify-end">
                        <i className="fa fa-caret-down absolute "></i>
                        <div className="mb-2 max-w-[80%] rounded-md bg-violet-100 px-3 py-2 text-sm text-slate-500">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aperiam, quo!
                            </p>
                        </div>
                    </div> */}
                </Fragment>
            ))}
        </>
    );
}
