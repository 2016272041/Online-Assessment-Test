var express = require('express')
var app = express()

// SHOW LIST OF CREATORS //
app.get('/src/app/questions/questions', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM questions ORDER BY question1 DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
				req.flash('error', err) 
				res.render('/src/app/questions/questions', {
					title: 'Questions List', 
					data: ''
				})
			} else {
				// render to views/src/app/questions/questions
				res.render('/src/app/questions/questions', {
					title: 'Questions List', 
					data: rows
				})
			}
		})
	})
})

// SHOW ADD TESTS FORM
app.get('/src/app/questions/questions', function(req, res, next){	
	// render to /src/app/questions/questions.component.html //
	res.render('/src/app/questions/questions.component.html', {
		title: 'CREATE NEW QUESTONS',
		question1: '',
		question2: '',
        question3: '',
        question4: '',		
	})
})

// ADD NEW questions POST ACTION
app.post('/src/app/questions/questions', function(req, res, next){	
	req.assert('question1', 'Question Required').notEmpty()     //Question1
	req.assert('question2', 'Question Required').notEmpty()     //Question2
    req.assert('question3', 'Question Required').notEmpty()     //Question3
    req.assert('question4', 'Question Required').notEmpty()     //Question4    
    var errors = req.validationErrors()
    
    if( !errors ) {   //No errors were found.  Passed Validation!
		
		/********************************************
		 * Express-validator module
		 
		req.body.comment = 'a <span>comment</span>';
		req.body.tests = '   a tests    ';
		req.sanitize('comment').escape(); // returns 'a &lt;span&gt;comment&lt;/span&gt;'
		req.sanitize('companyname').trim(); // returns 'a company'
		********************************************/
		var questions = {
			question1: req.sanitize('question1').escape().trim(),
			question2: req.sanitize('question2').escape().trim(),
            question3: req.sanitize('question3').escape().trim(),
            question4: req.sanitize('question4').escape().trim()
		}
		
		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO questions SET ?', questions, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)
					
					// render to views/tests/add.ejs
					res.render('/src/app/questions/questions', {
						title: 'Add New Questions',
						question1: questions.question1,
						question2: questions.question2,
                        question3: questions.question3,
                        question4: questions.question4,				
					})
				} else {				
					req.flash('success', 'Questions data successfully added')
					
					// render to views/tests/add.ejs
					res.render('/src/app/questions/questions', {
						title: 'Add New Questions',
						question1: '',
						question2: '',
                        question3: '',
                        question4: ''					
					})
				}
			})
		})
	}
	else {   //Display errors to tests
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})				
		req.flash('error', error_msg)		
		
		/**
		 * Using req.body.testname 
		 * because req.param('testname') is deprecated
		 */ 
        res.render('/src/app/questions/questions', { 
            title: 'Add New Questions',
            question1: req.body.question1,
            question2: req.body.question2,
            question3: req.body.question3,
            question4: req.body.question4
        })
    }
})

// SHOW EDIT COMPANY FORM
app.get('/edit/(:question)', function(req, res, next){
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM tests WHERE question = ?', [req.params.question], function(err, rows, fields) {
			if(err) throw err
			
			// if user not found
			if (rows.length <= 0) {
				req.flash('error', 'questions not found with question = ' + req.params.question)
				res.redirect('/question')
			}
			else { // if user found
				// render to views/tests/edit.ejs template file
				res.render('/src/app/questions/questions', {
					title: 'Edit questions', 
					//data: rows[0],
					question1: rows[0].question1,
					question2: rows[0].question2,
                    question3: rows[0].question3,
                    question4: rows[0].question4					
				})
			}			
		})
	})
})

// EDIT TESTS POST ACTION
app.put('/edit/(:question)', function(req, res, next) {
	req.assert('question1', 'Question is Required').notEmpty()           //Validate creator id
	req.assert('question2', 'Question is Required').notEmpty()             //Validate test name
    req.assert('question3', 'Question is Required').notEmpty()  //Validate test type
    req.assert('question4', 'Question is Required').notEmpty()
    var errors = req.validationErrors()
    
    if( !errors ) {   //No errors were found.  Passed Validation!
		
		/********************************************
		 * Express-validator module
		 
		req.body.comment = 'a <span>comment</span>';
		req.body.tests = '   a tests   ';

		req.sanitize('comment').escape(); // returns 'a &lt;span&gt;comment&lt;/span&gt;'
		req.sanitize('companyname').trim(); // returns 'a company'
		********************************************/
		var questions = {
			question1: req.sanitize('question1').escape().trim(),
			question2: req.sanitize('question2').escape().trim(),
            question3: req.sanitize('question3').escape().trim(),
            question4: req.sanitize('question4').escape().trim()
		}
		
		req.getConnection(function(error, conn) {
			conn.query('UPDATE questions SET ? WHERE question = ' + req.params.question, questions, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)
					
					// render to views/tests/add.ejs
					res.render('/src/app/questions/questions.component.html', {
						title: 'Edit Questions',
						question1: req.params.question1,
						question1: req.body.question1,
						question2: req.body.question2,
                        question3: req.body.question3,
                        question4: req.body.question4
						})
				} else {
					req.flash('success', 'Questions Data updated successfully!')
					
					// render to views/Tests/add.ejs
					res.render('/src/app/questions/questions.component.html', {
						title: 'Edit Questions',
						question1: req.params.question1,
						question2: req.body.question2,
						question3: req.body.question3,
						question4: req.body.question4				
					})
				}
			})
		})
	}
	else {   //Display errors to tests
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})
		req.flash('error', error_msg)
		
		/**
		 * Using req.body.name 
		 * because req.param('name') is deprecated
		 */ 
        res.render('/src/app/questions/questions.component.html', { 
            title: 'Edit Questions',
            question: req.params.question,
            question1: req.body.question1,
            question2: req.params.question2,
            question3: req.params.question3,
            question4: req.params.question4
        })
    }
})

// DELETE TESTS
app.delete('/delete/(:question1)', function(req, res, next) {
	var questions = { question: req.params.question}
	
	req.getConnection(function(error, conn) {
		conn.query('DELETE FROM question WHERE question = ' + req.params.question, questions, function(err, result) {
			//if(err) throw err
			if (err) {
				req.flash('error', err)
				// redirect to company list page
				res.redirect('/src/app/questions/questions.component.html')
			} else {
				req.flash('success', 'Questions deleted successfully! questions = ' + req.params.question)
				// redirect to company list page
				res.redirect('/src/app/questions/questions.component.html')
			}
		})
	})
})

module.exports = app
