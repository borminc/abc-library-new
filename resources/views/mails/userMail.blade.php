<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ABC Library</title>
</head>
<body>
    <h1>{{$details['title']}}</h1>
    <p>{{$details['body']}}</p>

    @if(isset($details['return_date']))
        <p style='color: rgb(220, 0, 0)'><b>Return date: {{$details['return_date']}}</b></p>
    @endif
    
    @if(isset($details['book']))
        <img src='{{ $details['book']->image }}' style='max-height:250px; margin-top: 25px' />
        <table class='table small'>
            <h3>{{$details['book']->title}}</h3>
            <thead>
                <th style='min-width: 150px'></th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td class='fw-bold' style='min-width: 150px'>Author</td>
                    <td>{{$details['book']->author}}</td>
                </tr>
                <tr>
                    <td class='fw-bold' style='min-width: 150px'>Year</td>
                    <td>{{$details['book']->year}}</td>
                </tr>
                <tr>
                    <td class='fw-bold' style='min-width: 150px'>Publisher</td>
                    <td>{{$details['book']->publisher->name}}</td>
                </tr>
                <tr>
                    <td class='fw-bold' style='min-width: 150px'>Category</td>
                    <td>{{$details['book']->category->name}}</td>
                </tr>
                <tr>
                    <td class='fw-bold' style='min-width: 150px'>Description</td>
                    <td>{{$details['book']->description}}</td>
                </tr>
            </tbody>
        </table>
    @endif
    
    <div style='margin-top: 25px'>
        <a href='{{ config('app.url') }}' target="_blank" style='margin-right: 25px'>Go to ABC Library</a>
        @if(isset($details['book']))
            <a href='{{ config('app.url') }}/user/borrowed-books' target="_blank">See all my borrowed books</a>
        @endif
    </div>

    <div style='margin-top: 25px'>
        @if(isset($details['ref']))
            <small>Log ref: {{$details['ref']}}</small>
        @endif
    </div>

    <footer class='sticky-footer bg-none' style='margin-top: 50px'>
        <div class='container mb-3'>
            <div class='copyright text-center my-auto'>
                <span>Copyright &copy; ABC Library 2021</span>
            </div>
        </div>
        <small style='margin-top: 10px'>
            <div>No. 5Eo, St. 2009, 12406, Phnom Penh, Cambodia</div>
            <div>Contact us: 011 222 333</div>
        </small>
    </footer>
</body>
</html>