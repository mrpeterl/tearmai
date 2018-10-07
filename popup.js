// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let searchBtn = document.getElementById('searchBtn');
let form = document.getElementById('searchForm');

searchBtn.onclick = function () {
    let language = document.getElementById('languageSelect').value;
    let word = document.getElementById('inputWord').value;
    console.log(language);
    console.log(word);
    let response = makeRequest(language, word);
    document.getElementById('legend').innerHTML = response;
}

var getJSON = function (url) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, false);
    xhr.send();
    
    var result = xhr.responseText;
    return result;
};

function makeRequest(language, word) {
    var params = { term: word, lang: language, limit: 3 };
    var str = jQuery.param(params);
    var theUrl = "http://www.syzible.com/tearma/backend?";
    theUrl = theUrl.concat(str);

    console.log(theUrl);

    var json = getJSON(theUrl);
    console.log(json);
};