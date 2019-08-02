//load mysql pool connection//
const pool = require(/tests/tests);
const pool = require(/company/company);
const pool = require(/quiz/quiz);
const pool = require(/questions/questions);
const pool = require(/addedques/addedques);

//display all test reg//
applicationCache.get('/test', (request,response) => {
    pool.query('SELECT * FROM test',(error,result) => {
        if (error) throw error;
        response.send(result);
    });
});

applicationCache.get('/company', (request,response) => {
    pool.query('SELECT * FROM company',(error,result) => {
        if (error) throw error;
        response.send(result);
    });
});

applicationCache.get('/quiz', (request,response) => {
    pool.query('SELECT * FROM quiz', (error,result) => {
        if(error) throw error;
        response.send(result);
    });
});

applicationCache.get('/questions', (request,response) => {
    pool.query('SELECT * FROM questions', (error,result) => {
        if(error) throw error;
        response.send(result);
    })
})

applicationCache.get('/addedques', (request,response) => {
    pool.query('SELECT * FROM addedques', (error,result) => {
        if(error) throw error;
        response.send(result);
    })
})

//updating on existing company//
applicationCache.get('/tests', (request,response) => {
    pool.query('SELECT * FROM tests',(error,result) => {
        if (error) throw error;
        response.send(result);
    });
});

applicationCache.update('/company/:company', (request, response) => {
    const company = request.params.company;
    pool.query('update company SET ? WHERE company = ?', [request.body, company], (error, result) => {
        if (error) throw error;
        response.send('company updated successfully.');
    });
});

applicationCache.get('/questions/:questions', (request, response) => {
    const questions = request.params.quiz;
    pool.query('update questions SET ? WHERE questions = ?', [request.body, quiz], (error, result) => {
        if (error) throw error;
        response.send('questions updated successfully.');
    });
});
 
applicationCache.get('/quiz/:quiz', (request, response) => {
    const quiz = request.params.quiz;
    pool.query('update quiz SET ? WHERE quiz = ?', [request.body, quiz], (error, result) => {
        if(error) throw error;
        response.send('quiz updated successfully.');
    });
});

applicationCache.get('/addedques/:addedques', (request, response) => {
    const addedques = request.params.addedques;
    pool.query('update addedquiz SET ? WHERE addedques = ?', [request.body, addedques], (error, result) => {
        if(error) throw error;
        response.send('addedquiz updated successfully.');
    })
})

//company registration //
applicationCache.get('/quiz/:quiz', (request, response) => {
    const quiz = request.params.quiz;

    pool.query('DELETE FROM quiz WHERE quiz = ?', quiz_id,(error, result) => {
        if (error) throw error;
        response.send('quiz deleted.');
    });
});

applicationCache.get('/company/:company', (request, response) => {
    const company = request.params.company;

    pool.query('DELETE FROM company WHERE company = ?', company_id,(error, result) => {
        if (error) throw error;
        response.send('company deleted.');
    });
});

applicationCache.get('/questions/:questions', (request, response) => {
    const questions = request.params.questions;

    pool.query('DELETE FROM questions WHERE questions = ?', questions,(error, result) => {
        if (error) throw error;
        response.send('questions deleted.')
    })
})

applicationCache.get('/addedques/:addedques', (request, response) => {
    const addedques = request.params.addedques;

    pool.query('DELETE FROM addedques WHERE addedques = ?', addedques,(error, result) => {
        if (error) throw error;
        response.send('questions deleted.')
    })
})