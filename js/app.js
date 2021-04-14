window.onload = () => {
    let cbutton = document.querySelector(`#button1`);
    let wbutton = document.querySelector(`#button2`);

    let white = () => {
        let rice_val = 1;
        let water_val = 2;
        let rice = document.getElementById(`rice`);
        rice.innerHTML = `<b>Making White Rice</b> <br><br>
          1 cup of rice requires 2 cups of water. <br><br>
          How many cups of rice?
          <input type="number"> <br><br>
          Combine ` + rice_val + ` cup of rice with ` + water_val + 
          ` cups of water and 1 Tbsp
          olive oil. Bring to a boil, then reduce heat to the lowest setting. 
          Cook for about 18 minutes.`;
    };

    let california = () => {
        let rice_val = 1.25;
        let water_val = 2;
        let rice = document.getElementById(`rice`);
        rice.innerHTML = `<b>Making Sprouted California Rice</b> <br><br>
          1 cup of rice requires 1.6 cups of water. <br><br>
          How many cups of rice?
          <input type="number"> <br><br>
          For slightly al dente rice:
          Combine ` + rice_val + ` cups of rice with ` + water_val + 
          ` cups of water or broth and
          1 Tbsp olive oil. Bring to a boil and stir once to mix.
          Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.
          Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.
          <br><br>
          For softer rice: Increase liquid by 1/2 cup and cook time by 5 minutes.`;
    };

    cbutton.addEventListener(`click`, california);
    wbutton.addEventListener(`click`, white);
};
