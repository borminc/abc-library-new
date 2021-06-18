<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;

use App\Models\LibraryRuleSet;
use Illuminate\Http\Request;

class LibraryRuleSetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LibraryRuleSet::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:library_rule_sets',
            'num_of_books_per_user' => 'required',
            'duration_per_borrow' => 'required',
            'cost_per_day_late_return' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        LibraryRuleSet::create($request->all());
        return response()->json([
            'message' => 'Successfully added ' . $request->name . '!'
        ], 201); 
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LibraryRuleSet  $libraryRuleSet
     * @return \Illuminate\Http\Response
     */
    public function show(LibraryRuleSet $libraryRuleSet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LibraryRuleSet  $libraryRuleSet
     * @return \Illuminate\Http\Response
     */
    public function edit(LibraryRuleSet $libraryRuleSet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LibraryRuleSet  $libraryRuleSet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $rule = LibraryRuleSet::findOrFail($id);

        if ($rule->name != 'default' && $newRule['name'] != 'default') {
            $rule->name = $request->name; // do not change "default"
        }

        $rule->num_of_books_per_user = $request->num_of_books_per_user;
        $rule->duration_per_borrow = $request->duration_per_borrow;
        $rule->cost_per_day_late_return = $request->cost_per_day_late_return;
        $rule->save();
        return response()->json([
            'message' => 'Successfully updated ' . $rule->name . '!'
        ], 201); 
    }

    public function updateAll(Request $request)
    {
        $newRules = $request->all();
        
        foreach ($newRules as $newRule) {
            $rule = LibraryRuleSet::findOrFail($newRule['id']);

            if ($rule->name != 'default' && $newRule['name'] != 'default') {
                $rule->name = $newRule['name']; // do not change "default"
            }

            $rule->num_of_books_per_user = $newRule['num_of_books_per_user'];
            $rule->duration_per_borrow = $newRule['duration_per_borrow'];
            $rule->cost_per_day_late_return = $newRule['cost_per_day_late_return'];
            $rule->save();
        }

        return response()->json([
            'message' => 'Successfully updated all rules!'
        ], 201); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LibraryRuleSet  $libraryRuleSet
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rule = LibraryRuleSet::findOrFail($id);
        // if ($rule)
        $rule->delete();
        return response()->json([
            'message' => 'Successfully deleted ' . $book->title . '!'
            ]); 
    }
}
