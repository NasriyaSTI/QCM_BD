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
	const questionIndex = 9;
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
function InitQuestion10()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 9;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('JhmHEUJjW+k=', 846, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JhmHEUJjW+k=', 846, -1000, 1000),DecodeDecimal('TZiR9LCNd3M=', 846, -1000, 1000),DecodeDecimal('TZiR9LCNd3M=', 846, -1000, 1000));
    question.num = 10;
    question.answers.length = 0;
    question.shortTextQuestion = "Répondre par Vrai si la requête SQL est syntaxiquement valide ou Faux dans le cas contraire :";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('FChlgEI0fU0=', 846, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Select Nom, Pren From Eleve Order By Desc Age;";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('vRv9FNspz0U=', 684, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "Update Eleve Set Age=Age+1, Adresse =\"Sfax\" Where Num = 25;";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('vRv9FNspz0U=', 686, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Drop Age From Eleve;";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('d//SvJgCoRg=', 688, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Alter Table Eleve Add  NumTelParent Varchar(8) Not Null;";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('d//SvJgCoRg=', 690, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Create Table Classe (CodCls Primary Key Varchar (5),   DesCls Not Null Varchar (20)); ";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearBooleanChoice(questionIndex,0);
    ClearBooleanChoice(questionIndex,1);
    ClearBooleanChoice(questionIndex,2);
    ClearBooleanChoice(questionIndex,3);
    ClearBooleanChoice(questionIndex,4);

}






