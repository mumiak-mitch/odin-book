# Local library project

## Commands used

create project
    express express-locallibrary --view=pug

change directory:
    cd express-locallibrary

install dependencies:
    npm install

run the app (Bash (Linux or macOS))
    DEBUG=express-locallibrary:* npm start

run the app (PowerShell (Windows))
    $ENV:DEBUG = "express-locallibrary:*"; npm start

run the app (Command Prompt (Windows)):
    SET DEBUG=express-locallibrary:* & npm start

enable servers restart on changes
    npm install -g nodemon

database
    npm install mongoose

### Development

http://localhost:3000/
