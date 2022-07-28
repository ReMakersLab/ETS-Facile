<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembersController extends Controller
{
    public function index() {
        $members = Member::all('id','name','surname','fiscal_code','email');
        return Inertia::render('Members/Index', [
            "members" => $members
        ]);
    }
}
