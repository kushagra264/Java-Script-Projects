// Access DOM elements
const input = document.getElementById("name");
const button = document.getElementById("generate");
const avatarContainer = document.getElementById("avatarContainer");

// Function to get a random bright color
function getRandomColor() {
  const colors = [
    "#ff6b6b", "#1dd1a1", "#54a0ff", "#feca57",
    "#5f27cd", "#ff9ff3", "#48dbfb", "#00d2d3"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Handle button click
button.addEventListener("click", () => {
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  const firstLetter = name.charAt(0).toUpperCase();

  // Create avatar element
  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  avatar.textContent = firstLetter;
  avatar.style.backgroundColor = getRandomColor();

  // ✅ Delete avatar on click
  avatar.addEventListener("click", () => {
    avatar.remove();
  });

  // Append to container
  avatarContainer.appendChild(avatar);

  // Clear input
  input.value = "";
});
