// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let searchBtn = document.getElementById('searchBtn');
let form = document.getElementById('searchForm');

searchBtn.onclick = function(){
    let language = document.getElementById('languageSelect').value;
    let word = document.getElementById('inputWord').value;
    console.log(language);
    console.log(word);
    let response = makeRequest(language, word);
    console.log(response);
    
}


function makeRequest(language, word){
    var params = { term:word, lang:language };
    var str = jQuery.param( params );
    var theUrl = "http://www.syzible.com/tearma/backend?";
    theUrl = theUrl.concat(str);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}