window.onload = () => {
    function white() {
        var rice = document.getElementById(`rice`);
        var html = `<p>Combine 1 cup of rice with 2 cups of water and 1 Tbsp
          olive oil.Bring to a boil, then reduce heat to the lowest setting.
          Cook for about 18 minutes.</p>`;
        rice.innerHTML = html;
    }

    function california() {
        var rice = document.getElementById(`rice`);
        var html = `<p>For slightly al dente rice:
          Combine 1 1/4 cups of rice with 2 cups of water or broth and
          1 Tbsp olive oil.Bring to a boil and stir once to mix.
          Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.
          Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.
          <br>
          For softer rice: Increase liquid by 1/2 cup and cook time by 5 minutes.
          </p>`;
        rice.innerHTML = html;
    }
};
