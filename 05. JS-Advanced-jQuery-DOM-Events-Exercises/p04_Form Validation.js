function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let submitBtn = $('#submit');
    let checkBox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let isFormValid = true;

    checkBox.on('change', clickCheckbox);
    submitBtn.on('click', clickSubmit);

    let userNameRegex = /^[a-zA-Z0-9]{3,20}$/;
    let passwordRegex = /^\w{5,15}$/;
    let emailRegex = /(.*?)@(.*?)\./;


    function clickCheckbox() {
        if(this.checked){
            $(companyInfo).css('display','block');
        }else{
            $(companyInfo).css('display','');
        }
    }

    function clickSubmit(event) {
        let isValidUserName = userNameRegex.test($(username).val());
        let isValidEmail = emailRegex.test($(email).val());
        let isValidPassword = passwordRegex.test($(password).val());

        changeBorder(isValidUserName, username);
        changeBorder(isValidEmail, email);
        if($(password).val() === $(confirmPassword).val()){
            changeBorder(isValidPassword, password);
            changeBorder(isValidPassword, confirmPassword);
        }else{
            changeBorder(false, password);
            changeBorder(false, confirmPassword);
        }

        if($(checkBox).is(':checked')){
            if($(companyNumber).val() >= 1000 && $(companyNumber).val() <= 9999){
                console.log($(companyNumber).val())
                changeBorder(true, companyNumber);
            }else{
                changeBorder(false, companyNumber);
                console.log($(companyNumber).val())
            }
        }

        if(isFormValid){
            $('#valid').css('display', 'block');
        }else{
            $('#valid').css('display', 'none');
            isFormValid = true;
        }

        event.preventDefault();
    }

    function changeBorder(isTrue, fieldToChange) {
        if(!isTrue){
            $(fieldToChange).css('border-color','red');
            isFormValid = false;
        }else{
            $(fieldToChange).css('border-color','none');
        }
    }
}