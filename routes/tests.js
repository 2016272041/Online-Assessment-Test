var express = require('express')
var app = express()

// SHOW LIST OF CREATORS //
app.get('/src/app/tests/tests', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM tests ORDER BY testid DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
				req.flash('error', err) 
				res.render('tests/tests', {
					title: 'Tests List', 
					data: ''
				})
			} else {
				// render to views/tests/list.ejs template file
				res.render('tests/tests', {
					title: 'Tests List', 
					data: rows
				})
			}
		})
	})
})

// SHOW ADD TESTS FORM
app.get('/src/app/tests/tests', function(req, res, next){	
	// render to views/tests/add.ejs
	res.render('tests/tests', {
		title: 'Add New Tests',
		testid: '',
		testname: '',
        testcreator: ''		
	})
})

// ADD NEW TESTS POST ACTION
app.post('/src/app/tests/tests', function(req, res, next){	
	req.assert('testid', 'A Valid Creator ID is required').isInt()           //Validate Creator ID
	req.assert('testname', 'Test Name is required').notEmpty()             //Validate Test Name
    req.assert('testcreator', 'Test creator is required').notEmpty()  //Validate Test Type
    
    var errors = req.validationErrors()
    
    if( !errors ) {   //No errors were found.  Passed Validation!
		
		/********************************************
		 * Express-validator module
		 
		req.body.comment = 'a <span>comment</span>';
		req.body.tests = '   a tests    ';
		req.sanitize('comment').escape(); // returns 'a &lt;span&gt;comment&lt;/span&gt;'
		req.sanitize('companyname').trim(); // returns 'a company'
		********************************************/
		var tests = {
			testid: req.sanitize('testid').escape().trim(),
			testname: req.sanitize('testname').escape().trim(),
            testcreator: req.sanitize('testcreator').escape().trim(),
		}
		
		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO tests SET ?', tests, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)
					
					// render to views/tests/add.ejs
					res.render('/src/app/tests/tests', {
						title: 'Add New Tests',
						testid: tests.testid,
						testname: tests.testname,
						testcreator: tests.testcreator				
					})
				} else {				
					req.flash('success', 'Tests Data added successfully!')
					
					// render to views/tests/add.ejs
					res.render('/src/app/tests/tests', {
						title: 'Add New Tests',
						testid: '',
						testname: '',
						testcreator: ''					
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
        res.render('/src/app/tests/tests', { 
            title: 'Add New Tests',
            testid: req.body.testid,
            testname: req.body.testname,
			testcreator: req.body.testcreator
        })
    }
})

// SHOW EDIT COMPANY FORM
app.get('/edit/(:testid)', function(req, res, next){
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM tests WHERE testid = ?', [req.params.testid], function(err, rows, fields) {
			if(err) throw err
			
			// if user not found
			if (rows.length <= 0) {
				req.flash('error', 'Tests not found with creatorid = ' + req.params.testid)
				res.redirect('/testid')
			}
			else { // if user found
				// render to views/tests/edit.ejs template file
				res.render('tests/tests', {
					title: 'Edit Tests', 
					//data: rows[0],
					testid: rows[0].testid,
					testname: rows[0].testname,
					testcreator: rows[0].testcreator					
				})
			}			
		})
	})
})

// EDIT TESTS POST ACTION
app.put('/edit/(:testid)', function(req, res, next) {
	req.assert('testid', 'Test ID is required').isInt()           //Validate creator id
	req.assert('testname', 'Test Name is required').notEmpty()             //Validate test name
	req.assert('testcreator', 'Test Creator is required').notEmpty()  //Validate test type
    var errors = req.validationErrors()
    
    if( !errors ) {   //No errors were found.  Passed Validation!
		
		/********************************************
		 * Express-validator module
		 
		req.body.comment = 'a <span>comment</span>';
		req.body.tests = '   a tests   ';

		req.sanitize('comment').escape(); // returns 'a &lt;span&gt;comment&lt;/span&gt;'
		req.sanitize('companyname').trim(); // returns 'a company'
		********************************************/
		var tests = {
			testid: req.sanitize('testid').escape().trim(),
			testname: req.sanitize('testname').escape().trim(),
			testcreator: req.sanitize('testcreator').escape().trim()
		}
		
		req.getConnection(function(error, conn) {
			conn.query('UPDATE tests SET ? WHERE testid = ' + req.params.testid, tests, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)
					
					// render to views/tests/add.ejs
					res.render('/src/app/tests/tests', {
						title: 'Edit Tests',
						testid: req.params.testid,
						testid: req.body.testid,
						testname: req.body.testname,
						testcreator: req.body.testcreator,
						})
				} else {
					req.flash('success', 'Tests Data updated successfully!')
					
					// render to views/Tests/add.ejs
					res.render('/src/app/tests/tests', {
						title: 'Edit Tests',
						testid: req.params.testid,
						testid: req.body.testid,
						testname: req.body.testname,
						testcreator: req.body.testcreator				
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
        res.render('/src/app/tests/tests', { 
            title: 'Edit Tests',            
			testid: req.params.testid, 
			testid: req.body.testid,
			testname: req.body.testname,
			testcreator: req.body.testcreator,
        })
    }
})

// DELETE TESTS
app.delete('/delete/(:testid)', function(req, res, next) {
	var tests = { creator_id: req.params.testid}
	
	req.getConnection(function(error, conn) {
		conn.query('DELETE FROM tests WHERE testid = ' + req.params.testid, tests, function(err, result) {
			//if(err) throw err
			if (err) {
				req.flash('error', err)
				// redirect to company list page
				res.redirect('/tests')
			} else {
				req.flash('success', 'Tests deleted successfully! testid = ' + req.params.testid)
				// redirect to company list page
				res.redirect('/tests')
			}
		})
	})
})

module.exports = app
