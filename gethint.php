<?php
    // Array with names
    $a[] = "Anna";
    $a[] = "Amanda";
    $a[] = "Brittany";
    $a[] = "Cinderella";
    $a[] = "Diana";
    $a[] = "Eva";
    $a[] = "Fiona";
    $a[] = "Gunda";
    $a[] = "Hege";
    $a[] = "Inga";
    $a[] = "Irina";
    $a[] = "Jason";
    $a[] = "Johanna";
    $a[] = "Kim";
    $a[] = "Kris";
    $a[] = "Kitty";
    $a[] = "Linda";
    $a[] = "Margaret";
    $a[] = "Mike";
    $a[] = "Nina";
    $a[] = "Naz";
    $a[] = "Noah";
    $a[] = "Ola";
    $a[] = "Ophelia";
    $a[] = "Obi Wan";
    $a[] = "Pamela";
    $a[] = "Padmé";
    $a[] = "Petunia";
    $a[] = "Amanda";
    $a[] = "Ryan";
    $a[] = "Raquel";
    $a[] = "Cindy";
    $a[] = "Doris";
    $a[] = "Eve";
    $a[] = "Evita";
    $a[] = "Sarah";
    $a[] = "Sunniva";
    $a[] = "Tove";
    $a[] = "Tulip";
    $a[] = "Unni";
    $a[] = "Violet";
    $a[] = "Liza";
    $a[] = "Elizabeth";
    $a[] = "Ellen";
    $a[] = "Wenche";
    $a[] = "Vicky";
    $a[] = "Xavier";

    // get the q parameter from URL
    $q = $_REQUEST["q"];

    $hint = "";

    // lookup all hints from array if $q is different from ""
    if ($q !== "") {
      $q = strtolower($q);
      $len=strlen($q);
      foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
      }
    }

    // Output "no suggestion" if no hint was found or output correct values
    echo $hint === "" ? "no suggestion" : $hint;
?>