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

    var listLeft10;
    var listLeftHtml10;
    var listRight10;
    var orderLeft10;
    var orderRight10;



$(document).ready(function ()
{
	const questionIndex = 10;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft10 = new CreateListLeft10();
    listLeftHtml10 = new CreateListLeftHtml10();
    listRight10 = new CreateListRight10();
    orderLeft10 = new ShuffleMatchingOrder(listLeft10.length);
    orderRight10 = new ShuffleMatchingOrder(listRight10.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft10, listLeftHtml10, listRight10, orderLeft10, orderRight10, "idDD10", textSelect, hideLeftDropdown);
    $('#matching10').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft10);
    var maxRightSize = GetMaxSizeRightColumn(listRight10);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft10, "idDD10", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft10, "idDD10", hideLeftDropdown);


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
function InitQuestion11()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 10;
    var weight = DecodeNumber('nTHh67Oyz7U=', 1051, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nTHh67Oyz7U=', 1051, -1000, 1000),DecodeDecimal('GZYVqPqWuxM=', 1051, -1000, 1000),DecodeDecimal('GZYVqPqWuxM=', 1051, -1000, 1000));
    question.num = 11;
    question.answers.length = 0;
    question.shortTextQuestion = "Sélectionner la clause SQL à utiliser pour exprimer chaque chaque règle de gestion  :";
    question.noChoice = false;
    for (i = 0; i < orderLeft10.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD10", i);
        choice[1] = GetSelextedItemRight("idDD10", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft10.length; j++)
        {
            if (listLeft10[j] === choice[0])
            {
                valuation.push(listRight10[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion11()
{
    ClearMatching("idDD10", 0);
    ClearMatching("idDD10", 1);
    ClearMatching("idDD10", 2);
    ClearMatching("idDD10", 3);
    ClearMatching("idDD10", 4);

}


/* Code generated function */
function CreateListLeft10()
{
    this.length = 5;
    this[0] = unescape(DecodeString("xnmxHb+zT/JljlfbDF59m2mecBwFsQewpsHDk+mQy6t+mOfpDVtTqu0KGawzwjaSVgdY26AUkoD/vZvYbAAE3g=="));
    this[1] = unescape(DecodeString("/C6morZ1fpHjzRXH8GVBnMGr8367/bKLV+o/vityOXgYNPXYqg3JyqIsw1/Ko4nroEQQKpoXErq8v02RUHAbEAWCj/ZkiL0XOf74k5TGgAU="));
    this[2] = unescape(DecodeString("Yu+IsI/a2vZvXoEMcnblgoTYd3h65GxKrxDdBpvut+k9NrKqNFfACKq2falPBlTuw4RKU13A3tCT8SSn"));
    this[3] = unescape(DecodeString("mXpeP0CUxnRBnEHcjyQoJYglSGVazfivUx6mn5SACuunyvezp4Tt1bN+1EM81ab7bdKQHBgzhYKVjHdYSiOCJFeI9fN84Fd5"));
    this[4] = unescape(DecodeString("dS2xcVVEkfkVn/SZc8OOkBa40YnbGh4+pnPFEXGFu2r2kCb6lwOVHRe2IPNSMCVYFqRs8TqHJl2wNUkXHOw3gA=="));

}

/* Code generated function */
function CreateListRight10()
{
    this.length = 5;
    this[0] = unescape(DecodeString("+ZcAJSBu6DkKNe6o"));
    this[1] = unescape(DecodeString("rVeXyH+gEHI="));
    this[2] = unescape(DecodeString("bV/tA9kt/nM="));
    this[3] = unescape(DecodeString("wt2zgtv3iRA="));
    this[4] = unescape(DecodeString("hSVpq435kDPbN5YM"));

}

/* Code generated function */
function CreateListLeftHtml10()
{
    this.length = 5;

}





