<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    // Define which attributes are not mass assignable
    // protected $guarded = [];

    // Define which attributes are mass assignable
    protected $fillable = [
        'sender_id',
        'receiver_id',
        'message',
    ];

    // Optionally, define the table if it doesn't follow Laravel's naming convention
    protected $table = 'messages';
}