<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="CNIT 132: Homework 8">
        <meta name="keywords" content="HTML, CSS, Bootstrap, Google Fonts, Javascript">
        <meta name="author" content="Pamela Gilmour">
        <meta property="og:title" content="Pamela Gilmour CNIT132 Hw8" />
        <meta property="og:description" content="Homework 8" />
        <meta property="og:image" content="https://i.imgur.com/25Hlt2f.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="styles.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;900&family=Lora:ital@0;1&family=Roboto+Mono:wght@300&family=VT323&display=swap"
        rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <title>Pamela Gilmour : CNIT 133 Homework</title>
        <link rel="icon" type="image/x-icon" href="fav.ico">
        <script>
            function showHint(str) {
                if (str.length == 0) {
                    document.getElementById("txtHint").innerHTML = "";
                    return;
                } else {
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            document.getElementById("txtHint").innerHTML = this.responseText;
                        }
                    }
                    xmlhttp.open("GET", "gethint.php?q="+str, true);
                    xmlhttp.send();
                }
            }
</script>
    </head>
    <body>
        <!-- insert comments into every homework assignment  -->
        <header class="header">CNIT 133 Homework - Ajax Applications</header>
        <div class="container">
            <nav class="nav row">
                <a class="nav-link" href="index.html">Home</a>
                <a class="nav-link" href="hw2.html">Homework 2</a>
                <a class="nav-link" href="hw3.html">Homework 3</a>
                <a class="nav-link" href="hw4.html">Homework 4</a>
                <a class="nav-link" href="hw5.html">Homework 5</a>
                <a class="nav-link" href="hw6.html">Homework 6</a>
                <a class="nav-link" href="hw7.html">Homework 7</a>
                <a class="nav-link active" href="hw8.php">Homework 8</a>
            </nav>
        </div>
        <div class="container">
            <section class="col">
                <h1 class="row">Homework Page 8</h1>
                <p><b>Start typing a name in the input field below:</b></p>
                <form action="">
                    <label for="fname">First name:</label>
                    <input class="black" type="text" id="fname" name="fname" onkeyup="showHint(this.value)">
                </form><br><br>
                <p>Suggestions: <span id="txtHint"></span></p>
            </section><br><br>
            <hr>
            <section>
                <!-- Include in that page a paragraph presenting a REST API that you could use in an application and the URL to the documentation of that API  -->
                <p>Presenting:</p>
                <h2 id="hw8APIheading">Discogs API: </h2>
                <a id="hw8Link" href="https://www.discogs.com/developers">Link to Documentation</a>

                <!-- Your paragraph or table should contain at least the following information: -->
                <table id="hw8table"> 
                    <tr>
                    <!--    What type of response file you get (JSON, XML, etc.)? -->
                        <th>Type of Response</th>
                        <td>JSON</td>
                
                    </tr>
                    <tr>
                    <!--    Do you need any type of key to access and use the API? -->
                        <th>Need a key?</th>
                        <td>No</td>
                    </tr>
                    <tr>
                    <!-- You need also to provide a link to any type of documentation that would help the developer use the API. -->
                        <th>Link to Documentation</th>
                        <td><a id="hw8Linkhead" href="https://www.discogs.com/developers#page:home,header:home-quickstart" >Quick Start Guide</a></td>
                    </tr>
                
                </table>







        </div>
        <footer></footer>
    </body>

</html>