// buttons
const btn_home = document.querySelector(".btn-home");
const btn_calc = document.querySelector(".btn-calc");
const btn_vhome = document.querySelector(".btn-vhome");
const btn_vform = document.querySelector(".btn-vform");

// pages
const home = document.querySelector(".home");
const form = document.querySelector(".form");
const resusts = document.querySelector(".results");

// inputs
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

// spans of results
const rweight = document.querySelector(".rweight");
const rheight = document.querySelector(".rheight");
const rimc = document.querySelector(".rimc");
const rsit = document.querySelector(".rsit");

// funções
const calcImc = (weight, height) => {
    const imc = weight / height ** 2;

    return imc;
};

const verifySit = (imc) => {
    let res;

    if (imc < 20) {
        res = "Abaixo do Peso";
    } else if (imc <= 25) {
        res = "Normal";
    } else if (imc <= 30) {
        res = "Excesso de Peso";
    } else if (imc <= 35) {
        res = "Obesidade";
    } else {
        res = "Obesidade Mórbida";
    }

    return res;
};

const renderRes = (weight, height, imc, sit) => {
    rweight.innerHTML = weight;
    rheight.innerHTML = height;
    rimc.innerHTML = imc;
    rsit.innerHTML = sit;
};

// events
[weight, height].forEach((action) => {
    action.addEventListener("input", () => {
        if (weight.value.length >= 2 && height.value.length >= 4) {
            btn_calc.removeAttribute("disabled");
            return;
        }

        btn_calc.setAttribute("disabled", "");
    });
});

btn_home.addEventListener("click", () => {
    home.classList.add("hide");
    form.classList.remove("hide");
});

btn_vhome.addEventListener("click", () => {
    home.classList.remove("hide");
    form.classList.add("hide");
});

btn_calc.addEventListener("click", () => {
    const imc = calcImc(weight.value, height.value);
    const fimc = imc.toFixed(2);

    const sit = verifySit(fimc);

    renderRes(weight.value, height.value, fimc, sit);

    form.classList.add("hide");
    resusts.classList.remove("hide");
});

btn_vform.addEventListener("click", () => {
    weight.value = "";
    height.value = "";

    btn_calc.setAttribute("disabled", "");

    form.classList.remove("hide");
    resusts.classList.add("hide");
});
