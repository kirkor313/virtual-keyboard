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

// Создаю массивы для ряда клавиш

const keybordKeys = [
  {codeEvent: "Backquote", keyEnUpper: "~", keyEnLower: "`", keyEnCaps: "`", keyEnShiftCaps: "~", keyRuUpper: "[", keyRuLower: "]", keyRuCaps: "]", keyRuShiftCaps: "["},
  {codeEvent: "Digit1", keyEnUpper: "!", keyEnLower: "1", keyEnCaps: "1", keyEnShiftCaps: "!", keyRuUpper: "!", keyRuLower: "1", keyRuCaps: "1", keyRuShiftCaps: "!"},
  {codeEvent: "Digit2", keyEnUpper: "@", keyEnLower: "2", keyEnCaps: "2", keyEnShiftCaps: "@", keyRuUpper: '"', keyRuLower: "2", keyRuCaps: "2", keyRuShiftCaps: '"'},
  {codeEvent: "Digit3", keyEnUpper: "#", keyEnLower: "3", keyEnCaps: "3", keyEnShiftCaps: "#", keyRuUpper: "№", keyRuLower: "3", keyRuCaps: "3", keyRuShiftCaps: "№"},
  {codeEvent: "Digit4", keyEnUpper: "$", keyEnLower: "4", keyEnCaps: "4", keyEnShiftCaps: "$", keyRuUpper: "%", keyRuLower: "4", keyRuCaps: "4", keyRuShiftCaps: "%"},
  {codeEvent: "Digit5", keyEnUpper: "%", keyEnLower: "5", keyEnCaps: "5", keyEnShiftCaps: "%", keyRuUpper: ":", keyRuLower: "5", keyRuCaps: "5", keyRuShiftCaps: ":"},
  {codeEvent: "Digit6", keyEnUpper: "^", keyEnLower: "6", keyEnCaps: "6", keyEnShiftCaps: "^", keyRuUpper: ",", keyRuLower: "6", keyRuCaps: "6", keyRuShiftCaps: ","},
  {codeEvent: "Digit7", keyEnUpper: "&", keyEnLower: "7", keyEnCaps: "7", keyEnShiftCaps: "&", keyRuUpper: ".", keyRuLower: "7", keyRuCaps: "7", keyRuShiftCaps: "."},
  {codeEvent: "Digit8", keyEnUpper: "*", keyEnLower: "8", keyEnCaps: "8", keyEnShiftCaps: "*", keyRuUpper: ";", keyRuLower: "8", keyRuCaps: "8", keyRuShiftCaps: ";"},
  {codeEvent: "Digit9", keyEnUpper: "(", keyEnLower: "9", keyEnCaps: "9", keyEnShiftCaps: "(", keyRuUpper: "(", keyRuLower: "9", keyRuCaps: "9", keyRuShiftCaps: "("},
  {codeEvent: "Digit0", keyEnUpper: ")", keyEnLower: "0", keyEnCaps: "0", keyEnShiftCaps: ")", keyRuUpper: ")", keyRuLower: "0", keyRuCaps: "0", keyRuShiftCaps: ")"},
  {codeEvent: "Minus", keyEnUpper: "_", keyEnLower: "-", keyEnCaps: "-", keyEnShiftCaps: "_", keyRuUpper: "_", keyRuLower: "-", keyRuCaps: "-", keyRuShiftCaps: "_"},
  {codeEvent: "Equal", keyEnUpper: "+", keyEnLower: "=", keyEnCaps: "=", keyEnShiftCaps: "+", keyRuUpper: "+", keyRuLower: "=", keyRuCaps: "=", keyRuShiftCaps: "+"},
  {codeEvent: "Backspace", keyEnUpper: "Backspace", keyEnLower: "Backspace", keyEnCaps: "Backspace", keyEnShiftCaps: "Backspace", keyRuUpper: "Backspace", keyRuLower: "Backspace", keyRuCaps: "Backspace", keyRuShiftCaps: "Backspace"},
  {codeEvent: "Tab", keyEnUpper: "Tab", keyEnLower: "Tab", keyEnCaps: "Tab", keyEnShiftCaps: "Tab", keyRuUpper: "Tab", keyRuLower: "Tab", keyRuCaps: "Tab", keyRuShiftCaps: "Tab"},
  {codeEvent: "KeyQ", keyEnUpper: "Q", keyEnLower: "q", keyEnCaps: "Q", keyEnShiftCaps: "Q", keyRuUpper: "Й", keyRuLower: "й", keyRuCaps: "Й", keyRuShiftCaps: "Й"},
  {codeEvent: "KeyW", keyEnUpper: "W", keyEnLower: "w", keyEnCaps: "W", keyEnShiftCaps: "W", keyRuUpper: "Ц", keyRuLower: "ц", keyRuCaps: "Ц", keyRuShiftCaps: "Ц"},
  {codeEvent: "KeyE", keyEnUpper: "E", keyEnLower: "e", keyEnCaps: "E", keyEnShiftCaps: "E", keyRuUpper: "У", keyRuLower: "у", keyRuCaps: "У", keyRuShiftCaps: "У"},
  {codeEvent: "KeyR", keyEnUpper: "R", keyEnLower: "r", keyEnCaps: "R", keyEnShiftCaps: "R", keyRuUpper: "К", keyRuLower: "к", keyRuCaps: "К", keyRuShiftCaps: "К"},
  {codeEvent: "KeyT", keyEnUpper: "T", keyEnLower: "t", keyEnCaps: "T", keyEnShiftCaps: "T", keyRuUpper: "Е", keyRuLower: "е", keyRuCaps: "Е", keyRuShiftCaps: "Е"},
  {codeEvent: "KeyY", keyEnUpper: "Y", keyEnLower: "y", keyEnCaps: "Y", keyEnShiftCaps: "Y", keyRuUpper: "Н", keyRuLower: "н", keyRuCaps: "Н", keyRuShiftCaps: "Н"},
  {codeEvent: "KeyU", keyEnUpper: "U", keyEnLower: "u", keyEnCaps: "U", keyEnShiftCaps: "U", keyRuUpper: "Г", keyRuLower: "г", keyRuCaps: "Г", keyRuShiftCaps: "Г"},
  {codeEvent: "KeyI", keyEnUpper: "I", keyEnLower: "i", keyEnCaps: "I", keyEnShiftCaps: "I", keyRuUpper: "Ш", keyRuLower: "ш", keyRuCaps: "Ш", keyRuShiftCaps: "Ш"},
  {codeEvent: "KeyO", keyEnUpper: "O", keyEnLower: "o", keyEnCaps: "O", keyEnShiftCaps: "O", keyRuUpper: "Щ", keyRuLower: "щ", keyRuCaps: "Щ", keyRuShiftCaps: "Щ"},
  {codeEvent: "KeyP", keyEnUpper: "P", keyEnLower: "p", keyEnCaps: "P", keyEnShiftCaps: "P", keyRuUpper: "З", keyRuLower: "з", keyRuCaps: "З", keyRuShiftCaps: "З"},
  {codeEvent: "BracketLeft", keyEnUpper: "{", keyEnLower: "[", keyEnCaps: "[", keyEnShiftCaps: "{", keyRuUpper: "Х", keyRuLower: "х", keyRuCaps: "Х", keyRuShiftCaps: "Х"},
  {codeEvent: "BracketRight", keyEnUpper: "}", keyEnLower: "]", keyEnCaps: "]", keyEnShiftCaps: "}", keyRuUpper: "Ъ", keyRuLower: "ъ", keyRuCaps: "Ъ", keyRuShiftCaps: "Ъ"},
  {codeEvent: "Delete", keyEnUpper: "Delete", keyEnLower: "Delete", keyEnCaps: "Delete", keyEnShiftCaps: "Delete", keyRuUpper: "Delete", keyRuLower: "Delete", keyRuCaps: "Delete", keyRuShiftCaps: "Delete"},
  {codeEvent: "CapsLock", keyEnUpper: "CapsLock", keyEnLower: "CapsLock", keyEnCaps: "CapsLock", keyEnShiftCaps: "CapsLock", keyRuUpper: "CapsLock", keyRuLower: "CapsLock", keyRuCaps: "CapsLock", keyRuShiftCaps: "CapsLock"},
  {codeEvent: "KeyA", keyEnUpper: "A", keyEnLower: "a", keyEnCaps: "A", keyEnShiftCaps: "A", keyRuUpper: "Ф", keyRuLower: "ф", keyRuCaps: "Ф", keyRuShiftCaps: "Ф"},
  {codeEvent: "KeyS", keyEnUpper: "S", keyEnLower: "s", keyEnCaps: "S", keyEnShiftCaps: "S", keyRuUpper: "Ы", keyRuLower: "ы", keyRuCaps: "Ы", keyRuShiftCaps: "Ы"},
  {codeEvent: "KeyD", keyEnUpper: "D", keyEnLower: "d", keyEnCaps: "D", keyEnShiftCaps: "D", keyRuUpper: "В", keyRuLower: "в", keyRuCaps: "В", keyRuShiftCaps: "В"},
  {codeEvent: "KeyF", keyEnUpper: "F", keyEnLower: "f", keyEnCaps: "F", keyEnShiftCaps: "F", keyRuUpper: "А", keyRuLower: "а", keyRuCaps: "А", keyRuShiftCaps: "А"},
  {codeEvent: "KeyG", keyEnUpper: "G", keyEnLower: "g", keyEnCaps: "G", keyEnShiftCaps: "G", keyRuUpper: "П", keyRuLower: "п", keyRuCaps: "П", keyRuShiftCaps: "П"},
  {codeEvent: "KeyH", keyEnUpper: "H", keyEnLower: "h", keyEnCaps: "H", keyEnShiftCaps: "H", keyRuUpper: "Р", keyRuLower: "р", keyRuCaps: "Р", keyRuShiftCaps: "Р"},
  {codeEvent: "KeyJ", keyEnUpper: "J", keyEnLower: "j", keyEnCaps: "J", keyEnShiftCaps: "J", keyRuUpper: "О", keyRuLower: "о", keyRuCaps: "О", keyRuShiftCaps: "О"},
  {codeEvent: "KeyK", keyEnUpper: "K", keyEnLower: "k", keyEnCaps: "K", keyEnShiftCaps: "K", keyRuUpper: "Л", keyRuLower: "л", keyRuCaps: "Л", keyRuShiftCaps: "Л"},
  {codeEvent: "KeyL", keyEnUpper: "L", keyEnLower: "l", keyEnCaps: "L", keyEnShiftCaps: "L", keyRuUpper: "Д", keyRuLower: "д", keyRuCaps: "Д", keyRuShiftCaps: "Д"},
  {codeEvent: "Semicolon", keyEnUpper: ":", keyEnLower: ";", keyEnCaps: ";", keyEnShiftCaps: ":", keyRuUpper: "Ж", keyRuLower: "ж", keyRuCaps: "Ж", keyRuShiftCaps: "Ж"},
  {codeEvent: "Quote", keyEnUpper: '"', keyEnLower: "'", keyEnCaps: "'", keyEnShiftCaps: '"', keyRuUpper: "Э", keyRuLower: "э", keyRuCaps: "Э", keyRuShiftCaps: "Э"},
  {codeEvent: "Backslash", keyEnUpper: "|", keyEnLower: "\\", keyEnCaps: "\\", keyEnShiftCaps: "|", keyRuUpper: "Ё", keyRuLower: "ё", keyRuCaps: "Ё", keyRuShiftCaps: "Ё"},
  {codeEvent: "Enter", keyEnUpper: "Enter", keyEnLower: "Enter", keyEnCaps: "Enter", keyEnShiftCaps: "Enter", keyRuUpper: "Enter", keyRuLower: "Enter", keyRuCaps: "Enter", keyRuShiftCaps: "Enter"},
  {codeEvent: "ShiftLeft", keyEnUpper: "Shift", keyEnLower: "Shift", keyEnCaps: "Shift", keyEnShiftCaps: "Shift", keyRuUpper: "Shift", keyRuLower: "Shift", keyRuCaps: "Shift", keyRuShiftCaps: "Shift"},
  {codeEvent: "KeyZ", keyEnUpper: "Z", keyEnLower: "z", keyEnCaps: "Z", keyEnShiftCaps: "Z", keyRuUpper: "Я", keyRuLower: "я", keyRuCaps: "Я", keyRuShiftCaps: "Я"},
  {codeEvent: "KeyX", keyEnUpper: "X", keyEnLower: "x", keyEnCaps: "X", keyEnShiftCaps: "X", keyRuUpper: "Ч", keyRuLower: "ч", keyRuCaps: "Ч", keyRuShiftCaps: "Ч"},
  {codeEvent: "KeyC", keyEnUpper: "C", keyEnLower: "c", keyEnCaps: "C", keyEnShiftCaps: "C", keyRuUpper: "С", keyRuLower: "с", keyRuCaps: "С", keyRuShiftCaps: "С"},
  {codeEvent: "KeyV", keyEnUpper: "V", keyEnLower: "v", keyEnCaps: "V", keyEnShiftCaps: "V", keyRuUpper: "М", keyRuLower: "м", keyRuCaps: "М", keyRuShiftCaps: "М"},
  {codeEvent: "KeyB", keyEnUpper: "B", keyEnLower: "b", keyEnCaps: "B", keyEnShiftCaps: "B", keyRuUpper: "И", keyRuLower: "и", keyRuCaps: "И", keyRuShiftCaps: "И"},
  {codeEvent: "KeyN", keyEnUpper: "N", keyEnLower: "n", keyEnCaps: "N", keyEnShiftCaps: "N", keyRuUpper: "Т", keyRuLower: "т", keyRuCaps: "Т", keyRuShiftCaps: "Т"},
  {codeEvent: "KeyM", keyEnUpper: "M", keyEnLower: "m", keyEnCaps: "M", keyEnShiftCaps: "M", keyRuUpper: "Ь", keyRuLower: "ь", keyRuCaps: "Ь", keyRuShiftCaps: "Ь"},
  {codeEvent: "Comma", keyEnUpper: "<", keyEnLower: ",", keyEnCaps: ",", keyEnShiftCaps: "<", keyRuUpper: "Б", keyRuLower: "б", keyRuCaps: "Б", keyRuShiftCaps: "Б"},
  {codeEvent: "Period", keyEnUpper: ">", keyEnLower: ".", keyEnCaps: ".", keyEnShiftCaps: ">", keyRuUpper: "Ю", keyRuLower: "ю", keyRuCaps: "Ю", keyRuShiftCaps: "Ю"},
  {codeEvent: "Slash", keyEnUpper: "?", keyEnLower: "/", keyEnCaps: "/", keyEnShiftCaps: "?", keyRuUpper: "?", keyRuLower: "/", keyRuCaps: "/", keyRuShiftCaps: "?"},
  {codeEvent: "ArrowUp", keyEnUpper: "▲", keyEnLower: "▲", keyEnCaps: "▲", keyEnShiftCaps: "▲", keyRuUpper: "▲", keyRuLower: "▲", keyRuCaps: "▲", keyRuShiftCaps: "▲"},
  {codeEvent: "ShiftRight", keyEnUpper: "Shift", keyEnLower: "Shift", keyEnCaps: "Shift", keyEnShiftCaps: "Shift", keyRuUpper: "Shift", keyRuLower: "Shift", keyRuCaps: "Shift", keyRuShiftCaps: "Shift"},
  {codeEvent: "ControlLeft", keyEnUpper: "Ctrl", keyEnLower: "Ctrl", keyEnCaps: "Ctrl", keyEnShiftCaps: "Ctrl", keyRuUpper: "Ctrl", keyRuLower: "Ctrl", keyRuCaps: "Ctrl", keyRuShiftCaps: "Ctrl"},
  {codeEvent: "AltLeft", keyEnUpper: "Alt", keyEnLower: "Alt", keyEnCaps: "Alt", keyEnShiftCaps: "Alt", keyRuUpper: "Alt", keyRuLower: "Alt", keyRuCaps: "Alt", keyRuShiftCaps: "Alt"},
  {codeEvent: "MetaLeft", keyEnUpper: "Cmd", keyEnLower: "Cmd", keyEnCaps: "Cmd", keyEnShiftCaps: "Cmd", keyRuUpper: "Cmd", keyRuLower: "Cmd", keyRuCaps: "Cmd", keyRuShiftCaps: "Cmd"},
  {codeEvent: "Space", keyEnUpper: " ", keyEnLower: " ", keyEnCaps: " ", keyEnShiftCaps: " ", keyRuUpper: " ", keyRuLower: " ", keyRuCaps: " ", keyRuShiftCaps: " "},
  {codeEvent: "MetaRight", keyEnUpper: "Cmd", keyEnLower: "Cmd", keyEnCaps: "Cmd", keyEnShiftCaps: "Cmd", keyRuUpper: "Cmd", keyRuLower: "Cmd", keyRuCaps: "Cmd", keyRuShiftCaps: "Cmd"},
  {codeEvent: "AltRight", keyEnUpper: "Alt", keyEnLower: "Alt", keyEnCaps: "Alt", keyEnShiftCaps: "Alt", keyRuUpper: "Alt", keyRuLower: "Alt", keyRuCaps: "Alt", keyRuShiftCaps: "Alt"},
  {codeEvent: "ArrowLeft", keyEnUpper: "◄", keyEnLower: "◄", keyEnCaps: "◄", keyEnShiftCaps: "◄", keyRuUpper: "◄", keyRuLower: "◄", keyRuCaps: "◄", keyRuShiftCaps: "◄"},
  {codeEvent: "ArrowDown", keyEnUpper: "▼", keyEnLower: "▼", keyEnCaps: "▼", keyEnShiftCaps: "▼", keyRuUpper: "▼", keyRuLower: "▼", keyRuCaps: "▼", keyRuShiftCaps: "▼"},
  {codeEvent: "ArrowRight", keyEnUpper: "►", keyEnLower: "►", keyEnCaps: "►", keyEnShiftCaps: "►", keyRuUpper: "►", keyRuLower: "►", keyRuCaps: "►", keyRuShiftCaps: "►"}
]

