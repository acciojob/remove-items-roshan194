//your JS code here. If required.
function removeColor() {
  const colorSelect = document.getElementById("colorSelect");
  
  const selectedIndex = colorSelect.selectedIndex;

  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
}
