const config = {
    'fontSize' : 60,
    'speed': 500,
    'colorObj' : {
        'h1' : 'red',
        'h2' : 'red',
        'h3' : 'red',
        'h4' : 'red',
        'h5' : 'red',
        'h6' : 'red',
        'p' : 'blue',
        'ul' : 'green'
    },
    'wordPosition' : 0,
    'tagPosition' : 0,
    'intervalId' : null,
    'lock': false,
    'previousWord' : null
}
const modalContainer = document.createElement("div");
        modalContainer.style.display = "flex";
        modalContainer.style.flexWrap = "wrap";
        modalContainer.style.alignContent = "center";
        modalContainer.style.justifyContent = "center";
        modalContainer.style.flex = "1";
        modalContainer.style.fontSize = "60px";
        modalContainer.style.fontFamily = "monospace";
const modalLogo = document.createElement("div");
modalLogo.style.position = "relative";
modalLogo.style.display = "flex";
modalLogo.style.justifyContent   = 'flex-end'

modalLogo.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" style="width:100px" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Foreground" x="0px" y="0px" viewBox="-272 404.2 145.5 32.7" style="enable-background:new -272 404.2 145.5 32.7;" xml:space="preserve">
        <g>
            <path class="st0" style="fill:#F36E21" d="M-267.5,425.5l7.4,1.2l13.4-1.6l5.3-1.4l1.8-0.9l-0.4-12.7c0,0-1.3-1.7-3.4-2.1c-6.4-1.2-21.3-2.3-21.3-2.3   s-3.7-0.5-3.7,2C-268.4,414-267.5,425.5-267.5,425.5z"/>
            <path class="st1" style="fill:#FFFFFF" d="M-260.2,422.3v-3l0.2-9.8l2.6,0.2v1.6c0.5-1.2,1.7-1.6,3-1.5c1.7,0.1,3,0.6,3.6,2.2c0.6-1.3,1.5-1.7,3-1.6   c2.8,0.2,3.6,1.3,3.6,3.9v1.6v5l-1.8,0.3c0-1.7,0-3.4,0-5.1v-1.2c0-1.2-0.2-2.7-1.8-2.7c-0.6,0-1.5,0.1-1.9,0.6   c-0.9,1.3-0.6,7.1-0.7,8.9c-0.7,0.1-1.4,0.1-2.1,0.2c0-1.3,0.2-8.3-0.1-9c-0.4-0.9-1.3-1.2-2.2-1.3c-3.4-0.2-2.7,4.8-2.7,6.8v3.8   h-1.3L-260.2,422.3z"/>
            <path d="M-245.2,435.7c-1.4,0-2.8,0-4.3,0c-1,0-1.6-0.8-1.8-1.6c-0.4-3-0.6-6-0.6-9c2.3-0.2,4.5-0.6,6.6-1v0.1   c0.4,0.9,1.1,1.6,2,2.1c0.6,0.3,2.5,0.6,5.6,0.6c1.3,0,2.4,0.1,3.1,0.1c2,0.1,3.2,0.4,3.7,0.8c0.5,0.5,0.7,1.4,0.7,2.7   c0,1.4-0.3,2.4-0.9,2.9c-0.6,0.5-2.2,0.9-4.8,1.2c-2.5,0.2-4.2,0.1-5.1-0.4s-1.4-1.5-1.4-2.9v-0.5l-3.8,0.2v0.7   C-246.1,433.4-245.8,434.7-245.2,435.7z M-228.2,418.2c1.3,0.3,2.5,0.6,3.7,0.9c0.5,0.2,0.8,0.8,0.8,1.3c0.3,3.7,0.3,7.3-0.1,11   c-0.1,0.6-0.4,1.1-0.8,1.3c-1,0.3-2.1,0.6-3.2,0.9c0.3-0.8,0.5-1.9,0.5-3.4s-0.2-2.6-0.5-3.4c-0.3-0.8-0.9-1.4-1.7-1.8   c-0.4-0.2-1-0.4-1.9-0.5c-0.9-0.1-2.3-0.2-4-0.4c-0.3,0-0.7,0-1.3-0.1c-2.3-0.1-3.8-0.3-4.5-0.7c-0.1-0.1-0.2-0.2-0.3-0.2   c0.5-0.2,0.8-0.8,0.8-1.3c0.1-1.5,0.2-3,0.3-4.4c0.9-0.2,2.3-0.2,4.1-0.1c2.4,0.2,3.9,0.5,4.7,1c0.7,0.4,1.1,1.1,1.1,2v0.2l2.7,0.2   C-227.8,419.7-228,418.9-228.2,418.2z"/>
            <path d="M-263.9,406.9c-0.9,0-1.4,0.8-1.5,1.5c-0.5,5.2-0.5,10.4,0.1,15.5c0.1,0.8,0.7,1.5,1.5,1.5c8.7,0.4,16.2-0.5,22.2-2.3   c0.4-0.2,0.7-0.7,0.8-1.3c0.3-3.8,0.4-7.5,0.1-11.3c-0.1-0.6-0.3-1.2-0.8-1.3C-247.6,407.5-255.1,406.6-263.9,406.9z M-267.8,405.2   c11.7,0,21.1,1.2,28.4,3.3c0.5,0.2,0.9,0.8,0.9,1.5c0.3,4.1,0.3,8.3-0.1,12.4c-0.1,0.6-0.4,1.3-0.9,1.5c-7.2,2.2-16.5,3.5-28.1,3.3   c-1.1-0.1-1.8-0.9-2-1.8c-0.9-6.1-0.9-12.3-0.2-18.4C-269.7,406.1-268.9,405.2-267.8,405.2z"/>
        </g>
        <g>
            <path class="st2" style="fill:#231F20" d="M-206,430.4v-5.3c0-0.4,0-0.7-0.1-0.9c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.3-0.3-0.4-0.3   c-0.2-0.1-0.3-0.1-0.5-0.1c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.3-0.5,0.5s-0.2,0.5-0.3,0.8c-0.1,0.3-0.1,0.6-0.1,0.9v4.8h-2.1   v-5.3c0-0.7-0.1-1.2-0.4-1.5c-0.3-0.3-0.6-0.4-0.9-0.4c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.3-0.5,0.5s-0.2,0.5-0.3,0.8   c-0.1,0.3-0.1,0.6-0.1,0.9v4.8h-2.1V422h2v1.3h0c0.5-1.1,1.3-1.7,2.6-1.7c0.6,0,1.1,0.1,1.4,0.4c0.4,0.3,0.7,0.7,0.9,1.2   c0.3-0.5,0.7-0.9,1.2-1.2c0.5-0.3,1-0.4,1.6-0.4c0.8,0,1.4,0.2,1.9,0.6c0.5,0.4,0.7,1,0.7,1.9v6.3H-206z"/>
            <path class="st2" style="fill:#231F20" d="M-200.3,426.7c0,0.3,0,0.6,0.1,0.9c0.1,0.3,0.2,0.6,0.3,0.8c0.2,0.2,0.4,0.4,0.6,0.6s0.6,0.2,0.9,0.2   c0.5,0,0.9-0.1,1.2-0.4c0.3-0.3,0.5-0.6,0.6-1.1h2.1c-0.1,0.6-0.3,1.1-0.6,1.5s-0.6,0.7-0.9,0.9c-0.3,0.2-0.7,0.4-1.1,0.5   c-0.4,0.1-0.8,0.1-1.2,0.1c-0.7,0-1.4-0.1-1.9-0.4c-0.5-0.2-1-0.6-1.3-1c-0.3-0.4-0.6-0.9-0.8-1.5c-0.2-0.6-0.3-1.1-0.3-1.8   c0-0.6,0.1-1.2,0.3-1.8c0.2-0.6,0.4-1,0.8-1.5c0.3-0.4,0.8-0.8,1.3-1s1.1-0.4,1.8-0.4c0.8,0,1.5,0.1,2,0.4c0.5,0.3,1,0.6,1.3,1.1   c0.3,0.5,0.5,1,0.7,1.6c0.1,0.6,0.2,1.3,0.1,2H-200.3z M-196.3,425.1c-0.1-0.6-0.2-1.1-0.5-1.4c-0.3-0.3-0.7-0.5-1.3-0.5   c-0.7,0-1.2,0.2-1.5,0.5c-0.3,0.3-0.5,0.8-0.6,1.4H-196.3z"/>
            <path class="st2" style="fill:#231F20" d="M-187,430.4v-1.3h0c-0.2,0.5-0.6,0.9-1.1,1.2c-0.5,0.3-1.1,0.4-1.6,0.4c-0.4,0-0.8-0.1-1.2-0.3   c-0.4-0.2-0.8-0.5-1.1-0.9c-0.3-0.4-0.6-0.9-0.8-1.4c-0.2-0.6-0.3-1.2-0.3-2c0-0.8,0.1-1.4,0.3-2c0.2-0.6,0.5-1.1,0.8-1.4   s0.7-0.7,1.1-0.9c0.4-0.2,0.8-0.3,1.2-0.3c0.6,0,1.1,0.1,1.5,0.4c0.4,0.3,0.8,0.7,1.1,1.1h0v-5.7h2.1v13H-187z M-187,426.2   c0-0.3,0-0.6-0.1-1c-0.1-0.4-0.2-0.7-0.3-1c-0.2-0.3-0.4-0.6-0.6-0.8c-0.3-0.2-0.6-0.3-1-0.3c-0.3,0-0.6,0.1-0.8,0.3   c-0.2,0.2-0.4,0.4-0.6,0.7s-0.3,0.6-0.4,1c-0.1,0.4-0.1,0.7-0.1,1.1c0,0.4,0,0.7,0.1,1.1c0.1,0.4,0.2,0.7,0.4,1   c0.2,0.3,0.4,0.5,0.6,0.7c0.2,0.2,0.5,0.3,0.8,0.3c0.4,0,0.7-0.1,1-0.3c0.3-0.2,0.5-0.4,0.6-0.7c0.2-0.3,0.3-0.6,0.3-1   C-187.1,426.8-187,426.5-187,426.2z"/>
            <path class="st2" style="fill:#231F20" d="M-183.1,420.3v-2.2h2.1v2.2H-183.1z M-181,422v8.4h-2.1V422H-181z"/>
            <path class="st2" style="fill:#231F20" d="M-173.7,430.4c-0.1-0.2-0.2-0.4-0.2-0.7c-0.1-0.2-0.1-0.5,0-0.7h0c-0.3,0.5-0.7,1-1.1,1.3   c-0.5,0.3-1,0.5-1.6,0.5c-0.9,0-1.6-0.3-2.2-0.8c-0.5-0.5-0.8-1.2-0.8-2c0-0.7,0.1-1.2,0.4-1.6c0.3-0.4,0.6-0.6,1.1-0.8   c0.4-0.2,0.9-0.3,1.4-0.3c0.5,0,0.9-0.1,1.4-0.1c0.4,0,0.8-0.1,1.1-0.3c0.3-0.1,0.4-0.4,0.4-0.7c0-0.4-0.2-0.7-0.5-0.8   c-0.3-0.2-0.7-0.2-1.2-0.2c-0.2,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.1,0.3-0.1,0.5h-2   c0-0.5,0.1-0.9,0.3-1.3c0.2-0.3,0.5-0.6,0.8-0.8c0.3-0.2,0.7-0.4,1.1-0.4c0.4-0.1,0.9-0.1,1.3-0.1c1.3,0,2.2,0.3,2.9,0.9   c0.6,0.6,0.9,1.6,0.9,2.9v3.4c0,0.5,0,0.8,0.1,1c0.1,0.2,0.2,0.4,0.4,0.6H-173.7z M-175.9,429.2c0.5,0,1-0.1,1.2-0.3   s0.5-0.5,0.6-0.9s0.2-0.7,0.2-1.2c0-0.4,0-0.8,0-1.2h0c-0.1,0.2-0.3,0.4-0.5,0.5c-0.2,0.1-0.4,0.2-0.7,0.3   c-0.3,0.1-0.5,0.1-0.8,0.2s-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.2-0.5,0.4c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.5,0.1,0.8,0.4,1   C-176.7,429.1-176.4,429.2-175.9,429.2z"/>
            <path class="st2" style="fill:#231F20" d="M-166.3,427.9c0,0.3,0.1,0.5,0.2,0.6s0.2,0.3,0.4,0.4c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4,0.1,0.7,0.1   c0.5,0,1-0.1,1.3-0.3c0.3-0.2,0.5-0.4,0.5-0.7c0-0.3-0.1-0.5-0.4-0.6c-0.3-0.1-0.6-0.3-1-0.3c-0.4-0.1-0.8-0.2-1.3-0.3   c-0.5-0.1-0.9-0.2-1.3-0.4c-0.4-0.2-0.7-0.5-1-0.8c-0.3-0.3-0.4-0.8-0.4-1.4c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.5-0.6,0.9-0.8   c0.4-0.2,0.8-0.4,1.2-0.5c0.4-0.1,0.9-0.2,1.3-0.2c0.5,0,0.9,0.1,1.4,0.2c0.4,0.1,0.8,0.3,1.1,0.5c0.3,0.2,0.6,0.5,0.8,0.9   c0.2,0.4,0.3,0.8,0.3,1.3h-2c0-0.4-0.2-0.7-0.5-1c-0.3-0.2-0.7-0.3-1.2-0.3c-0.2,0-0.3,0-0.5,0c-0.2,0-0.4,0.1-0.5,0.2   c-0.2,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.3,0.1,0.5,0.4,0.6c0.3,0.1,0.6,0.2,1,0.3c0.4,0.1,0.8,0.1,1.3,0.2   c0.5,0.1,0.9,0.2,1.3,0.4c0.4,0.2,0.7,0.4,1,0.8c0.3,0.3,0.4,0.8,0.4,1.4c0,0.6-0.1,1-0.4,1.4c-0.3,0.4-0.6,0.7-1,0.9   c-0.4,0.2-0.8,0.4-1.2,0.5c-0.4,0.1-0.8,0.1-1.2,0.1c-0.5,0-1.1-0.1-1.5-0.2c-0.5-0.1-0.9-0.3-1.3-0.5c-0.4-0.2-0.7-0.5-0.9-0.9   c-0.2-0.4-0.4-0.8-0.4-1.3v0H-166.3z"/>
            <path class="st2" style="fill:#231F20" d="M-151.5,422v8.4h-2.1V429h0c-0.3,0.6-0.7,1-1.2,1.3c-0.5,0.3-1.1,0.4-1.7,0.4c-0.4,0-0.8-0.1-1.2-0.2   s-0.6-0.3-0.9-0.6c-0.2-0.3-0.4-0.6-0.6-1c-0.1-0.4-0.2-0.9-0.2-1.5V422h2.1v5.3c0,0.5,0.1,1,0.4,1.3c0.2,0.4,0.7,0.5,1.3,0.5   c0.6,0,1.1-0.2,1.4-0.6c0.3-0.4,0.5-1,0.5-1.7V422H-151.5z"/>
            <path class="st2" style="fill:#231F20" d="M-149.6,420.3v-2.2h2.1v2.2H-149.6z M-147.5,422v8.4h-2.1V422H-147.5z"/>
            <path class="st2" style="fill:#231F20" d="M-143.2,419v3h2v1.7h-2v3.5c0,0.3,0,0.5,0,0.7c0,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.2,0.2,0.3,0.2   c0.1,0,0.3,0.1,0.6,0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0v1.8c-0.3,0-0.5,0-0.8,0c-0.2,0-0.5,0-0.8,0c-0.6,0-1.1-0.1-1.4-0.2   c-0.3-0.1-0.6-0.3-0.8-0.5c-0.2-0.2-0.3-0.6-0.3-1c0-0.4-0.1-0.9-0.1-1.5v-3.6h-1.1V422h1.1v-3H-143.2z"/>
            <path class="st2" style="fill:#231F20" d="M-138.8,426.7c0,0.3,0,0.6,0.1,0.9c0.1,0.3,0.2,0.6,0.3,0.8c0.2,0.2,0.4,0.4,0.6,0.6c0.2,0.2,0.6,0.2,0.9,0.2   c0.5,0,0.9-0.1,1.2-0.4c0.3-0.3,0.5-0.6,0.6-1.1h2.1c-0.1,0.6-0.3,1.1-0.6,1.5c-0.3,0.4-0.6,0.7-0.9,0.9c-0.3,0.2-0.7,0.4-1.1,0.5   c-0.4,0.1-0.8,0.1-1.2,0.1c-0.7,0-1.4-0.1-1.9-0.4c-0.5-0.2-1-0.6-1.3-1c-0.3-0.4-0.6-0.9-0.8-1.5s-0.3-1.1-0.3-1.8   c0-0.6,0.1-1.2,0.3-1.8c0.2-0.6,0.4-1,0.8-1.5c0.3-0.4,0.8-0.8,1.3-1c0.5-0.2,1.1-0.4,1.8-0.4c0.8,0,1.5,0.1,2,0.4   c0.5,0.3,1,0.6,1.3,1.1c0.3,0.5,0.5,1,0.7,1.6c0.1,0.6,0.2,1.3,0.1,2H-138.8z M-134.8,425.1c-0.1-0.6-0.2-1.1-0.5-1.4   c-0.3-0.3-0.7-0.5-1.3-0.5c-0.7,0-1.2,0.2-1.5,0.5c-0.3,0.3-0.5,0.8-0.6,1.4H-134.8z"/>
        </g>
