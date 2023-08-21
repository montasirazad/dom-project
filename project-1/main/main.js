const root = document.getElementById('root')
const colorBtn = document.getElementById('color-btn');
const code = document.getElementById('code')

const colorFlipper = () => {
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    //const newColor = `rgb(${red},${green},${blue})`
    return `rgb(${red},${green},${blue})`
};

colorBtn.addEventListener('click', function () {
    const bgColor = colorFlipper();
    code.innerText = bgColor;
    root.style.backgroundColor = bgColor;

})

// setInterval(() => {
//     const bgColor = colorFlipper();
//     root.style.backgroundColor = bgColor;
// },500)