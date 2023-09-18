const repeatString = function(string, num) {
    let content = '';
    if (num >= 0) {
        for (x = 0; x < num; x++) {
            content = content + string;
        };
    }
    else {
        content = 'ERROR';
    };
    return (content);
};

// Do not edit below this line
module.exports = repeatString;