</svg>`
const modal = document.createElement("div");
        modal.setAttribute("id", "modal")
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.minWidth = '600px';
        modal.style.maxWidth = '100%';
        modal.style.height = '400px';
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.background = "white";
        modal.style.padding = "20px";
        modal.style.border = "1px solid black";
        modal.style.zIndex = "999999";
        modal.style.borderRadius = "10px";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.opacity = "0";
        modal.style.transition = "opacity 0.2s linear";
        modal.appendChild(modalContainer);
        modal.appendChild(modalLogo);

const legend = document.createElement("div");
    legend.setAttribute("id", "legend")
    legend.style.position = "fixed";
    legend.style.bottom = "20px";
    legend.style.right =  "20px";
    legend.style.minWidth = '200px';
    legend.style.maxWidth = '100%';
    legend.style.background = "white";
    legend.style.padding = "20px";
    legend.style.border = "1px solid black";
    legend.style.zIndex = "999999";
    legend.style.borderRadius = "10px";
    legend.style.display = "flex";
    legend.style.flexDirection = "column";
    legend.style.opacity = "0";
    legend.style.transition = "opacity 0.2s linear";

    legend.innerHTML = `
        <h4 style="margin-top: 0; margin-bottom:10px">Venetian Legend</h4>
        <ul style="padding-left:0; list-style-type: none; font-family: monospace">
            <li style="display:flex; justify-content:space-between;"><span>Size</span>Option and + / - </li>
            <li style="display:flex; justify-content:space-between;"><span>Speed</span>Option and < / > </li>
            <li style="display:flex; justify-content:space-between;"><span>Cancel</span>Option and Q</li>
            <li style="display:flex; justify-content:space-between;"><span>Rewind</span>Option and N </li>
            <li style="display:flex; justify-content:space-between;"><span>Forward</span>Option and M </li>
        </ul>`

const tagsUsed = Object.keys(config.colorObj).join(',');  
const tags = document.querySelectorAll(tagsUsed);

displayNextWord = () => {
  if (config.wordPosition < words.length) {
    modalContainer.innerHTML = words[config.wordPosition].word;
    modalContainer.style.color = config.colorObj[`${words[config.wordPosition].tag.toLowerCase()}`];
    config.colorObj[`${words[config.wordPosition].tag}`]

    if(config.previousWord && words[config.wordPosition].tagPosition !== config.previousWord.tagPosition){
      //todo work
      
    }
    config.previousWord = words[config.wordPosition]
    config.wordPosition++;  
  } else {
    clearInterval(config.intervalId);
  }
}

createModal = () => {
    document.body.appendChild(modal);
    document.body.appendChild(legend)
    setTimeout(() => {
        modal.style.opacity = "1";
        legend.style.opacity = "1"
    }, 100)        
}


let words = [];
// Loop through each tag
for (let i = 0; i < tags.length; i++) {
    let tagName = tags[i].tagName
  
    tags[i].addEventListener('mouseover', (e) => handleElementMouseOver(e, tags[i]));    
    tags[i].addEventListener('click', (e) => handleElementClick(e, tags[i]))
    tags[i].addEventListener('mouseout', (e) => handleElementMouseOut(e, tags[i]));

    var textContent = tags[i].textContent;
    textContent = tags[i].textContent.replace(/(?:\r\n|\r|\n)/g, " ")
    var textContentArray = textContent.split(" ");
    for (var j = 0; j < textContentArray.length; j++) {
        words.push({ word: textContentArray[j], tag: tagName, tagPosition: i   });
    }
}

const keyMapping = (e) => {
    if (e.altKey) {
        switch(e.code) {
            case 'Equal':
                handleFontSizeChange('+')
                break;
            case 'Minus':
                handleFontSizeChange('-')    
                break;
            case 'Period':
                handleSpeedChange('-')  
                break;  
            case 'Comma':
                handleSpeedChange('+')
                break;
            case 'KeyQ':
                handleCancel('KeyQ')    
                break;
            case 'KeyG':
                handleWordScrubChange('-')    
                break;
            case 'KeyH':
                handleWordScrubChange('+')    
                break;
            default:
                return
            }
    }
} 
const clearTags = () => {
  for (let i = 0; i < tags.length; i++) {
    tags[i].style.backgroundColor = null
    tags[i].style.color = null
    tags[i].style.transition = null

  }
}
function handleElementClick(e, tag) {
    console.log(tag)
    if (e.altKey) {
        if(!document.getElementById('modal')){
            createModal()
            
        }
        clearTags()
        tag.style.backgroundColor = config.colorObj[`${tag.tagName.toLowerCase()}`];
        tag.style.color = 'black';
        tag.style.transition = "background-color 0.2s linear";
        
        if(config.intervalId) {
            clearInterval(config.intervalId)     
          }
 
        let tagPosition = 0
        for (let i = 0; i < tags.length; i++) {
          if(tags[i].textContent === e.target.textContent && tags[i].tagName === e.target.tagName) {
            config.tagPosition = i
          }
        }
        
        config.wordPosition = words.findIndex(word => word.tagPosition === config.tagPosition)
        config.intervalId = setInterval(displayNextWord, config.speed);
    }
}

function handleElementMouseOver (e, tag){
    if (e.altKey) {
        tag.style.backgroundColor = config.colorObj[`${tag.tagName.toLowerCase()}`];
        tag.style.color = 'black';
        tag.style.transition = "background-color 0.2s linear";
    }
}

function handleElementMouseOut (e, tag) {
  if(e.altKey){
    tag.style.backgroundColor = '';
    tag.style.color = '';
  }
}


handleFontSizeChange = (size) => {
    config.fontSize = size === '+' ? config.fontSize + 10 : config.fontSize - 10 
    modalContainer.style.fontSize = `${config.fontSize}px`
}

handleSpeedChange = (size) => {
    config.speed = size === '+' ? config.speed + 50 : config.speed - 50 
    clearInterval(config.intervalId);
    config.intervalId = setInterval(displayNextWord, config.speed);
}

handleWordScrubChange = (direction) => {
    if(!config.lock){
        config.lock = true
        clearInterval(config.intervalId) 
        modal.style.backgroundColor = "red";
        modalContainer.style.color = "white";
        modalContainer.style.fontSize = config.fontSize * 3
        modalContainer.innerHTML = `${Math.round((config.wordPosition / words.length) * 100)}%` ;
        setTimeout(() => {
          modal.style.backgroundColor = "white";
          config.wordPosition = direction === '+' ? config.wordPosition + 5 : config.wordPosition - 5
          config.intervalId = setInterval(displayNextWord, config.speed);
          config.lock = false
        } , 500)
    }    
}

handleCancel = () => {
    modalElement = document.getElementById('modal')
    config.elementSelected = false
    if(modalElement)
        
        modalElement.remove()
        clearInterval(config.intervalId);
} 
document.addEventListener("keypress", keyMapping);