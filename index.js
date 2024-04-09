const button = document.querySelector("button");
const section = document.getElementsByTagName("section");



button.addEventListener("click", (e) => {
    const secDiv = section[0].getElementsByTagName("div");

    for (let i = 0; i < 15; i++) {
        if (!secDiv[i]) {
            const div = document.createElement("div");
            div.style.border = `20px solid ${randomColor(div)}`;
            secDiv[i - 1].appendChild(div);
            return section[0];
        }
    }
});


function randomColor(div) {
    const colors = [];

    for (let i = 0; i < 10; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(randomColor);
        return colors.toString();
    }
}



