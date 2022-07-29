<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'surname',
        'email',
        'birth_date',
        'fiscal_code',
        'country',
        'region',
        'city',
        'postal_code',
        'address',
        'phone',
        'tel',
        'last_fee',
        'approved',
    ];
}
