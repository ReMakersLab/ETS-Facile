<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
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
        Request::validate([
            'name' => ['required', 'max:50'],
            'surname' => ['required', 'max:50'],
            'email' => ['max:50', 'email:rfc,dns'],
            'birth_date' => ['nullable', 'date'],
            'fiscal_code' => ['required', 'max:16'],
            'country' => ['nullable', 'max:2'],
            'region' => ['nullable', 'max:2'],
            'city' => ['nullable', 'max:50'],
            'postal_code' => ['nullable', 'max:10'],
            'address' => ['nullable', 'max:150'],
            'phone' => ['nullable', 'max:15'],
            'tel' => ['nullable', 'max:15'],
            'last_fee' => ['nullable', 'date'],
            'approved' => ['nullable', 'boolean'],
        ]);

        Member::create([
            'name' => request('name'),
            'surname' => request('surname'),
            'email' => request('email'),
            'birth_date' => request('birth_date'),
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
        );
        return Redirect::route('members')->with('success', 'Member created.');
    }

    public function edit($id)
    {
        $member = Member::withTrashed()->find($id);
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

    public function update(Member $member)
    {
        Request::validate([
            'name' => ['required', 'max:50'],
            'surname' => ['required', 'max:50'],
            'email' => ['max:50', 'email:rfc,dns'],
            'birth_date' => ['nullable', 'date'],
            'fiscal_code' => ['required', 'max:16'],
            'country' => ['nullable', 'max:2'],
            'region' => ['nullable', 'max:2'],
            'city' => ['nullable', 'max:50'],
            'postal_code' => ['nullable', 'max:10'],
            'address' => ['nullable', 'max:150'],
            'phone' => ['nullable', 'max:15'],
            'tel' => ['nullable', 'max:15'],
            'last_fee' => ['nullable', 'date'],
            'approved' => ['nullable', 'boolean'],
        ]);
        
        $member->update(
            [
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
                'approved' => request('approved')
            ]
        );

        return Redirect::back()->with('success', 'Member updated.');
    }

    public function destroy(Member $member)
    {
        $member->delete();

        return Redirect::back()->with('success', 'Member deleted.');
    }

    public function restore($id)
    {
        Member::withTrashed()->find($id)->restore();

        return Redirect::back()->with('success', 'Member restored.');
    }

}