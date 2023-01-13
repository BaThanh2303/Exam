
    $('#password, #confirmpassword').on('keyup', function(){

        $('.confirm-message').removeClass('success-message').removeClass('error-message');

        let password=$('#password').val();
        let confirm_password=$('#confirmpassword').val();

        
        if(confirm_password===password)
        {
            $('.confirm-message').text('Password Match!').addClass('success-message');
        }
        else{
            $('.confirm-message').text("Password Doesn't Match!").addClass('error-message');
        }

    });
