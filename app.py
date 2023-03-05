from dataclasses import dataclass
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('main.html')

@app.route('/event')
def event():

    users = [{"username": "我", "url": "我-APP-的名字.herokuapp.com"},
            {"username": "你", "url": "你-APP-的名字.herokuapp.com"}]
    eventdata = {
        "name":"Jerrycc",
        "date":"2023",
        "location":"taipei",
        "description":"50/20 不東",
        "attendees":"4"

    }
    return render_template('event.html', eventdata = eventdata)


if __name__ == '__main__':
    app.run()