const dogData = () => {
    fetch("https://dog.ceo/api/breeds/image/random").then((data) => {
        return data.json();
    }).then((actualdata) => {
        //console.log(actualdata);
        const fetchimg = actualdata.message;
        const img = document.querySelector("img");
        img.setAttribute("src", `${fetchimg}`);

    })
}

const Dogs = () => {
    dogData();

}