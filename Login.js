var LOGIN_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication';
var btnSubmit = document.forms['login-form']['btn-submit'];

if (btnSubmit != null){
    btnSubmit.onclick = function () {
        var txtemail = document.forms['login-form']['email'];
        var txtpassword = document.forms['login-form']['password'];

        if ( txtemail != null && txtpassword != null){
            var Email = txtemail.value;
            var Password = txtpassword.value;

            var jMember ={
                email: Email,
                password: Password,
            }
            var jsonData = JSON.stringify(jMember);
            postLogin(jsonData);
        }
    }
}

function postLogin(jsonData) {
    var xmlHttprequest = new XMLHttpRequest();
    xmlHttprequest.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 201){
            var member = JSON.parse(this.responseText);
            localStorage.setItem('token', member.token);
        }
    }
    xmlHttprequest.open('POST', LOGIN_API, true);
    xmlHttprequest.setRequestHeader("Content-type", "application/json");
    xmlHttprequest.send(jsonData);

}