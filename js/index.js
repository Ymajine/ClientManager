document.addEventListener("click", function(event) {
    /* Oeuil pour masquer ou non le mot de passe*/ 
    if (event.target.id === "i-buton") {
        var inputElement = document.getElementById("2"); 
        var iconElement = document.getElementById("i-buton"); 
        if (inputElement.type === "password") {
            console.log("L'élément cliqué a la classe 'fa-eye'.");
            iconElement.className = "fa-solid fa-eye-slash"; 
            inputElement.type = "text"; 
            console.log('Mise à jour effectuée !');
        } else {
            console.log("L'élément cliqué a la classe 'fa-eye-slash'.");
            iconElement.className = "fa-solid fa-eye";
            inputElement.type = "password"; 
            console.log('Mise à jour effectuée !');
        }
    }else if(event.target.className == 'label-input'){
        document.getElementById('remeber-input').click();
    }else if(event.target.className == 'remeber-p'){
        alert("ouverture de l'editeur nouveau mot de passe")
    }else if(event.target.className == 'button-input'){
        console.log(document.getElementsByClassName('input-form')[0].value)
        if(document.getElementsByClassName('input-form')[0].value == '' || document.getElementsByClassName('input-form')[1].value == ''){
            alert('none')
        }else{
            if(document.getElementsByClassName('input-form')[0].value == 'Ymajine' && document.getElementsByClassName('input-form')[0].value == 'mdp123'){
                alert('username bon et mdp bon')
                alert('Username :' + document.getElementsByClassName('input-form')[0].value)
                alert('Password :' + document.getElementsByClassName('input-form')[1].value)
                var caseACocher = document.getElementById('remeber-input');
                if (caseACocher.checked) {
                    alert("La case est coché");
                } else {
                    alert.log("La case n'est pas coché");
                }
            }else{
                alert('username mauvais')
            }
            
        }
    }else if(event.target.className == 'Register-link'){
        alert('open register')
    }
     /* */
});
