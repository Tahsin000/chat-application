import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";

export default function ChatInput({ receiver }) {
    console.log(receiver);
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("chat.store", receiver?.id));
        reset("message");
    };

    return (
        <div className="fixed bottom-0 w-full bg-white pl-4">
            <form onSubmit={submit}>
                <TextInput
                    name="message"
                    value={data.message}
                    className="h-16 w-full overflow-y-auto bg-white pt-3 font-light border-0 hover:border-0 focus:border-0 shadow-none focus:outline-none focus:ring-0"
                    placeholder="Write a message"
                    onChange={onHandleChange}  // Correct prop name is onChange
                />
            </form>
        </div>
    );
}
