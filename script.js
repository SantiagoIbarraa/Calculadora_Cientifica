function append(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    let input = document.getElementById("display").value;
    try {
      input = input.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");
      let result = eval(input);
      document.getElementById("display").value = result;
  
      addToHistory(input + " = " + result);
    } catch {
      document.getElementById("display").value = "Error";
    }
  }
  
  function addToHistory(entry) {
    let list = document.getElementById("historyList");
    let item = document.createElement("li");
    item.textContent = entry;
    list.prepend(item);
  }
  
  // Modo claro/oscuro
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("themeToggle");
    icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
  