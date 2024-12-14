export const Main = () => {
    const main = document.createElement("main");
    const productSection = document.getElementById("");
    if (productSection) {
        productSection.innerHTML = Products();
    document.body.appendChild(main);
}
}
export default Main;
