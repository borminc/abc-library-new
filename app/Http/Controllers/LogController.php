<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class LogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Log::orderBy('id', 'desc')->get();
        if ($result) {
            $result->load('user');
            $result->load('book');
        }
        return $result;
    }

    public function getUserLogs() {
        $result = Log::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();
        if ($result) {
            $result->load('book');
        }
        return $result;
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
            'title' => 'required|string',
            'description' => 'required|string',
            'user_id' => 'required|integer',
            'book_id' => ''
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        $log = new Log();
        $log->title = $request->title;
        $log->description = $request->description;
        $log->date_time = date('d.m.y h:m A', time());
        $log->user_id = $request->user_id;
        $log->book_id = $request->book_id;
        $log->save();

        return response()->json([
            'message' => 'Successfully created log.'
            ]); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $log = Log::findOrFail($id);
        if($log) {
            $log->load('user');
            $log->load('book');
        }
        return $log;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function edit(Log $log)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $log = Log::findOrFail($id);

        $log->title = $request->title;
        $log->description = $request->description;
        $log->user_id = $request->user_id;
        $log->book_id = $request->book_id;
        $log->save();

        return response()->json([
            'message' => 'Successfully edited log.'
            ]);        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $log = Log::findOrFail($id);
        $log->delete();
        return response()->json([
            'message' => 'Successfully deleted log.'
            ]);
    }
}
