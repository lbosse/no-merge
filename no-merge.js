var buttons = document.getElementsByTagName("button");
console.log(buttons);
var text = "Merge pull request";
var mergeButton;

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].innerText == text) {
    mergeButton = buttons[i];
    break;
  }
}
mergeButton.disabled = true;
