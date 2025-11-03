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
	const questionIndex = 5;
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
function InitQuestion6()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 5;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('/gGJU0u02Uc=', 893, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/gGJU0u02Uc=', 893, -1000, 1000),DecodeDecimal('Mkg07TW8SM8=', 893, -1000, 1000),DecodeDecimal('Mkg07TW8SM8=', 893, -1000, 1000));
    question.num = 6;
    question.answers.length = 0;
    question.shortTextQuestion = "Répondre par Vrai ou Faux :";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('/gGJU0u02Uc=', 893, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "S.Q.L. : Structured Query Language ";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('/gGJU0u02Uc=', 895, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "L.D.D. : Langage de Disposition de Données";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('AQnvk7K9mX8=', 897, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "L.M.D. : Langage de Manipulation de Données";
    question.answers.push(answer2);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearBooleanChoice(questionIndex,0);
    ClearBooleanChoice(questionIndex,1);
    ClearBooleanChoice(questionIndex,2);

}






