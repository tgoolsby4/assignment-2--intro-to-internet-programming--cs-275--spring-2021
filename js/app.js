window.onload = () => {
    let cbutton = document.querySelector(`#button1`);
    let wbutton = document.querySelector(`#button2`);
    let ricecups = document.querySelector(`#cups`);
    let ricevar;
    let watervar;

    let whitecups = () => {
        let wcups = parseFloat(ricecups.value);
        if (wcups < 0) {
            alert(`Amount cannot be negative`);
        }
        else {
            ricevar = wcups;
            watervar = 2*ricevar;
        }
    };

    let calicups = () => {
        let ccups = parseFloat(ricecups.value);
        if (ccups < 0) {
            alert(`Amount cannot be negative`);
        }
        else {
            ricevar = ccups;
            watervar = 1.6*ricevar;
        }
    };

    let white = () => {
        ricecups.addEventListener(`input`, whitecups);
        let rice = document.querySelector(`#rice`);
        rice.innerHTML = `<b>Making White Rice</b> <br><br>
            1 cup of rice requires 2 cups of water. <br><br>
            Combine ` + ricevar + ` cup of rice with ` + watervar + ` cups of 
            water and 1 Tbsp olive oil. 
            Bring to a boil, then reduce heat to the lowest setting. 
            Cook for about 18 minutes.`;
    };

    let california = () => {
        ricecups.addEventListener(`input`, calicups);
        let rice = document.querySelector(`#rice`);
        rice.innerHTML = `<b>Making Sprouted California Rice</b> <br><br>
            1 cup of rice requires 1.6 cups of water. <br><br>
            For slightly al dente rice: Combine ` + ricevar + ` cups of 
            rice with ` + watervar + ` cups 
            of water or broth and 1 Tbsp olive oil. 
            Bring to a boil and stir once to mix. 
            Reduce heat to low, cover with a tight-fitting lid and cook 
            for 25 minutes. Remove from heat and let stand for 5 minutes. 
            Fluff with a fork and serve. <br><br>
            For softer rice: Increase liquid by 1/2 cup and cook time by 5 minutes.`;
    };

    cbutton.addEventListener(`click`, california);
    wbutton.addEventListener(`click`, white);
};
