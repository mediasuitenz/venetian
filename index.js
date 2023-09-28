const config = {
  fontSize: 60,
  speed: 500,
  colorObj: {
    h1: "#E1341E",
    h2: "#E1341E",
    h3: "#E1341E",
    h4: "#E1341E",
    h5: "#E1341E",
    h6: "#E1341E",
    p: "#175ddc",
  },
  wordPosition: 0,
  tagPosition: 0,
  intervalId: null,
  lock: false,
  previousWord: null,
};
const modalContainer = document.createElement("div");
modalContainer.style.display = "flex";
modalContainer.style.flexWrap = "wrap";
modalContainer.style.alignContent = "center";
modalContainer.style.justifyContent = "center";
modalContainer.style.flex = "1";
modalContainer.style.fontSize = "60px";
modalContainer.style.font = "georgia";
const modalLogo = document.createElement("div");
modalLogo.style.position = "relative";
modalLogo.style.display = "flex";
modalLogo.style.justifyContent = "flex-end";
modalLogo.style.fontFamily = "georgia";

modalLogo.innerHTML = `MadeCurious.`;
const modal = document.createElement("div");
modal.setAttribute("id", "modal");
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.minWidth = "600px";
modal.style.maxWidth = "100%";
modal.style.height = "400px";
modal.style.transform = "translate(-50%, -50%)";
modal.style.background = "white";
modal.style.padding = "20px";
modal.style.border = "2px solid black";
modal.style.zIndex = "999999";
modal.style.display = "flex";
modal.style.flexDirection = "column";
modal.style.opacity = "0";
modal.style.transition = "opacity 0.2s linear";
modal.appendChild(modalContainer);
modal.appendChild(modalLogo);

const legend = document.createElement("div");
legend.setAttribute("id", "legend");
legend.style.position = "fixed";
legend.style.bottom = "20px";
legend.style.right = "20px";
legend.style.minWidth = "200px";
legend.style.maxWidth = "100%";
legend.style.background = "white";
legend.style.padding = "20px";
legend.style.border = "2px solid black";
legend.style.zIndex = "999999";
legend.style.display = "flex";
legend.style.flexDirection = "column";
legend.style.opacity = "0";
legend.style.transition = "opacity 0.2s linear";

legendContent = `
        <p class="toggle" style="text-align:right; margin:0">Hide Modal</p>
        <h6 style="margin-top: 0; margin-bottom:10px">Venetian Legend</h6>
        <p style="max-width: 350px">Hold the <b>Alt</b> key (on mac <b>⌥</b>) and any of the keys below to change settings</p>
        <ul style="padding-left:0; list-style-type: none; font-family: sans-serif">
            <li style="display:flex; justify-content:space-between;"><span>Increase <b>+</b></span> <span>Decrease <b>-</b></span></li>
            <li style="display:flex; justify-content:space-between;"><span>Faster <b><</b> </span> <span>Slower  <b>></b></span></li>
            <li style="display:flex; justify-content:space-between;"><span>Forward (10 words)  <b>M</b></span><span>Rewind (10 words) <b>N</b></span></li>
            <li>Cancel <b>Q</b></li>
        </ul>`;
legend.innerHTML = legendContent
toggle = legend.querySelector(".toggle")
toggle.onclick = toggleLegend
const tagsUsed = Object.keys(config.colorObj).join(",");
const tags = document.querySelectorAll(tagsUsed);

displayNextWord = () => {
  if (config.wordPosition < words.length) {
    modalContainer.innerHTML = words[config.wordPosition].word;
    modalContainer.style.color =
      config.colorObj[`${words[config.wordPosition].tag.toLowerCase()}`];
    config.colorObj[`${words[config.wordPosition].tag}`];
    if (
      config.previousWord &&
      words[config.wordPosition].tagPosition !== config.previousWord.tagPosition
    ) {
    }
    config.previousWord = words[config.wordPosition];
    config.wordPosition++;
  } else {
    clearInterval(config.intervalId);
  }
};

createModal = () => {
  document.body.appendChild(modal);
  document.body.appendChild(legend);
  setTimeout(() => {
    modal.style.opacity = legend.style.opacity = "1";
  }, 100);
};

