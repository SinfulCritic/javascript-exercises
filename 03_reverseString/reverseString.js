const reverseString = function(string) {
    
    let contentTmp = string.split('');
    let content = [];

    for (let x = 0; x < contentTmp.length; x++) {
        content.unshift(contentTmp[x]);
    }

    let newContent = '';

    for (let x = 0; x < content.length; x++) {
        newContent = newContent + content[x];
        console.log(newContent);
    }
    return(newContent);
};

reverseString('hello there buddy')
// Do not edit below this line
module.exports = reverseString;
