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

const keybordRows = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 13],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 13],
  [16, 192, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16],
  [17, 18, 91, 32, 93, 18, 37, 40, 39]
]

// Добавляю строки и кнопки в тело клавиатуры

function initRowsOfKeybord () {
  const keybordRow = document.createElement("div");
  keybordRow.className = "keybord__row";
  document.querySelector(".keybord__keys").append(keybordRow);
}

for (row of keybordRows) {
  initRowsOfKeybord ()
}

function initKeysOfRow () {
  let row = document.querySelectorAll(".keybord__row");
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < keybordRows.length; j++) {
      if (i == j) {
        key = "";
        for (let k = 0; k < keybordRows[j].length; k++) {
        key += '<div class="keybord__key">' + String.fromCharCode(keybordRows[j][k]) + '</div>';
        row[i].innerHTML = key;
        }
      }
    }
  }
}

initKeysOfRow ()

