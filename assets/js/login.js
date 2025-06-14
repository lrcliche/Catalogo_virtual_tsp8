(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// genera un focus en el input del email
$(document).ready(function () {
    $("#user_email").focus();
});

// Muestra el valor de la password
var eye = document.getElementById('eye');
var input = document.getElementById('user_password');
eye.addEventListener('click', function () {
    if (input.type == "password") {
        input.type = "text"
        eye.style.opacity = 0.8
    } else {
        input.type = "password"
        eye.style.opacity = 0.2
    }
})

// function login with Onclick event in index.html
function Login() {
    var email = $("#user_email").val();
    var password = $("#user_password").val();
    var datos = {
        email: email,
        password: password,
    }
    if (email.length == 0 || password.length == 0) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Todos los campos son necesarios!',
            showConfirmButton: false,
            timer: 1800
        })
    } else {
        console.log(datos)
        $.ajax({
            url: 'https://catalogo-virtual-tsp8-backend.onrender.com/api/auth/login',
            Type: 'POST',
            dataType: 'JSON',
            contentType: 'application/JSON; charset=utf-8',
            data: JSON.stringify(datos),
            success: function (respuesta) {
                // console.log(respuesta);
                validateCredentials(respuesta);
            },
            error: function (xhr, status) {
                // console.log(status);
            }
        });
    }
}

// evento click al login mediante id = validate
var login = document.querySelector("#validate")
login.addEventListener("click", (e) => {
    var email = $("#user_email").val();
    var password = $("#user_password").val();
    var datos = {
        email: email,
        password: password,
    }
    if (email.length == 0 || password.length == 0) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Todos los campos son necesarios!',
            showConfirmButton: false,
            timer: 1800
        })
    } else {
        e.preventDefault();
        $.ajax({
            url: 'https://catalogo-virtual-tsp8-backend.onrender.com/api/auth/login',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(datos),
            success: function (respuesta) {
                console.log(respuesta);
                 // Manejar la respuesta exitosa
                console.log('Respuesta del servidor:', respuesta);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login exitoso!',
                    showConfirmButton: false,
                    timer: 1800
                });
            },
            error: function (xhr, status) {
                Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Error en el login',
                        text: 'Por favor, verifica tus credenciales e intenta nuevamente.',
                        showConfirmButton: true
                    });
                // console.log(status);
            }
        });
    }
});

/**
 * Funcion que registra el usuario despues de validar el registro con validateRegister()
 * valida campos completos, crea un objeto JS lo convierte a JSON y si todo es correcto
 * lo envia al path ingresado, dentro de un delay de 1800s en un setTimeout finalizando 
 * con el reload() de la pagina.
 */
function registrar() {
    var name = $("#user_name_register").val()
    var email = $('#user_email_register').val()
    var password = $('#user_password_register').val()
    var repassword = $('#user_confirmPassword_register').val()
    var datos = {
        nombre: name,
        email: email,
        password: password
    }
    var datosPeticion = JSON.stringify(datos)

    if (name.length == 0 || email.length == 0 || password.length == 0 || repassword.length == 0) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Todos los campos son necesarios!',
            showConfirmButton: false,
            timer: 1800
        })
    } else {
        if (password === repassword) {
            Swal.fire({
                title: 'Registrado Correctamente',
                icon: 'success',
                showConfirmButton: false,
            })
            //setTimeout(() => {
            //    $.ajax({
            //        url: 'https://catalogo-virtual-tsp8-backend.onrender.com/api/users/register',
            //        type: 'POST',
            //        dataType: 'json',
            //        contentType: 'application/json; charset=utf-8',
            //        data: datosPeticion,
            //        success: function (respuesta) {
            //            console.log(respuesta)
            //            $("#user_name_register").val("")
            //            $('#user_email_register').val("")
            //            $('#user_password_register').val("")
            //            $('#user_confirmPassword_register').val("")
            //            Swal.fire({
            //                position: 'center',
            //                icon: 'success',
            //                title: 'Registro exitoso!',
            //                showConfirmButton: false,
            //                timer: 1800
            //            });
            //            // $('#modalRegister').modal('hide')
            //        },
            //        error: function (xhr, status) {
            //            // console.log(status)
            //        }
            //    })
            //    window.location.reload();
            //}, 3000);
                            $.ajax({
                    url: 'https://catalogo-virtual-tsp8-backend.onrender.com/api/users/register',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: datosPeticion,
                    success: function (respuesta) {
                        console.log(respuesta)
                        $("#user_name_register").val("")
                        $('#user_email_register').val("")
                        $('#user_password_register').val("")
                        $('#user_confirmPassword_register').val("")
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Registro exitoso!',
                            showConfirmButton: false,
                            timer: 1800
                        });
                        // $('#modalRegister').modal('hide')
                    },
                    error: function (xhr, status) {
                        // console.log(status)
                    }
                })
                //window.location.reload();

        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'La contraseña no coincide!',
                showConfirmButton: false,
                timer: 1800
            })
        }
    }
}

/**
 * Valida si la combinacion de email y password existe en la base de datos.
 * Si es asi, retornara el objeto JSON y lo convierto en JS y creo
 * un objeto sessionStorage que guardara el objeto con el key "user" 
 * sin el pw, finalizando con la redireccion al contenido privado.
 * De lo contrario retornara el objeto null generando un alert.
 * @param {user} request 
 */
function validateCredentials(request) {
    var id = request.id
    if (id == null) {
        // var text = `<h3>Correo no registrado</h3>`;
        // $(".error").html(text)
        // $(".error").show();
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Credenciales Incorrectas',
            confirmButtonColor: '#008F39',
            showConfirmButton: true,
        });
    } else {
        var name = request.name
        let user = {
            id: request.id,
            name: request.name,
            email: request.email
            // password: request.password oculto el password para que no se pueda mostrar por seguridad
        }
        let userJson = JSON.stringify(user)
        sessionStorage.setItem("user", userJson)
        setTimeout(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido ' + name,
                showConfirmButton: false,
            });
            window.location.href = "Category.html";
        }, 1800);

    }
}

/**
 * Esta funcion valida si el email ingresado en el registro existe = true
 * generara el warning mediante un alert. De lo contrario ejecutara la funcion de registrar().
 */
function validateRegister() {
    var email = $('#user_email_register').val()
    $.ajax({
        url: `http://158.101.30.210:8080/api/user/${email}`,
        type: 'POST',
        dataType: 'json',
        success: function (request) {
            if (request == true) {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Este correo ya esta registrado',
                    text: "Debes ingresar uno diferente",
                    confirmButtonColor: '#008F39',
                    showConfirmButton: true,
                });
                $('#user_email_register').val().focus()
            } else {
                registrar();
            }
        },
        error: function (status) {
            // console.log(status)
        }
    });
}