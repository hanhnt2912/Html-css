var REGISTER_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs";
var btnSubmit = document.forms['song-form']['btn-submit'];
if (btnSubmit != null){
    btnSubmit.onclick = function () {
        var txtname = document.forms['song-form']['name'];
        var txtsinger = document.forms['song-form']['singer'];
        var txtauthor = document.forms['song-form']['author'];
        var txtthumbnail = document.forms['song-form']['thumbnail'];
        var txtlink = document.forms['song-form']['link'];
        if (txtname != null && txtsinger != null){
            var name = txtname.value;
            var singer = txtsinger.value;
            var author = txtauthor.value;
            var thumbnail = txtthumbnail.value;
            var link = txtlink.value;

            var jsSong = {
                name: name,
                singer: singer,
                author: author,
                thumbnail: thumbnail,
                link: link
            }
            var jsonData = JSON.stringify(jsSong);
            postRegisterData(jsonData);
        }
    }
}

function postRegisterData(jsonData) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 201){
            alert("Create song success")
        }
    }
    xmlHttpRequest.open('POST', REGISTER_API, true);
    xmlHttpRequest.setRequestHeader('Content-type','application/json');
    xmlHttpRequest.setRequestHeader('Authorization','Basic ' + localStorage.getItem('token'));
    xmlHttpRequest.send(jsonData);
}