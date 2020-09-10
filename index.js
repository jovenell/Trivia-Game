$(document).ready(function(){
    let questionNum = 0;
    let correctAnswers = 0;
    let questionData;
    let question;

    $.getJSON("questions.json", function(data){
        questionData = data;

        nextQuestion();
    }).fail(function(){
        console.log("Error");
    });

    $('#AButton').click(function(){
        if(question['answer'] == 'A'){
            correctAnswers++;
        }

        questionAnswered(question['answer']);
    });
    $('#BButton').click(function(){
        if(question['answer'] == 'B'){
            correctAnswers++;
        }

        questionAnswered(question['answer']);
    });
    $('#CButton').click(function(){
        if(question['answer'] == 'C'){
            correctAnswers++;
        }

        questionAnswered(question['answer']);
    });
    $('#DButton').click(function(){
        if(question['answer'] == 'D'){
            correctAnswers++;
        }

        questionAnswered(question['answer']);
    });
    $('#NextButton').click(function(){
        nextQuestion();
    });

    function nextQuestion(){
        $('#Score').text('Score: ' + correctAnswers + ' / ' + questionNum);

        questionNum++;
        $('#QuestionNumber').text('Question: ' + questionNum);
    
        question = questionData[getRandomInt(0, questionData.length)];
    
        $('#Question').text(question['question']);
        $('#AButton').text(capitalizeFirstLetter(question['A']));
        $('#BButton').text(capitalizeFirstLetter(question['B']));
        $('#CButton').text(capitalizeFirstLetter(question['C']));
        $('#DButton').text(capitalizeFirstLetter(question['D']));
    
        $('#NextButton').attr('disabled', true);

        $('#AButton').removeClass('btn-danger');
        $('#BButton').removeClass('btn-danger');
        $('#CButton').removeClass('btn-danger');
        $('#DButton').removeClass('btn-danger');
        $('#AButton').removeClass('btn-success');
        $('#BButton').removeClass('btn-success');
        $('#CButton').removeClass('btn-success');
        $('#DButton').removeClass('btn-success');
        $('#AButton').addClass('btn-primary');
        $('#BButton').addClass('btn-primary');
        $('#CButton').addClass('btn-primary');
        $('#DButton').addClass('btn-primary');
    }
    
    function questionAnswered(answer){
        $('#AButton').removeClass('btn-primary');
        $('#BButton').removeClass('btn-primary');
        $('#CButton').removeClass('btn-primary');
        $('#DButton').removeClass('btn-primary');
    
        $('#AButton').addClass('btn-danger');
        $('#BButton').addClass('btn-danger');
        $('#CButton').addClass('btn-danger');
        $('#DButton').addClass('btn-danger');
    
        if(answer == 'A'){
            $('#AButton').removeClass('btn-danger');
            $('#AButton').addClass('btn-success');
        }
        else if(answer == 'B'){
            $('#BButton').removeClass('btn-danger');
            $('#BButton').addClass('btn-success');
        }
        else if(answer == 'C'){
            $('#CButton').removeClass('btn-danger');
            $('#CButton').addClass('btn-success');
        }
        else if(answer == 'D'){
            $('#DButton').removeClass('btn-danger');
            $('#DButton').addClass('btn-success');
        }
    
        $('#NextButton').removeAttr('disabled');
    }
});

// Utility Functions
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}