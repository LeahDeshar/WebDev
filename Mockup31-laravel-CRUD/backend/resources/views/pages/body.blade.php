<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Document</title>

    <!-- link the styles -->
    <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}"/>
</head>
<body>
    <h1 class="text-center">Body of the Pages <button type="button" class="btn btn-warning">
        <a href="/create-category" class="nav-link">  
        Create</a></button></h1>
    <div class="container w-50">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Title</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
       

    @foreach($categories as $category )
    <tr>
      <td>{{$loop->index+1}}</td>
      <td>{{$category->title}}</td>

      <td>

        <button type="button" class="btn btn-success">
          <a href="/category-edit/{{$category->id}}" class="nav-link">Edit</a>
        </button>
        <button type="button" class="btn btn-danger">
          <a href="/category-delete/{{$category->id}}" class="nav-link">Delete</a>
        </button>
        
      </td>
    </tr>
    @endforeach
   
  </tbody>
</table>

    </div>
   
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>