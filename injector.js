function injectScript(name) {
  fetch('https://raw.githubusercontent.com/charc0al/android-firefox-styles/master/' + name + '/script.js').then(a => a.text()).then(res => {
      console.log(res);
      let s = document.createElement('script');
      s.type = 'application/javascript';
      s.innerHTML = res;
      document.head.appendChild(s);
  });
}

function injectCSS(name) {
  fetch('https://raw.githubusercontent.com/charc0al/android-firefox-styles/master/' + name + '/style.css').then(a => a.text()).then(res => {
      console.log(res);
      let s = document.createElement('style');
      s.type = 'text/css';
      s.innerHTML = res;
      document.head.appendChild(s);
  });
}

function each(arr, func) {
  var i;
  for (i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

each(['reddit'], name => {
  injectScript(name);
  injectCSS(name);
});
