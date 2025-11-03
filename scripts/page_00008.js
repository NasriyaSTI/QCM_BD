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



$(document).ready(function ()
{
	const questionIndex = 7;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
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
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('XvVHyqna2Mw=', 467, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XvVHyqna2Mw=', 467, -1000, 1000),DecodeDecimal('1Mb/3uVj7jM=', 467, -1000, 1000),DecodeDecimal('1Mb/3uVj7jM=', 467, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'opération de sélection :";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zvXrBbT4TEA=', 469, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "affiche les données à partir d'une seule table";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zvXrBbT4TEA=', 471, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "affiche les données à partir de plusieurs tables";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Jz9ZUbIBFc0=', 473, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "affiche un sous ensemble de colonnes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EqtakTj4zm4=', 475, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "affiche un sous ensemble de lignes";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('E1hOUoJwryI=', 477, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "contient la clause SQL WHERE";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}


/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);

}






