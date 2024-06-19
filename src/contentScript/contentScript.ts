import solve from "./solve";

const imageElement = document.querySelector("img"),
    inputElement: HTMLInputElement | null = document.querySelector("img ~ input#uCрt");


if (imageElement && inputElement) {
    imageElement.onload = () => solve(imageElement, inputElement);

    if (imageElement.complete) solve(imageElement, inputElement);
}