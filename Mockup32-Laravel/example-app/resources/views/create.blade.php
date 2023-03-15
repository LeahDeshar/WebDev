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
    <h1 class="mt-5 pt-5">Creating page</h1>
    <p class="display-4">Create Your Own</p>
    <form method="post" action="/store" class="w-75">
        @csrf
    
    <label>Name: </label>
    <input type="text" class="form-control" placeholder="Enter your full name" name="name">
    <label class="mt-3 mb-1">Email: </label>
    <input type="email" class="form-control" placeholder="Enter your Email" name="email">
    <label class="mt-3 mb-1">Password: </label>
    <input type="password" class="form-control" placeholder="Enter your password" name="password">
    <button type="submit" class="btn btn-warning mt-4"><a href="" class="nav-link">Submit</a></button>

    </form>
  
</body>
</html>