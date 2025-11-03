//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

    var listLeft8;
    var listLeftHtml8;
    var listRight8;
    var orderLeft8;
    var orderRight8;



$(document).ready(function ()
{
	const questionIndex = 8;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft8 = new CreateListLeft8();
    listLeftHtml8 = new CreateListLeftHtml8();
    listRight8 = new CreateListRight8();
    orderLeft8 = new ShuffleMatchingOrder(listLeft8.length);
    orderRight8 = new ShuffleMatchingOrder(listRight8.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft8, listLeftHtml8, listRight8, orderLeft8, orderRight8, "idDD8", textSelect, hideLeftDropdown);
    $('#matching8').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft8);
    var maxRightSize = GetMaxSizeRightColumn(listRight8);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft8, "idDD8", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft8, "idDD8", hideLeftDropdown);


});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 8;
    var weight = DecodeNumber('AKJYQgKkC8M=', 836, 0, 99999);
    var numOfAnswers = 4;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AKJYQgKkC8M=', 836, -1000, 1000),DecodeDecimal('GtTkt8eJPhA=', 836, -1000, 1000),DecodeDecimal('GtTkt8eJPhA=', 836, -1000, 1000));
    question.num = 9;
    question.answers.length = 0;
    question.shortTextQuestion = "Sélectionner le rôle de chaque caluse SQL :";
    question.noChoice = false;
    for (i = 0; i < orderLeft8.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD8", i);
        choice[1] = GetSelextedItemRight("idDD8", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft8.length; j++)
        {
            if (listLeft8[j] === choice[0])
            {
                valuation.push(listRight8[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion9()
{
    ClearMatching("idDD8", 0);
    ClearMatching("idDD8", 1);
    ClearMatching("idDD8", 2);
    ClearMatching("idDD8", 3);

}


/* Code generated function */
function CreateListLeft8()
{
    this.length = 4;
    this[0] = unescape(DecodeString("0GOU9YBMKm32gUGSvDB0RA=="));
    this[1] = unescape(DecodeString("zo2Jsu8534fCjWh3+xs+DJnfMvCZ1ay+x6z9lwdrb8D7Pw6zbQ8BzOSaKsOCh5HY1kFI+mkylGRN7wuJ"));
    this[2] = unescape(DecodeString("w2IXR15GrIjtEzXKpBSHx2A1IMI6ZXngxKQgMuttBmVL44klpEjKvw92ybWOnrWs"));
    this[3] = unescape(DecodeString("vf+lYfnWgMHDgVcWXIO7ycR0Dh8icbaq9J/SYdexRSgBqoZm72XDnQ=="));

}

/* Code generated function */
function CreateListRight8()
{
    this.length = 4;
    this[0] = unescape(DecodeString("nQ+ObPW5qRI="));
    this[1] = unescape(DecodeString("LtlKYc1Loik="));
    this[2] = unescape(DecodeString("1NgusGYYd7A="));
    this[3] = unescape(DecodeString("IXl0fQClpvk="));

}

/* Code generated function */
function CreateListLeftHtml8()
{
    this.length = 4;

}





