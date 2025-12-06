const input = document.querySelector("input")
const add = document.querySelector(".add")
const result = document.querySelector(".names")
const serve = document.querySelector(".serve")
const now = document.querySelector(".now")

const nums = []
add.addEventListener("click", function () {
    nums.push(input.value)
    result.innerHTML = ""
    for (let i = 0; i < nums.length; i++) {
        result.innerHTML += `
                <p class="blue rounded-start-4"></p>
                <p class="name bg-primary-subtle rounded-end-3">#---${nums[i]}</p>`
    }
    input.value = ""
});

const nowServing = []
serve.addEventListener("click", function () {
    let served = nums.shift()
    nowServing.push(served)
    now.innerHTML = ""
    for (let x = 0; x < nowServing.length; x++) {
        now.innerHTML += `
            <p class="green rounded-start-4"></p>
            <p class="name bg-success-subtle rounded-end-3"><span class="fs-5">Now Servinig :</span> --- ${nowServing[x]}</p>`
    }

    result.innerHTML = "";
    for (let i = 0; i < nums.length; i++) {
        result.innerHTML += `
            <p class="blue rounded-start-4"></p>
            <p class="name bg-primary-subtle rounded-end-3">${nums[i]}</p>
        `;
        nowServing.shift()
    }

});

// console.log(nums)
// console.log(nowServing)

// string = []
// var countMap = {};
// for (var i = 0; i < string.length; i++) {
//     countMap[string.charAt(i)]++;
// }
// console.log(countMap)