// Добавляю кнопки в тело клавиатуры

function initKeysOfKeybord () {
  const keybordKey = document.createElement("div");
  keybordKey.className = "keybord__key";
  document.querySelector(".keybord__keys").append(keybordKey);
}

for (codeEvent of keybordKeys) {
  initKeysOfKeybord ()
}

// Добавляю функцию вставки букв и симбволов английской раскладки

function setKeyEn () {
  document.querySelectorAll(".key-en_upper").forEach((el,i) => {
    el.textContent = `${keybordKeys[i].keyEnUpper}`
  })
  document.querySelectorAll(".key-en_lower").forEach((el,i) => {
    el.textContent = `${keybordKeys[i].keyEnLower}`
  })
  document.querySelectorAll(".key-en_caps").forEach((el,i) => {
    el.textContent = `${keybordKeys[i].keyEnCaps}`
  })
  document.querySelectorAll(".key-en_shift-caps").forEach((el,i) => {
    el.textContent = `${keybordKeys[i].keyEnShiftCaps}`
  })
}

// Добавляю функцию вставки букв и симбволов русской раскладки

function setKeyRU () {
  document.querySelectorAll(".key-ru_upper").forEach((el,i) => {
    el.textContent = `${keybordKeys[i].keyRuUpper}`
  })
  document.querySelectorAll(".key-ru_lower").forEach((el,i) => {
    el.textContent = `${keybordKeys[i].keyRuLower}`
  })
  document.querySelectorAll(".key-ru_caps").forEach((el,i) => {
    el.textContent = `${keybordKeys[i].keyRuCaps}`
  })
  document.querySelectorAll(".key-ru_shift-caps").forEach((el,i) => {
    el.textContent = `${keybordKeys[i].keyRuShiftCaps}`
  })
}

