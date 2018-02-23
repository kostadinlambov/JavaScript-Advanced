function wikiParser(selector) {
    let element = document.querySelector(`${selector}`);
    let text = element.textContent;

    let contentDiv = $(selector);
    console.log(contentDiv);

    let regexThreeSingleQuotes = /(''')(.*?)(\1)/g;
    let regexTwoSingleQuotes = /('')(.*?)(\1)/g;
    let regexTextThreeEqualSigns = /(===)(.*?)(\1)/g;
    let regexTextTwoEqualSigns = /(==)(.*?)(\1)/g;
    let regexTextOneEqualSigns = /(=)(.*?)(\1)/g;
    let regexHyperLinkWithText = /(\[\[)([^\]]+)\|([^\]]+)(\]\])/g;
    let regexHyperLink = /(\[\[)([^\[\]]+)(\]\])/g;

    text = text.replace(regexThreeSingleQuotes, replacementFunc);
    text = text.replace(regexTwoSingleQuotes, replacementFunc);
    text = text.replace(regexTextThreeEqualSigns, replacementFunc);
    text = text.replace(regexTextTwoEqualSigns, replacementFunc);
    text = text.replace(regexTextOneEqualSigns, replacementFunc);
    text = text.replace(regexHyperLinkWithText, replacementFunc);
    text = text.replace(regexHyperLink, replacementFunc);

    function replacementFunc(fullMatch, p1, p2, p3) {
        switch (p1) {
            case "'''":
                return `<b>${p2}</b>`;
            case "''":
                return `<i>${p2}</i>`;
            case "===":
                return `<h3>${p2}</h3>`;
            case "==":
                return `<h2>${p2}</h2>`;
            case "=":
                return `<h1>${p2}</h1>`;
            case "[[":
                if (p3 === "]]") {
                    return `<a href="/wiki/${p2}">${p2}</a>`
                } else {
                    return `<a href="/wiki/${p2}">${p3}</a>`
                }
        }
    }

    contentDiv.text('');

    contentDiv.append(text);
    console.log(text)
}
