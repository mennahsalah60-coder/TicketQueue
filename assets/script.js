const input = document.querySelector("input")
const add = document.querySelector(".add")
const result = document.querySelector(".names")
const serve = document.querySelector(".serve")
const now = document.querySelector(".now")

let count = 1

const coustomers = []
add.addEventListener("click", function () {
    coustomers.push("#" + count + " --- " + input.value)
    result.innerHTML = ""
    for (let i = 0; i < coustomers.length; i++) {
        result.innerHTML += `
                <p class="blue rounded-start-4"></p>
                <p class="name bg-primary-subtle rounded-end-3">${coustomers[i]}</p>`
    }
    input.value = ""
    count++
});

let nowServing = {}
serve.addEventListener("click", function () {
    let served = coustomers.shift()
    nowServing.Now_Servinig = served
    now.innerHTML = ""
    now.innerHTML += `
        <p class="green rounded-start-4"></p>
        <p class="name bg-success-subtle rounded-end-3"><span class="fs-5">Now Servinig : </span>${nowServing.Now_Servinig}</p>`


    result.innerHTML = "";
    for (let i = 0; i < coustomers.length; i++) {
        result.innerHTML += `
            <p class="blue rounded-start-4"></p>
            <p class="name bg-primary-subtle rounded-end-3">${coustomers[i]}</p>
        `;
    }

});

// console.log(coustomers)
// console.log(nowServing)
