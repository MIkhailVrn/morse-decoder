const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = '';
    let expres = expr
    while (expres.length > 0) {
        let code = '';
        if (expres.substr(0,10) === '**********'){
            result += ' ';
            expres = expres.substr(10, expres.length - 1);
            continue;
        }
        let part = (+expres.substr(0,10)).toString();
        while (part.length > 0) {
            let substrCurrent = part.substr(0,2);
            switch (substrCurrent) {
                case "10" :
                    code += '.';
                    break;
                case "11":
                    code += '-'
                    break;
            }
            part = part.substr(2, part.length - 1);
        }
        result += MORSE_TABLE[code];
        code = '';
        expres = expres.substr(10, expres.length - 1)
    }   
    return result;
}

module.exports = {
    decode
}