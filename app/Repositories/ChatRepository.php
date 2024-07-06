<?php

namespace App\Repositories;

use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class ChatRepository
{
    public function getUserMessages(int $senderId, int $receiverId)
    {
        return Message::whereIn('sender_id', [$senderId, $receiverId])
            ->whereIn('receiver_id', [$senderId, $receiverId])
            ->get();
    }
    public function sentMessage(array $data): Message
    {
        return Message::create($data);
    }
    public function getRecentUsersWithMessage(int $senderId): array
    {
        DB::statement("SET SESSION sql_mode=''");
        $recentMessages = Message::where(function ($query) use ($senderId) {
            $query->where('sender_id', $senderId)
                ->orWhere('receiver_id', $senderId);
        })->groupBy('sender_id', 'receiver_id')
            ->select('sender_id', 'receiver_id', 'message')
            ->orderBy('id', 'desc')
            ->limit(20)
            ->get();


        return $this->filterRecentMessages($recentMessages, $senderId);
    }

    public function filterRecentMessages(Collection $recentMessages,int $senderId): array
    {
        $recentUsersWithMessages = [];
        $usedUserId = [];
        foreach ($recentMessages as $message) {
            $userId = $message->sender_id == $senderId ? $message->receiver_id : $message->sender_id;
            if (!in_array($userId, $usedUserId)) {
                $recentUsersWithMessages[] = [
                    'user_id' => $userId,
                    'message' => $message->message,
                ];
                $usedUserId[] = $userId;
            }
        }
        foreach ($recentUsersWithMessages as $key => $userMessage) {
            $recentUsersWithMessages[$key]['name'] = User::where('id', $userMessage['user_id'])->value('name') ?? '';
        }
        return $recentUsersWithMessages;
    }
}