// Добавляю функцию общей сборки символов

function setKeys() {
  const keys = document.querySelectorAll(".keybord__key");
  keys.forEach((el,i) => {
    const
      keyEnUpper = document.createElement("span"),
      keyEnLower = document.createElement("span"),
      keyEnCaps = document.createElement("span"),
      keyEnShiftCaps = document.createElement("span"),
      keyRuUpper = document.createElement("span"),
      keyRuLower = document.createElement("span"),
      keyRuCaps = document.createElement("span"),
      keyRuShiftCaps = document.createElement("span");
      keyEnUpper.className = "key key-en key-en_upper hidden"
      keyEnLower.className = "key key-en key-en_lower ";
      keyEnCaps.className = "key key-en key-en_caps hidden";
      keyEnShiftCaps.className = "key key-en key-en_shift-caps hidden";
      keyRuUpper.className = "key key-ru key-ru_upper hidden";
      keyRuLower.className = "key key-ru key-ru_lower hidden";
      keyRuCaps.className = "key key-ru key-ru_caps hidden";
      keyRuShiftCaps.className = "key key-ru key-ru_shift-caps hidden";
    el.append(
      keyEnUpper,
      keyEnLower,
      keyEnCaps,
      keyEnShiftCaps,
      keyRuUpper,
      keyRuLower,
      keyRuCaps,
      keyRuShiftCaps
      );
    el.setAttribute("data", keybordKeys[i].codeEvent);
    setKeyEn ();
    setKeyRU ()
  })
}

