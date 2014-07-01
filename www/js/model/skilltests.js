"use strict";

//Module pattern http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// Basically like class encapsulation . it improves speed when you pass jQuery in as $ since if you dont then referencing $
// inside the closure will use up time tying to walk up the scope to find where its defined.
var skilltests = (function($) {

    var q1 = new SkillQuestion('When reserved words are used as keys in object literals they must be ______?',
            [new AnswerOption('Prefixed with the @ operator'),
            new AnswerOption('This is not possible in javascript'),
            new AnswerOption('quoted'),
            new AnswerOption('escaped')
        ]
    )

    var q2 = new SkillQuestion('Which of the following inserts a new value into an array?',
        [new AnswerOption('Array.push(arr, x);'),
            new AnswerOption('arr + [arr.length] = x;'),
            new AnswerOption('arr[arr.length - 1] = x;'),
            new AnswerOption('arr.end(); arr.value = x;'),
            new AnswerOption('arr.length + arr = x;')
        ]
    )
    var q3 = new SkillQuestion('What will happen in the console after executing this code? if ("foo") { console.log("foo" === false); console.log("foo" === true); }',
        [new AnswerOption('TypeError : Cannot convert to boolean'),
            new AnswerOption('NaN NaN'),
            new AnswerOption('false true'),
            new AnswerOption('false false')
        ]
    )

    var q4 = new SkillQuestion('Which are the different ways to affect the "this" reference in a function?',
        [new AnswerOption('Only by invoking through the .call() or .apply() method.'),
            new AnswerOption('Only by invoking a function with the "new" keyword'),
            new AnswerOption('Invoking a function with the "new" keyword, invoking through the .call() method, invoking through the .apply() method.'),
            new AnswerOption('Direct attribution, e.g. this = x;')
        ]
    )

    var q1j = new SkillQuestion('Java - When reserved words are used as keys in object literals they must be ______?',
        [new AnswerOption('Prefixed with the @ operator'),
            new AnswerOption('This is not possible in javascript'),
            new AnswerOption('quoted'),
            new AnswerOption('escaped')
        ]
    )

    var q2j = new SkillQuestion('Java - Which of the following inserts a new value into an array?',
        [new AnswerOption('Array.push(arr, x);'),
            new AnswerOption('arr + [arr.length] = x;'),
            new AnswerOption('arr[arr.length - 1] = x;'),
            new AnswerOption('arr.end(); arr.value = x;'),
            new AnswerOption('arr.length + arr = x;')
        ]
    )
    var q3j = new SkillQuestion('Java - What will happen in the console after executing this code? if ("foo") { console.log("foo" === false); console.log("foo" === true); }',
        [new AnswerOption('TypeError : Cannot convert to boolean'),
            new AnswerOption('NaN NaN'),
            new AnswerOption('false true'),
            new AnswerOption('false false')
        ]
    )

    var q4j = new SkillQuestion('Java - Which are the different ways to affect the "this" reference in a function?',
        [new AnswerOption('Only by invoking through the .call() or .apply() method.'),
            new AnswerOption('Only by invoking a function with the "new" keyword'),
            new AnswerOption('Invoking a function with the "new" keyword, invoking through the .call() method, invoking through the .apply() method.'),
            new AnswerOption('Direct attribution, e.g. this = x;')
        ]
    )

    var q1h = new SkillQuestion('HTML - When reserved words are used as keys in object literals they must be ______?',
        [new AnswerOption('Prefixed with the @ operator'),
            new AnswerOption('This is not possible in javascript'),
            new AnswerOption('quoted'),
            new AnswerOption('escaped')
        ]
    )

    var q2h = new SkillQuestion('HTML - Which of the following inserts a new value into an array?',
        [new AnswerOption('Array.push(arr, x);'),
            new AnswerOption('arr + [arr.length] = x;'),
            new AnswerOption('arr[arr.length - 1] = x;'),
            new AnswerOption('arr.end(); arr.value = x;'),
            new AnswerOption('arr.length + arr = x;')
        ]
    )
    var q3h = new SkillQuestion('HTML - What will happen in the console after executing this code? if ("foo") { console.log("foo" === false); console.log("foo" === true); }',
        [new AnswerOption('TypeError : Cannot convert to boolean'),
            new AnswerOption('NaN NaN'),
            new AnswerOption('false true'),
            new AnswerOption('false false')
        ]
    )

    var q4h = new SkillQuestion('HTML - Which are the different ways to affect the "this" reference in a function?',
        [new AnswerOption('Only by invoking through the .call() or .apply() method.'),
            new AnswerOption('Only by invoking a function with the "new" keyword'),
            new AnswerOption('Invoking a function with the "new" keyword, invoking through the .call() method, invoking through the .apply() method.'),
            new AnswerOption('Direct attribution, e.g. this = x;')
        ]
    )

    var q1c = new SkillQuestion('CSS - When reserved words are used as keys in object literals they must be ______?',
        [new AnswerOption('Prefixed with the @ operator'),
            new AnswerOption('This is not possible in javascript'),
            new AnswerOption('quoted'),
            new AnswerOption('escaped')
        ]
    )

    var q2c = new SkillQuestion('CSS - Which of the following inserts a new value into an array?',
        [new AnswerOption('Array.push(arr, x);'),
            new AnswerOption('arr + [arr.length] = x;'),
            new AnswerOption('arr[arr.length - 1] = x;'),
            new AnswerOption('arr.end(); arr.value = x;'),
            new AnswerOption('arr.length + arr = x;')
        ]
    )
    var q3c = new SkillQuestion('CSS - What will happen in the console after executing this code? if ("foo") { console.log("foo" === false); console.log("foo" === true); }',
        [new AnswerOption('TypeError : Cannot convert to boolean'),
            new AnswerOption('NaN NaN'),
            new AnswerOption('false true'),
            new AnswerOption('false false')
        ]
    )

    var q4c = new SkillQuestion('CSS - Which are the different ways to affect the "this" reference in a function?',
        [new AnswerOption('Only by invoking through the .call() or .apply() method.'),
            new AnswerOption('Only by invoking a function with the "new" keyword'),
            new AnswerOption('Invoking a function with the "new" keyword, invoking through the .call() method, invoking through the .apply() method.'),
            new AnswerOption('Direct attribution, e.g. this = x;')
        ]
    )

    var questions = {'JavaScript' : [q1, q2, q3, q4],
        'Java' : [q1j, q2j, q3j, q4j],
        'HTML' : [q1h, q2h, q3h, q4h],
        'CSS' : [q1c, q2c, q3c, q4c]
    }


    return questions;

}(jQuery));
