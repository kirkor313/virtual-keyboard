//Создаю тело для клавиатуры с дисплееем и полем под клавиши

function initKeybord () {
  const keybord = document.createElement("div");
  const keybordDisplay = document.createElement("div");
  const keybordKeys = document.createElement("div");
  keybord.className = "keybord";
  keybordDisplay.className = "keybord__display";
  keybordKeys.className = "keybord__keys";
  document.body.prepend(keybord);
  keybord.append(keybordDisplay);
  keybord.append(keybordKeys);

}

initKeybord()

