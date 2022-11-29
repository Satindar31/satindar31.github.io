document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', 'Please do not copy text');
    e.clipboardData.setData('text/html', '<b>Please do not copy text</b>');
    e.preventDefault();
});

function e() {
    copyText("join.mercitysmp.cf")
    notify("IP coppied")
}