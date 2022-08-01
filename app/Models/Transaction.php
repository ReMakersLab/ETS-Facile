<?php

namespace App\Models;

use App\Models\Member;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    public function members()
    {
        /**
         * Get the member involved in the transaction.
         */
        return $this->belongsTo(Member::class);
    }
}
