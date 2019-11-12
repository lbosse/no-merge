var buttons = document.getElementsByTagName("button");
console.log(buttons);
var text = "Merge pull request";

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].innerText == text) {
    buttons[i].disabled = true;
    break;
  }
}
