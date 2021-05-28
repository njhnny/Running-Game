const player  = document.getElementById("player");

function jump() {
  if (player.classList != "jump") {
    player.classList.add("jump");

    setTimeout(function () {
      player.classList.remove("jump");
    }, 300);
  }
}

document.addEventListener("keydown", function (event) {
  jump();
});