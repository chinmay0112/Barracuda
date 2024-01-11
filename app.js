document
  .getElementById("signInButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("spinner").style.display = "inline-block";

    setTimeout(function () {
      document.getElementById("spinner").style.display = "none";

      document.getElementById("loginForm").submit();
    }, 2000);
  });
function redirectToInternshala() {
  window.location.href = "https://chinmay0112.github.io/BarracudaLogin/";
}
