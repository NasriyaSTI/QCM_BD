var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
);

/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('U8ZFOoAGelE=', 94, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('U8ZFOoAGelE=', 94, -1000, 1000),DecodeDecimal('9DLLpP4G+Lg=', 94, -1000, 1000),DecodeDecimal('9DLLpP4G+Lg=', 94, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'utilisation des bases de données assure :";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U8ZFOoAGelE=', 96, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "la mise en forme des données";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xos4Bz0K8co=', 98, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "la redondance des données";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RDSbmbpDyhg=', 100, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "la centralisation des données";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TJQas9H/Tic=', 102, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "l'intégrité des données";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('TJQas9H/Tic=', 104, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "la dépendance entre les données et les programmes";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
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
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('AHzYf6uiYNg=', 668, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AHzYf6uiYNg=', 668, -1000, 1000),DecodeDecimal('pbPBsTNuago=', 668, -1000, 1000),DecodeDecimal('pbPBsTNuago=', 668, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = "La clé primaire d'une table doit être :";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2rxtv5K6zJ8=', 670, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "unique";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2rxtv5K6zJ8=', 672, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "de type numérique";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('L1Ld5N12K4A=', 674, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "non NULL";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('L1Ld5N12K4A=', 676, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "composée par une seule colonne";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('SdyPEQKsnts=', 1037, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('SdyPEQKsnts=', 1037, -1000, 1000),DecodeDecimal('fHpAak5DKec=', 1037, -1000, 1000),DecodeDecimal('fHpAak5DKec=', 1037, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = "Une clé étrangère dans une table fille :";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lup6ZPojzbw=', 1039, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "est une clé primaire d'une table mère";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I5mej+Jgb+s=', 1041, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "fournit une relation avec une table mère";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HV20+8QJn5s=', 1043, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "doit avoir le même type que la clé primaire correspondante";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HV20+8QJn5s=', 1045, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "doit être unique";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
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
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('hxcQwqaDwmA=', 621, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hxcQwqaDwmA=', 621, -1000, 1000),DecodeDecimal('iBQIWCPJQtk=', 621, -1000, 1000),DecodeDecimal('iBQIWCPJQtk=', 621, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'opération de projection :";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('x/0SkfZLGAQ=', 623, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "affiche les données à partir d'une seule table";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x/0SkfZLGAQ=', 625, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "affiche les données à partir de plusieurs tables";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ou+JJAwk+e0=', 627, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "affiche un sous ensemble de lignes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vqR9acBjnT8=', 629, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "affiche un sous ensemble de colonnes";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('vqR9acBjnT8=', 631, -1, 1);
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
