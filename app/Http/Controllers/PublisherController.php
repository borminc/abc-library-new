<?php

namespace App\Http\Controllers;

use App\Models\Publisher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class PublisherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Publisher::all();
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
             'name' => 'required|string|unique:publishers'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        Publisher::create($request->all());
        
        return response()->json([
            'message' => 'Successfully added ' . $request->name . '!'
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Publisher  $publisher
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Publisher::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Publisher  $publisher
     * @return \Illuminate\Http\Response
     */
    public function edit(Publisher $publisher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Publisher  $publisher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $publisher = Publisher::findOrFail($id);

        $publisher->name = $request->name;
        $publisher->save();

        return response()->json([
            'message' => 'Successfully updated ' . $request->name . '!'
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Publisher  $publisher
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $publisher = Publisher::findOrFail($id);
        $publisher->delete();
        return response()->json([
            'message' => 'Successfully deleted ' . $publisher->name . '!'
            ]); 
    }
}
