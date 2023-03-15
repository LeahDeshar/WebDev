<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Document</title>
</head>
<body class="ms-5">
    <h1 class="mt-5 pt-5">Operation page</h1>
    <p class="display-4">Welcome to the new page</p>
    

   <table class="table">
    <thead>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
    </tr>
    @foreach($category as $x)
    <tr>
        <td>{{$loop->index+1}}</td>
        <td>{{$x->name}}</td>
        <td>{{$x->email}}</td>

    </tr>
    @endforeach
    </thead>
   
    <tr>

    </tr>
   </table>
   <button type="button" class="btn btn-success my-5"><a href="/same" class="nav-link">Go to next page to see same thing</a></button>
</body>
</html>