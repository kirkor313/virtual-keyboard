//Создаю тело для клавиатуры с дисплееем и полем под клавиши

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
