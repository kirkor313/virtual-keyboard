// Создаю тело для клавиатуры с дисплееем и полем под клавиши

function initKeybord () {
  const keybord = document.createElement("div");
  const keybordDisplay = document.createElement("textarea");
  const keybordKeys = document.createElement("div");
  keybord.className = "keybord";
  keybordDisplay.className = "keybord__display ";
  keybordDisplay.setAttribute("rows","10");
  keybordDisplay.setAttribute("cols","100")
  keybordKeys.className = "keybord__keys";
  document.body.prepend(keybord);
  keybord.append(keybordDisplay);
  keybord.append(keybordKeys);
}

initKeybord();

// Создаю шапку таска

function initTitle () {
  const keybordTitle = document.createElement("p");
  keybordTitle.className = "keybord__title";
  keybordTitle.textContent = "RSS Virtual Keyboard";
  document.querySelector(".keybord").prepend(keybordTitle);
}

initTitle ();

// Создаю массив для ряда клавиш

const keybordKeys = [
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
  ["Tab", "KeyQ", "KeyW", "KeE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight"],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "Enter"],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash","ArrowUp", "ShiftRight"],
  ["ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRigth"]
]

// Добавляю строки и кнопки в нижнем регистре в тело клавиатуры

function initRowsOfKeybord () {
  const keybordRow = document.createElement("div");
  keybordRow.className = "keybord__row";
  document.querySelector(".keybord__keys").append(keybordRow);
}

for (row of keybordKeys) {
  initRowsOfKeybord ()
}

function initKeysOfRow () {
  let row = document.querySelectorAll(".keybord__row");
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < keybordKeys.length; j++) {
      if (i == j) {
        key = "";
        for (let k = 0; k < keybordKeys[j].length; k++) {
        key += "<div class='keybord__key' data ='" + keybordKeys[j][k] + "'>" + String.fromCharCode(keybordrKeys[j][k]) + "</div>";
        row[i].innerHTML = key;
        }
      }
    }
  }
}

initKeysOfRow ()

// Добавляю функцию для определения нажатой клавиши на клавиатруре

function keybordClick () {
  document.addEventListener('keypress',(event) => {
    document.querySelectorAll(".keybord__key").forEach(el =>
      el.classList.remove ("active")
    )
    document.querySelector( ".keybord__key[data='" + event.keyCode + "']").classList.add("active")
  })
}

keybordClick ()
