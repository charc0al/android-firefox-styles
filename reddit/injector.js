fetch('https://raw.githubusercontent.com/charc0al/cowsay-files/master/.cowrc').then(a => a.text()).then(res => {
    console.log(res);
});
