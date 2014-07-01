function InterviewQuestion(question, points) {
    this.question = question;
    this.answer = '';
    this.points = points;
}
InterviewQuestion.prototype.checkCorrect = function() { return false; }

function RecruiterQuestion(question, description, points) {
    InterviewQuestion.call(this, question, 1);
    this.description = description;
}
RecruiterQuestion.prototype = InterviewQuestion;


function SkillQuestion(question, aoArray) {
    InterviewQuestion.call(this, question, 2);
    this.answerOptions = aoArray;
}
SkillQuestion.prototype = InterviewQuestion;

function AnswerOption(ao) {
    this.answerOption = ao;
}

recruiterQuestions = [
    new RecruiterQuestion('Job Title', 'Enter your understanding of the job title'),
    new RecruiterQuestion('Job Description', 'Enter your understanding of the job description in points'),
    new RecruiterQuestion('Company Culture', 'Enter your understanding of the culture')
    ]

candidateQuestions = {
    q1: 'Why do you want to work for AirBnB? Why are you a good fit for this position? How will you add value in this role?',
    q2: 'Tell us what you’ve been doing most recently and why you’re looking to make a change.',
    q3: 'Can you tell me a little bit about yourself?',
    q4: 'What specific qualifications do you have that make you a good candidate for this position?',
    q5: 'Why are you considering leaving your current position? OR What were the circumstances surrounding your departure from your previous company?',
    q6: 'If we were interested in offering you a position, how soon would you be available to start?',
    q7: 'What is your current salary, and what are your salary expectations?'
}


