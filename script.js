const inputField = document.querySelector('input');
const optionsContainer = document.querySelector('.options-container');


inputField.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        console.log("Pressed enter");

        inputField.value.split(',').forEach(x => {
            let div = document.createElement("div");
            //console.log(x);
            div.innerText = x;
            div.classList.add('option-divs');
            optionsContainer.appendChild(div);
        });
        //console.log(optionsContainer.children);
        let i = 0;
        let interval = setInterval(function () {
            optionsContainer.children[i].style.backgroundColor = '#FF8400cc';
            if (i > 0) {
                optionsContainer.children[i - 1].style.backgroundColor = '#FF840099';
            }
            if (i < optionsContainer.children.length - 1) {
                i++;
            } else {
                for (let j = 0; j < optionsContainer.children.length; j++) {
                    optionsContainer.children[j].style.backgroundColor = '#FF840077';
                }
                let rnd = Math.floor(Math.random() * optionsContainer.children.length);
                //console.log(`Random number is ${rnd}`);
                optionsContainer.children[rnd].style.backgroundColor = '#FF8400ff';
                //console.log('clearing interval');
                clearInterval(interval);
            }
        }, 500);
    }
});


// Show decision process to user with animations