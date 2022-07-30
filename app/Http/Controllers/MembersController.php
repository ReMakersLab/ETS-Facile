<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembersController extends Controller
{
    public function index() {
        return Inertia::render('Members/Index', [
            "members" => Member::all('id','name','surname','fiscal_code','email')
        ]);
    }

    public function create()
    {
        return Inertia::render('Members/Create');
    }

    public function store()
    {
        Member::create([
            'name' => request('name'),
            'surname' => request('surname'),
            'email' => request('email'),
            'birth_date' => (new \DateTime(request('birth_date')))->format("Y-m-d"),
            'fiscal_code' => request('fiscal_code'),
            'country' => request('country'),
            'region' => request('region'),
            'city' => request('city'),
            'postal_code' => request('postal_code'),
            'address' => request('address'),
            'phone' => request('phone'),
            'tel' => request('tel'),
            'last_fee' => request('last_fee'),
            'approved' => request('approved')]
            /*
            Request::validate([
                request('name') => ['required', 'max:50'],
                request('surname') => ['required', 'max:50'],
                request('email') => ['nullable', 'max:50', 'email'],
                request('birth_date') => ['nullable', 'date'],
                request('fiscal_code') => ['required', 'max:16'],
                request('country') => ['nullable', 'max:2'],
                request('region') => ['nullable', 'max:50'],
                request('city') => ['nullable', 'max:50'],
                request('postal_code') => ['nullable', 'max:25'],
                request('address') => ['nullable', 'max:150'],
                request('phone') => ['nullable', 'max:50'],
                request('tel') => ['nullable', 'max:50'],
                request('last_fee') => ['nullable', 'date'],
                request('approved') => ['nullable', 'boolean'],
            ])
            */
        );
        return Redirect::route('members')->with('success', 'Member created.');
    }

    public function edit(Member $member)
    {
        return Inertia::render('Members/Edit', [
            'member' => [
                'id' => $member->id,
                'name' => $member->name,
                'surname' => $member->surname,
                'fiscal_code' => $member->fiscal_code,
                'birth_date' => $member->birth_date,
                'email' => $member->email,
                'phone' => $member->phone,
                'tel' => $member->tel,
                'address' => $member->address,
                'city' => $member->city,
                'region' => $member->region,
                'country' => $member->country,
                'postal_code' => $member->postal_code,
                'deleted_at' => $member->deleted_at,
            ],
        ]);
    }

}