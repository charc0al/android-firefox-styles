var injectorBaseURL = 'https://raw.githubusercontent.com/charc0al/android-firefox-styles/master/';

function inject(url, tag, t) {
  fetch(url).then(a => a.text()).then(res => {
      let s = document.createElement(tag);
      s.type = t;
      s.innerHTML = res;
      document.head.appendChild(s);
  });
}

function injectScript(name) {
  inject(injectorBaseURL + name + '/script.js', 'script', 'application/javascript');
}

function injectCSS(name) {
  inject(injectorBaseURL + name + '/style.css', 'style', 'text/css');
}

var host = window.location.host.split('.');
var hostName = host[host.length-2];

injectScript(hostName);
injectCSS(hostName);
