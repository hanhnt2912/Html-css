var REGISTER_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null){
    btnSubmit.onclick = function () {
        var txtfirstname = document.forms['register-form']['firstName'];
        var txtlastname = document.forms['register-form']['lastName'];
        var txtpassword = document.forms['register-form']['password'];
        var txtemail = document.forms['register-form']['email'];
        var txtphone = document.forms['register-form']['phone'];
        var txtavatar = document.forms['register-form']['avatar'];
        var txtaddress = document.forms['register-form']['address'];
        var txtintroduction = document.forms['register-form']['introduction'];
        var txtgender = document.forms['register-form']['gender'];
        var txtbirthday = document.forms['register-form']['birthday'];

        var d = new Date(txtbirthday.value);
        var mydate =d.getFullYear() + '-' +(d.getMonth() +1) + '-' +(d.getDate() <10 ? '0' +d.getDate() : d.getDate());


        if (txtfirstname != null && txtlastname != null){
            var firstName = txtfirstname.value;
            var lastName = txtlastname.value;
            var passWord = txtpassword.value;
            var phone = txtphone.value;
            var avatar = txtavatar.value;
            var address = txtaddress.value;
            var introduction = txtintroduction.value;
            var gender = txtgender.value;
            var email = txtemail.value;
            var birthday = txtbirthday.value;

            alert(gender);
            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: passWord,
                address: address,
                gender: gender,
                avatar: avatar,
                phone: phone,
                email: email,
                birthday: birthday,
                introduction : introduction
            }
            var jsonData = JSON.stringify(jsMember);
            postRegister(jsonData);
        }
    }
}
function postRegister(jsonData) {
    var xmlHttprequest = new XMLHttpRequest();
    xmlHttprequest.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 201){
            var member = JSON.parse(this.responseText);
            alert(member.id +' - ' + member.firstName);
        }
    }
    xmlHttprequest.open('POST', REGISTER_API, true);
    xmlHttprequest.setRequestHeader("Content-type", "application/json");
    xmlHttprequest.send(jsonData);

}