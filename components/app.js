import header from "./header.js"
import main from "./main.js"
import footer from "./footer.js"

function app(){
    let output = `<div>`;
    output+= header();
    output+= main();
    output+= footer();
    output+=`</div>`;
    return output;
}

export default app;