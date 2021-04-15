window.onload = () => {
    let cbutton = document.querySelector(`#button1`);
    let wbutton = document.querySelector(`#button2`);

    let white = () => {
        document.querySelector(`#whiterice`).style.visibility = `visible`;
        document.querySelector(`#calirice`).style.visibility = `hidden`;
    };

    let california = () => {
        document.querySelector(`#calirice`).style.visibility = `visible`;
        document.querySelector(`#whiterice`).style.visibility = `hidden`;
    };

    cbutton.addEventListener(`click`, california);
    wbutton.addEventListener(`click`, white);
};
