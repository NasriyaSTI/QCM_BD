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
	const questionIndex = 1;
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
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('FBLoHxov73A=', 463, 0, 99999);
    var numOfAnswers = 7;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FBLoHxov73A=', 463, -1000, 1000),DecodeDecimal('9cdAyRWb8wU=', 463, -1000, 1000),DecodeDecimal('9cdAyRWb8wU=', 463, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = "Parmi les fonctions d'un Système de Gestion de Bases de Données (S.G.B.D.), on peut citer :";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FBLoHxov73A=', 465, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "La mise en forme des données";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B98A7EtPq98=', 467, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "La mise en page des données";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CVz3icMyTdI=', 305, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "La définition des données";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OfN+bbgxuVg=', 307, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "La manipulation des données";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('yp4GggsKHYI=', 309, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "L'intégrité des données";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('bJOoZePI6Co=', 311, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "La sécurité de fonctionnement";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('PJ3vPTsEBto=', 313, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "la confidentialité";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    return question;

}


/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);
    ClearMultipleAnswerChoice(questionIndex,5);
    ClearMultipleAnswerChoice(questionIndex,6);

}






