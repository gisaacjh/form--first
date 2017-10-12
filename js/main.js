var LoginForm = document.forms.login

      LoginForm.addEventListener('submit', function(e) {
        e.preventDefault()

        var username = LoginForm.elements.Nombre.value

        if (username.length > 4) {
          alert("Eres Changolion! (>_<)")
        } else {
          alert("mínimo cuatro caracteres")
        }
        console.log(typeof username.length);
})