setKeys()

// Добавляю функцию для определения нажатой клавиши на клавиатруре

function keybordKeyDown () {
  document.addEventListener("keydown",(event) => {
    document.querySelector( ".keybord__key[data='" + event.code + "']").classList.add("active");
    inputKey ()
  })
}

keybordKeyDown ()

function keybordKeyUp () {
  document.addEventListener("keyup",(event) => {
    document.querySelector( ".keybord__key[data='" + event.code + "']").classList.remove("active")
  })
}

keybordKeyUp()

// Добавляю функцию для определения нажатой клавиши с помощью мышки

function mouseClickDown () {
  document.querySelectorAll(".keybord__key").forEach(el => {
    el.addEventListener("mousedown", (event) => {
      document.querySelector( ".keybord__key[data='" + event.target.closest(".keybord__key").getAttribute("data") + "']").classList.add("active")
      inputKey ()
    })
  })
}

mouseClickDown ()

function mouseClickUp () {
  document.querySelectorAll(".keybord__key").forEach(el => {
    el.addEventListener("mouseup", (event) => {
      document.querySelector( ".keybord__key[data='" + event.target.closest(".keybord__key").getAttribute("data") + "']").classList.remove("active")
    })
    el.addEventListener("mouseout", (event) => {
      document.querySelector( ".keybord__key[data='" + event.target.closest(".keybord__key").getAttribute("data") + "']").classList.remove("active")
    })
  })
}

mouseClickUp ()

// Добавляю функию вывода символов в textarea

function inputKey () {
  const textArea = document.querySelector(".keybord__display");
  const activeSetKeys = document.querySelector(".active");
  let activeKey;
  for(let i = 0; i < activeSetKeys.childNodes.length; i++) {
    if(!activeSetKeys.childNodes[i].classList.contains("hidden")) {
      activeKey = activeSetKeys.childNodes[i]
    }
  }
  const value = activeKey.textContent;
  textArea.value += `${value}`
}