let words = [];
// Loop through each tag
for (let i = 0; i < tags.length; i++) {
  let tagName = tags[i].tagName;

  tags[i].addEventListener("mouseover", (e) =>
    handleElementMouseOver(e, tags[i])
  );
  tags[i].addEventListener("click", (e) => handleElementClick(e, tags[i]));
  tags[i].addEventListener("mouseout", (e) =>
    handleElementMouseOut(e, tags[i])
  );

  var textContent = tags[i].textContent;
  textContent = tags[i].textContent.replace(/(?:\r\n|\r|\n)/g, " ");
  var textContentArray = textContent.split(" ");
  for (var j = 0; j < textContentArray.length; j++) {
    words.push({ word: textContentArray[j], tag: tagName, tagPosition: i });
  }
}

const keyMapping = (e) => {
  if (e.altKey) {
    switch (e.code) {
      case "Equal":
        handleFontSizeChange("+");
        break;
      case "Esc":
        handleClose("+");
        break;
      case "Minus":
        handleFontSizeChange("-");
        break;
      case "Period":
        handleSpeedChange("-");
        break;
      case "Comma":
        handleSpeedChange("+");
        break;
      case "KeyQ":
        handleCancel("KeyQ");
        break;
      case "KeyG":
        handleWordScrubChange("-");
        break;
      case "KeyH":
        handleWordScrubChange("+");
        break;
      default:
        return;
    }
  }
};
const clearTags = () => {
  for (let i = 0; i < tags.length; i++) {
    tags[i].style.backgroundColor = null;
    tags[i].style.color = null;
    tags[i].style.transition = null;
  }
};
function handleElementClick(e, tag) {
  if (e.altKey) {
    if (!document.getElementById("modal")) {
      createModal();
    }
    clearTags();
    console.log(tag.tagName)
    tag.style.backgroundColor = config.colorObj[`${tag.tagName.toLowerCase()}`];
    tag.style.color = "white";
    tag.style.transition = "background-color 0.2s linear";

    if (config.intervalId) {
      clearInterval(config.intervalId);
    }

    let tagPosition = 0;
    for (let i = 0; i < tags.length; i++) {
      console.log( tags[i].tagName , e.target.tagName)
      if (
        tags[i].textContent === e.target.textContent &&
        tags[i].tagName === tag.tagName
      ) {
        console.log(e.target.textContent, tags[i].textContent, i)
        config.tagPosition = i;
      }
    }

    config.wordPosition = words.findIndex(
      (word) => word.tagPosition === config.tagPosition
    );
    config.intervalId = setInterval(displayNextWord, config.speed);
  }
}

function handleElementMouseOver(e, tag) {
  if (e.altKey) {
    tag.style.backgroundColor = config.colorObj[`${tag.tagName.toLowerCase()}`];
    tag.style.color = "white";
    tag.style.transition = "background-color 0.2s linear";
  }
}

function toggleLegend(e) {
  modalLegend = document.getElementById("legend");
 
  if(e.target.textContent === 'Show Legend'){
    modalLegend.style.padding = "10px";
    modalLegend.innerHTML = legendContent;
  }else{
    modalLegend.style.padding = "5px";
    modalLegend.innerHTML = '<p style="text-align:right; margin:0" class="toggle">Show Legend</p>';
  }

  toggle = modalLegend.querySelector(".toggle")
  toggle.onclick = toggleLegend
}

function handleElementMouseOut(e, tag) {
  if (e.altKey) 
    tag.style.backgroundColor = tag.style.color = "";
}

handleFontSizeChange = (size) => {
  config.fontSize = size === "+" ? config.fontSize + 10 : config.fontSize - 10;
  modalContainer.style.fontSize = `${config.fontSize}px`;
};

handleSpeedChange = (size) => {
  config.speed = size === "+" ? config.speed + 50 : config.speed - 50;
  clearInterval(config.intervalId);
  config.intervalId = setInterval(displayNextWord, config.speed);
};

handleWordScrubChange = (direction) => {
  if (!config.lock) {
    config.lock = true;
    clearInterval(config.intervalId);
    modal.style.backgroundColor = "red";
    modalContainer.style.color = "white";
    modalContainer.style.fontSize = config.fontSize * 3;
    modalContainer.innerHTML = `${Math.round(
      (config.wordPosition / words.length) * 100
    )}%`;
    setTimeout(() => {
      modal.style.backgroundColor = "white";
      config.wordPosition =
        direction === "+" ? config.wordPosition + 5 : config.wordPosition - 5;
      config.intervalId = setInterval(displayNextWord, config.speed);
      config.lock = false;
    }, 500);
  }
};

handleCancel = () => {
  modalElement = document.getElementById("modal");
  config.elementSelected = false;
  if (modalElement) {
    modalElement.remove();
    clearInterval(config.intervalId);
  }
};
document.addEventListener("keypress", keyMapping);
