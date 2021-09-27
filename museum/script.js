function minusBasic () {
    let basicAmount = document.querySelector(".basic__amount");
    let basicCount = parseInt(basicAmount.textContent);
    basicCount = basicCount - 1;
    if (basicCount >= 0) {
        basicAmount.innerHTML = basicCount;
    }
}

function plusBasic () {
    let basicAmount = document.querySelector(".basic__amount");
    let basicCount = parseInt(basicAmount.textContent);
    basicCount = basicCount + 1;
    if (basicCount <= 20) {
        basicAmount.innerHTML = basicCount;
    }
}

function minusSenior () {
    let seniorAmount = document.querySelector(".senior__amount");
    let seniorCount = parseInt(seniorAmount.textContent);
    seniorCount = seniorCount - 1;
    if (seniorCount >= 0) {
        seniorAmount.innerHTML = seniorCount;
    }
}

function plusSenior () {
    let seniorAmount = document.querySelector(".senior__amount");
    let seniorCount = parseInt(seniorAmount.textContent);
    seniorCount = seniorCount + 1;
    if (seniorCount <= 20) {
        seniorAmount.innerHTML = seniorCount;
    }
}

const basicAmount = document.querySelector(".basic__amount");
const seniorAmount = document.querySelector(".senior__amount");