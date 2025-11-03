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

    var listLeft4;
    var listLeftHtml4;
    var listRight4;
    var orderLeft4;
    var orderRight4;



$(document).ready(function ()
{
	const questionIndex = 4;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft4 = new CreateListLeft4();
    listLeftHtml4 = new CreateListLeftHtml4();
    listRight4 = new CreateListRight4();
    orderLeft4 = new ShuffleMatchingOrder(listLeft4.length);
    orderRight4 = new ShuffleMatchingOrder(listRight4.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft4, listLeftHtml4, listRight4, orderLeft4, orderRight4, "idDD4", textSelect, hideLeftDropdown);
    $('#matching4').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft4);
    var maxRightSize = GetMaxSizeRightColumn(listRight4);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft4, "idDD4", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft4, "idDD4", hideLeftDropdown);


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
function InitQuestion5()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 4;
    var weight = DecodeNumber('l2zQtN7Sgz4=', 883, 0, 99999);
    var numOfAnswers = 3;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('l2zQtN7Sgz4=', 883, -1000, 1000),DecodeDecimal('ysUIR6DOSiQ=', 883, -1000, 1000),DecodeDecimal('ysUIR6DOSiQ=', 883, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Sélectionner la contrainte d'intégrité correspondante à chaque règle de gestion :";
    question.noChoice = false;
    for (i = 0; i < orderLeft4.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD4", i);
        choice[1] = GetSelextedItemRight("idDD4", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft4.length; j++)
        {
            if (listLeft4[j] === choice[0])
            {
                valuation.push(listRight4[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion5()
{
    ClearMatching("idDD4", 0);
    ClearMatching("idDD4", 1);
    ClearMatching("idDD4", 2);

}


/* Code generated function */
function CreateListLeft4()
{
    this.length = 3;
    this[0] = unescape(DecodeString("bLvVynuRIy7sKPvOYFgpJYa//kWmYgKO8X2VK863APhYMaJ6Vtc3+Y0vQto="));
    this[1] = unescape(DecodeString("+klUN9SRplJgrQyDCL9HXWQC1l8ADfznDGJbvy6vTEauKShL86Y8Hx42xlrwIqRgxspp5aeQUcyYAWS7fpBmXAOn2HYg/UdJ83OLR6cvBW/XamCy"));
    this[2] = unescape(DecodeString("m7mfCxc/2GrPPYObFPmjEaBIB36IjN99kqC2Y1f60oXkVJaHuDdbKuWAeOQf8MFCi2WXm7WixKw="));

}

/* Code generated function */
function CreateListRight4()
{
    this.length = 3;
    this[0] = unescape(DecodeString("auXhITfaDFOI4Q7F587beYZ0xM8IBbAV32jYCwrG7hSiulPg"));
    this[1] = unescape(DecodeString("5LYeJFU+2zOXyg2TS0l9GP4UkssO9JnTU2NyRCCQZePPiAKM4546NQ=="));
    this[2] = unescape(DecodeString("RE4ZL1WZw5gK/XthwNA0IlkDbfVT2LWbpj3SMqzbXghhz2Mx"));

}

/* Code generated function */
function CreateListLeftHtml4()
{
    this.length = 3;

}





