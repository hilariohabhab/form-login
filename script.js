function validarSenha() {
  const senha = document.getElementById("password").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (senha !== confirmarSenha) {
    alert(
      "As senhas não coincidem. Por favor, digite a mesma senha nos dois campos."
    );
    document.getElementById("password").value = "";
    document.getElementById("confirmarSenha").value = "";
    return false;
  } else if (senha.length < 8) {
    alert("A senha precisa conter mais de 8 caracteres.");
    document.getElementById("password").value = "";
    document.getElementById("confirmarSenha").value = "";
    return false;
  }

  return true;
}

// let btn = document.querySelector(".lnr-eye");
// btn.addEventListener("click", function () {
//   let input = document.querySelector("#password");
//   if (input.getAttribute("type") == "password") {
//     input.setAttribute("type", "text");
//   } else {
//     input.setAttribute("type", "password");
//   }
// });

// let verSenha = document.querySelector("#verSenha");
// verSenha.addEventListener("click", function () {
//   let input = document.querySelector("#confirmarSenha");
//   if (input.getAttribute("type") == "password") {
//     input.setAttribute("type", "text");
//   } else {
//     input.setAttribute("type", "password");
//   }
// });

function alternarVisao(inputId) {
  let input = document.getElementById(inputId);
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
}
