//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

    var listLeft12;
    var listLeftHtml12;
    var listRight12;
    var orderLeft12;
    var orderRight12;



$(document).ready(function ()
{
	const questionIndex = 12;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft12 = new CreateListLeft12();
    listLeftHtml12 = new CreateListLeftHtml12();
    listRight12 = new CreateListRight12();
    orderLeft12 = new ShuffleMatchingOrder(listLeft12.length);
    orderRight12 = new ShuffleMatchingOrder(listRight12.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft12, listLeftHtml12, listRight12, orderLeft12, orderRight12, "idDD12", textSelect, hideLeftDropdown);
    $('#matching12').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft12);
    var maxRightSize = GetMaxSizeRightColumn(listRight12);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft12, "idDD12", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft12, "idDD12", hideLeftDropdown);


});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 12;
    var weight = DecodeNumber('uArNOdra0wQ=', 614, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Sélectionner la clause SQL à utiliser pour exprimer chaque chaque règle de gestion  :";
    question.noChoice = false;
    for (i = 0; i < orderLeft12.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD12", i);
        choice[1] = GetSelextedItemRight("idDD12", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft12.length; j++)
        {
            if (listLeft12[j] === choice[0])
            {
                valuation.push(listRight12[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function CreateListLeft12()
{
    this.length = 5;
    this[0] = unescape(DecodeString("00h8MDWzclHklCGXjPjgrRfAlIyuucYLOltpYC8DH9V8grjjQ7GG0F7YC6wbon898HVX8QypNcPLNKExXu33vA=="));
    this[1] = unescape(DecodeString("ATdhDZL3+VfE3xkN/YKAtWWQDXauTr8xlf/tZaDbdUwu0pDx05QKNeJXcOjVx+1jkPS+H4RLWv2hc4xeasZ8lqNmgBxwM6g7QmmTUPW06VY="));
    this[2] = unescape(DecodeString("hJzMEmQSMRdPFCLHaVkdatBa4Ul9s31w0a+N//kNdq7uaF+HqxQv7T6x0s5MKBua84ZRZlN4rTiM30po"));
    this[3] = unescape(DecodeString("1XKUuufui4Y7F75bYcFKgegZSE1deMUPZftWeeukK6NWVPStrcmec6xo3k/TQ/uGjaxE86hmpsKIBpPq8B4uqYV1+k8CPLcr"));
    this[4] = unescape(DecodeString("weYfuVYoU0wOiXdIaP7W+40eb4/7giHVNgnUyzCzb6zd4Tdr//JkkQzEPxWTPbHxfHoGkFBAA9xFcyLq3aIKPg=="));

}

/* Code generated function */
function CreateListRight12()
{
    this.length = 5;
    this[0] = unescape(DecodeString("HLFmmpg9TxkCZhye"));
    this[1] = unescape(DecodeString("2JvHqY+RbUU="));
    this[2] = unescape(DecodeString("hLdhUhVLUs0="));
    this[3] = unescape(DecodeString("QxxIaWQRcT0="));
    this[4] = unescape(DecodeString("Mczt0chSzGZ9HrP2"));

}

/* Code generated function */
function CreateListLeftHtml12()
{
    this.length = 5;

}





