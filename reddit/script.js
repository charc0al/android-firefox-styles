// ==UserScript==
// @name           fix reddit shittyness
// @namespace     *.reddit.com
// @author         charx0l
// @description    {Userscript description}
// @include        *.reddit.*
//
// @info                {more informations ...}
// @updateURL           {USI can update your Userscript, if the version number has changed}
// @run-at              (document-end || document-start || document-ready)
// @include-jquery      (true || false)
// @use-greasemonkey    (true || false)
// @version             1.0.0
// ==/UserScript==

console.log('fix reddit shittyness script loaded!');

function removeAds() {
  var posts = document.getElementsByClassName('Post');
  var i = 0;
  for (i = 0; i < posts.length; i++) {
    if (posts[i].getElementsByClassName('PostHeader__promoted-flair').length) {
      posts[i].remove();
    }
  }

  var nsfwForm = document.getElementsByClassName('NSFWInterstitial__form');

   if (nsfwForm.length) {
       var nsfwCheck = nsfwForm[0].getElementsByClassName('NSFWInterstitial__button');
       nsfwCheck[0].click();
   }
  setTimeout(removeAds, 100);
}

setTimeout(removeAds, 100);
document.getElementsByTagName('body')[0].className = 'nightMode';
