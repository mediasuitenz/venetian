<?php

// Convert bookmarkscript.js to HTML
$content = file_get_contents('app.js');
$encoded = htmlspecialchars($content, ENT_QUOTES);
$output = <<<FILE
Drag this link to your browser's bookmark bar: 
<a href="javascript: $encoded">Venetian</a>
<br>
Or copy this text into a bookmark on mobile:
<br>
<textarea rows=10 cols=100>
javascript: $encoded
</textarea>
FILE;

file_put_contents("deploy/venetian.html", $output);