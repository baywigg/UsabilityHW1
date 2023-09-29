from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def display_login():
    return render_template('login.html')

@app.route('/CAPTCHA')
def display_captcha():
    return render_template('captcha.html')

@app.route('/account_info')
def display_account_info():
    return render_template('accountInfo.html')

@app.route('/success')
def display_success():
    return render_template('success.html')
if __name__ == '__main__':
    app.run(debug=True)