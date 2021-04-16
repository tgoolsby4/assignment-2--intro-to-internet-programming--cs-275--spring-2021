window.onload = () => {
    let cbutton = document.querySelector(`#button1`);
    let wbutton = document.querySelector(`#button2`);
    let ricecups = document.querySelector(`#cups`);

    let white = () => {
        let rice = document.querySelector(`#rice`);
        rice.innerHTML = `<b>Making White Rice</b> <br><br>
            Combine <output id="whitericevar">1</output> cup of rice with 
            <output id="whitewatervar">2</output> 
            cups of water and 1 Tbsp olive oil. 
            Bring to a boil, then reduce heat to the lowest setting. 
            Cook for about 18 minutes.`;
        ricecups.addEventListener(`input`, function() {
            let wcups = parseFloat(ricecups.value);
            if (wcups < 0) {
                alert(`Amount cannot be negative`);
            }
            else {
                let wro = document.querySelector(`#whitericevar`);
                let wwo = document.querySelector(`#whitewatervar`);
                wro.value = wcups;
                wwo.value = wcups*2;
            }
        });
    };

    let california = () => {
        let rice = document.querySelector(`#rice`);
        rice.innerHTML = `<b>Making Sprouted California Rice</b> <br><br>
            For slightly al dente rice: Combine 
            <output id="caliricevar">1.25</output> 
            cups of rice with <output id="caliwatervar">2</output> cups 
            of water or broth and 1 Tbsp olive oil. 
            Bring to a boil and stir once to mix. 
            Reduce heat to low, cover with a tight-fitting lid and cook 
            for 25 minutes. Remove from heat and let stand for 5 minutes. 
            Fluff with a fork and serve. <br><br>
            For softer rice: Increase liquid by 1/2 cup and cook time by 5 minutes.`;
        ricecups.addEventListener(`input`, function() {
            let ccups = parseFloat(ricecups.value);
            if (ccups < 0) {
                alert(`Amount cannot be negative`);
            }
            else {
                let cro = document.querySelector(`#caliricevar`);
                let cwo = document.querySelector(`#caliwatervar`);
                cro.value = ccups;
                cwo.value = Math.round((ccups*1.6)*10)/10;
            }
        });
    };

    cbutton.addEventListener(`click`, california);
    wbutton.addEventListener(`click`, white);
};
