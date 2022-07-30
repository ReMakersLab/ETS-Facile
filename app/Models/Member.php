<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Member extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at','birth_date'];

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
