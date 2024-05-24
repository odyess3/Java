<!DOCTYPE html>
<html lang ="en">
    <head>
        <meta charset="UTF-8">
        <meta name ="viewport" content="width=device-width, initial-scale=1.0">
        <title> assignment 4 </title>
        <link rel="stylesheet" href="assignment-04.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
        <script src="backend/assignment-04.js"></script>
    </head>

    <body>
        <div class = "container my-5">
            <h2> List of User</h2>
            <a class="btn btn-primary" href="/frontend/create.html" role="button">New User</a>
            <br>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Moblie</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                            <td>$row[Data_Id]</td>
                            <td>$row[Title]</td>
                            <td>$row[First_Name]</td>
                            <td>$row[Surname]</td>
                            <td>$row[Mobile]</td>
                            <td>$row[Email]</td>
                            <td>
                                <a class ="btn btn-danger btn-sm" href="">Address</a>
                            </td>
                    </tr>
                    ";
                    }
                    ?>


                    
                    
                </tbody>
            </table>
        </div>
        
    </body>
</html>
