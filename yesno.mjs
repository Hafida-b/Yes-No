const yesNoAPIurl = "https://yesno.wtf/api";  // API endpoint for yes/no responses
const DEFAULT_DELAY = 200;  // Default delay in milliseconds

function wait(ms, number) {
    console.log("number =", number, "ms =", ms);  // Log the number and delay
    return function(...v) {
        return new Promise(resolve => setTimeout(() => resolve(...v), ms));  // Resolve after delay
    };
}

let yesNoRequestCount = 0;  // To number the yesNo API calls

function yesNo(delay) {
    return yesNoThen(delay);  // Call the yesNoThen function
}

function yesNoThen(delay) {
    delay = Number(delay) || DEFAULT_DELAY;  // Ensure delay is a number
    const number = yesNoRequestCount++;  // Increment the request count
    return fetch(yesNoAPIurl)  // Fetch the API
        .then(wait(Math.random() * delay, number))  // Wait for a random delay
        .then(response => response.json())  // Parse the JSON response
        .then(object => ({...object, number: number}));  // Return the response with the request number
}

function simpleUseThen() {
    yesNo().then(data => console.log("simpleUseThen: yesNo data is :", data));  // Log the data
}

async function simpleUseAwait() {
    const data = await yesNo();  // Await the yesNo response
    console.log("simpleUseAwait: yesNo data is :", data);  // Log the data
}

function imgElement(src, alternate) {
    const img = document.createElement('img');  // Create an image element
    img.setAttribute('src', src);  // Set the source
    img.setAttribute('alt', alternate);  // Set the alternate text
    return img;  // Return the image element
}

// Create a level 2 title (h2).
function h2Element(title) {
    const h2 = document.createElement('h2');  // Create an h2 element
    h2.append(title);  // Append the title
    return h2;  // Return the h2 element
}

function oneYesNoThen() {
    const section = document.createElement('section');  // Create a section
    const article = document.createElement('article');  // Create an article
    section.append(article);  // Append the article to the section
    document.body.append(section);  // Append the section to the body
    yesNo().then(data => {
        const number = h2Element(data.number);  // Create an h2 for the number
        const img = imgElement(data.image, data.answer);  // Create an image element
        const txt = h2Element(data.answer);  // Create an h2 for the answer
        article.append(number, img, txt);  // Append elements to the article
    });
}

async function severalYesNoForClassiqueAwaitFonctionAsynchrone(count) {
    const section = document.createElement('section');  // Create a section
    document.body.append(section);  // Append the section to the body
    for (let i = 0; i < count; i++) {
        const article = document.createElement('article');  // Create an article for each response
        section.appendChild(article);  // Append the article to the section

        article.append(h2Element('' + i));  // Add the order number

        // Function to add the response
        async function addResponse() {
            const response = await yesNo();  // Await the yesNo response
            const img = imgElement(response.image, response.answer);  // Create an image element
            const text = h2Element(response.answer);  // Create an h2 for the answer
            article.append(img, text);  // Append the image and text to the article
        }
        addResponse();  // Call the function to add the response
    }
}

// Uncomment the following lines to run the functions on window load
// window.addEventListener('load', simpleUseThen);
// window.addEventListener('load', simpleUseAwait);
// window.addEventListener('load', oneYesNoThen);
// window.addEventListener("load", () => severalYesNoForClassiqueAwaitFonctionAsynchrone(4));