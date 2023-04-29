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

const keybordLowerKeys = [
  [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8],
  [9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 13],
  [20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 13],
  [16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 16],
  [17, 18, 91, 32, 93, 18, 37, 40, 39]
]

// Добавляю строки и кнопки в нижнем регистре в тело клавиатуры

function initRowsOfKeybord () {
  const keybordRow = document.createElement("div");
  keybordRow.className = "keybord__row";
  document.querySelector(".keybord__keys").append(keybordRow);
}

for (row of keybordLowerKeys) {
  initRowsOfKeybord ()
}

function initKeysOfRow () {
  let row = document.querySelectorAll(".keybord__row");
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < keybordLowerKeys.length; j++) {
      if (i == j) {
        key = "";
        for (let k = 0; k < keybordLowerKeys[j].length; k++) {
        key += '<div class="keybord__key">' + String.fromCharCode(keybordLowerKeys[j][k]) + '</div>';
        row[i].innerHTML = key;
        }
      }
    }
  }
}

initKeysOfRow ()


document.onkeypress = function(e) {
  console.log(e.charCode)
}