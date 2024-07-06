<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repositories\ChatRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function __construct(private ChatRepository $chat)
    {
        $this->chat = $chat;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, ?int $receiverId = null)
    {
        //
        $messages = empty($receiverId) ? [] : $this->chat->getUserMessages((int)$request->user()->id, (int)$receiverId);
        return Inertia::render('Chat/Chat', [
            'messages' => $messages,
            'recentMessage' => $this->chat->getRecentUsersWithMessage($request->user()->id),
            'receiver' => User::find($receiverId),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, ?int $receiverId = null)
    {
        //
        $request->validate([
            'message' => 'required|string',
        ]);
        if (empty($receiverId)) {
            return;
        }
        try {
            $message = $this->chat->sentMessage([
                'sender_id' => (int)$request->user()->id,
                'receiver_id' => $receiverId,
                'message' => $request->message,
            ]);
            event(new \App\Events\MessagesSent($message));
            return Redirect::route('chat.index', $receiverId);
        } catch (\Throwable $th) {
            return Redirect::route('chat.index', $receiverId);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }



    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
