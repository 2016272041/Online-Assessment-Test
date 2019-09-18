# mcq - quiz

A general purpose mcq application developed in angular 6 that can be used for multiple purpose.

### Please raise a pull request for any bug fix or if you have implemented a new feature and feel it is useful.
DATABASE : 'testdb';

mysql> show tables;
+------------------+
| Tables_in_testdb |
+------------------+
| answers          |
| blogforms        |
| blogs            |
| companies        |
| customers        |
| files            |
| fileupload       |
| images           |
| mcqs             |
| products         |
| quescategory     |
| questions        |
| registrations    |
| roles            |
| tests            |
| user_roles       |
| users            |
+------------------+
17 rows in set (0.03 sec)

DESCRIBE TABLE DETAILS:

DESCRIBE QUESTIONS;
    mysql> describe questions;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int(11)      | NO   | PRI | NULL    | auto_increment |
| questions1  | varchar(255) | YES  |     | NULL    |                |
| questions2  | varchar(255) | YES  |     | NULL    |                |
| questions3  | varchar(255) | YES  |     | NULL    |                |
| createdAt   | datetime     | YES  |     | NULL    |                |
| updatedAt   | datetime     | YES  |     | NULL    |                |
| option1     | varchar(255) | YES  |     | NULL    |                |
| option2     | varchar(255) | YES  |     | NULL    |                |
| option3     | varchar(255) | YES  |     | NULL    |                |
| option4     | varchar(255) | YES  |     | NULL    |                |
| questions4  | varchar(255) | YES  |     | NULL    |                |
| questions5  | varchar(255) | YES  |     | NULL    |                |
| questions6  | varchar(255) | YES  |     | NULL    |                |
| questions7  | varchar(255) | YES  |     | NULL    |                |
| questions8  | varchar(255) | YES  |     | NULL    |                |
| questions9  | varchar(255) | YES  |     | NULL    |                |
| questions10 | varchar(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
17 rows in set (0.01 sec)

DESCRIBE USER ROLES;
mysql> describe user_roles;
+-----------+----------+------+-----+---------+-------+
| Field     | Type     | Null | Key | Default | Extra |
+-----------+----------+------+-----+---------+-------+
| createdAt | datetime | NO   |     | NULL    |       |
| updatedAt | datetime | NO   |     | NULL    |       |
| roleId    | int(11)  | NO   | PRI | NULL    |       |
| userId    | int(11)  | NO   | PRI | NULL    |       |
+-----------+----------+------+-----+---------+-------+
4 rows in set (0.00 sec)
