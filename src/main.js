let bodycol = document.getElementById("bodycol");
let colorBoxes = document.querySelectorAll(".color-box");

let nameInput = document.getElementById("name-input");

nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
});


let alertp = document.getElementById("alert-p");

let enterButton = document.getElementById("enter-button");

let text = document.getElementById("greet-text");

const bgClasses = [
  "bg-gray-700",
  "bg-blue-400",
  "bg-orange-400",
  "bg-red-400",
  "bg-violet-400",
  "bg-indigo-400",
  "bg-yellow-700",
];


enterButton.addEventListener("click", () => {
  let nameValue = nameInput.value.trim();
  if (nameValue === "") {
    alertp.textContent = "Please Enter Your Name";
    alertp.classList.remove("hidden");
    text.classList.add("hidden")
    return
  } else {
    alertp.textContent = "";
    alertp.classList.add("hidden");

    text.innerHTML = `
Hello 
<span class="text-gray-100 ">
  ${nameValue}
</span>, 
Welcome to CyberDude Networks
`;
text.classList.remove("hidden");




    let randomNum = Math.floor(Math.random()*bgClasses.length)
    let randomCol = bgClasses[randomNum]

    bgClasses.forEach(bg => bodycol.classList.remove(bg))

    bodycol.classList.add(randomCol)

  }

  nameInput.addEventListener("input", () => {
    alertp.textContent = "";
    alertp.classList.add("hidden");
  });
});

let themeToggle = document.getElementById("theme-toggle");
let isDark = true;

themeToggle.addEventListener("click", () => {
  if (isDark) {
    document.body.classList.remove("bg-black");
    document.body.classList.add("bg-gray-100");

    themeToggle.innerHTML = `<img src="/icons/mode-dark.svg" class="w-8" alt="dark">`;
    themeToggle.classList.remove("bg-white");
    themeToggle.classList.add("bg-black");

  } else {
    document.body.classList.add("bg-black");
    document.body.classList.remove("bg-gray-100");

    themeToggle.innerHTML = `<img src="/icons/mode-light.svg" class="w-8" alt="light">`;
    themeToggle.classList.remove("bg-black");
    themeToggle.classList.add("bg-white");
  }

  isDark = !isDark;
});

