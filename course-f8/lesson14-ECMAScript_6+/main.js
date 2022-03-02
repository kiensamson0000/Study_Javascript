function edit([first, ...rest], ...values) {
    var inner = values.reduce((result, value) => {
        let string1 = `<span style="color: aqua; text-transform: uppercase">${value}</span>`;
        let string2 = rest.shift();
        return result.concat(string1, string2);   
    }, first);

    var h3 = document.querySelector('h3');
    h3.innerHTML = inner;
}

var js = 'Javascript'
var basic = 'javascript basic'

const html = edit `Làm quen ${js} với khóa học ${basic} !`;





//////////////////////////////////////////////////////////////////////////
function highlight([first, ...strings], ...values) {
    html = values.reduce((result, value) => {
        // Học lập trình <span>javascript</span> tại <span>F8</span>!
        return [...result, `<span>${value}</span>`, strings.shift()]
    }, [first])
    return html.join('');
}


var brand = 'F8'
var course = 'javascript'

const html = hightlight`Học lập trình ${course} tại ${brand}!`;
console.log(html);














































