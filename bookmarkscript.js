javascript: !function () {
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
        'position' : 0,
        'intervalId' : null
    };
    const modalContainer = document.createElement("div");
            modalContainer.style.display = "flex";
            modalContainer.style.flexWrap = "wrap";
            modalContainer.style.alignContent = "center";
            modalContainer.style.justifyContent = "center";
            modalContainer.style.flex = "1";
            modalContainer.style.fontSize = "60px";
            modalContainer.style.fontFamily = "monospace";

    const modal = document.createElement("div");
            modal.setAttribute("id", "modal");
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

    const legend = document.createElement("div");
        legend.setAttribute("id", "legend");
        legend.style.position = "fixed";
        legend.style.bottom = "20px";
        legend.style.right =  "20px";
        legend.style.minWidth = '200px';
        legend.style.maxWidth = '100%';
        legend.style.height = '200px';
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
            <h4>Venetian Legend</h4>
            <ul style="padding-left:0; list-style-type: none; font-family: monospace">
                <li style="display:flex; justify-content:space-between;"><span>Size</span>Option and + / - </li>
                <li style="display:flex; justify-content:space-between;"><span>Speed</span>Option and < / > </li>
                <li style="display:flex; justify-content:space-between;"><span>Cancel</span>Option and Q</li>
                <li style="display:flex; justify-content:space-between;"><span>Rewind</span>Option and N </li>
                <li style="display:flex; justify-content:space-between;"><span>Forward</span>Option and M </li>
            </ul>`;

    const tagsUsed = Object.keys(config.colorObj).join(',');  
    const tags = document.querySelectorAll(tagsUsed);

    displayNextWord = () => {
      if (config.position < words.length) {
        modalContainer.innerHTML = words[config.position].word;
        modalContainer.style.color = config.colorObj[`${words[config.position].tag.toLowerCase()}`];
        config.colorObj[`${words[config.position].tag}`];
        config.position++;
      } else {
        clearInterval(config.intervalId);
      }
    };

    createModal = () => {
        document.body.appendChild(modal);
        document.body.appendChild(legend);
        setTimeout(() => {
            modal.style.opacity = "1";
            legend.style.opacity = "1";
        }, 100) ;       
    };

   
    let words = [];
    /* Loop through each tag */
    for (let i = 0; i < tags.length; i++) {
        let tagName = tags[i].tagName;
      
        tags[i].addEventListener('mouseover', (e) => handleElementMouseOver(e, tags[i]));    
        tags[i].addEventListener('click', handleElementClick);
        tags[i].addEventListener('mouseout', (e) => handleElementMouseOut(e, tags[i]));

        var textContent = tags[i].textContent;
        var textContentArray = textContent.split(" ");
        for (var j = 0; j < textContentArray.length; j++) {
            words.push({ word: textContentArray[j], tag: tagName });
        }
    }

    const keyMapping = (e) => {
        if (e.altKey) {
            switch(e.code) {
                case 'Equal':
                    handleFontSizeChange('+');
                    break;
                case 'Minus':
                    handleFontSizeChange('-') ;   
                    break;
                case 'Period':
                    handleSpeedChange('+')  ;
                    break;  
                case 'Comma':
                    handleSpeedChange('-') ;   
                    break;
                case 'KeyQ':
                    handleCancel('KeyQ')  ;  
                    break;
                default:
                    return
                }
        }
    } ;

    function handleElementClick(e) {
        if (e.altKey) {
            if(!document.getElementById('modal')){
                createModal();
            }
            if(config.intervalId)
                clearInterval(config.intervalId);
                config.position = 0;
            config.intervalId = setInterval(displayNextWord, config.speed);
        }
    };

    function handleElementMouseOver (e, tag){
        if (e.altKey) {
            tag.style.backgroundColor = config.colorObj[`${tag.tagName.toLowerCase()}`];
            tag.style.color = 'black';
            tag.style.transition = "background-color 0.2s linear";
        }
    };

    function handleElementMouseOut (e, tag) {
        tag.style.backgroundColor = '';
        tag.style.color = '';
    };


    handleFontSizeChange = (size) => {
        config.fontSize = size === '+' ? config.fontSize + 10 : config.fontSize - 10 ;
        modalContainer.style.fontSize = `${config.fontSize}px`;
    };

    handleSpeedChange = (size) => {
        config.speed = size === '+' ? config.speed + 50 : config.speed - 50 ;
        clearInterval(config.intervalId);
        config.intervalId = setInterval(displayNextWord, config.speed);
    };

    handleCancel = () => {
        modalElement = document.getElementById('modal');
        if(modalElement)
            modalElement.remove();
            clearInterval(config.intervalId);
    };
    /* Todo */
    handleWordNavigation = () => {} ;

    document.addEventListener("keypress", keyMapping);
    
}();