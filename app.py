from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)

    import sqlite3
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        name = request.form["name"]
        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("database.db")
        cur = conn.cursor()

        cur.execute(
            "INSERT INTO users(name,email,password) VALUES(?,?,?)",
            (name,email,password)
        )

        conn.commit()
        conn.close()

        return "Registered Successfully"

    return render_template("register.html")


@app.route("/login", methods=["GET","POST"])
def login():

    if request.method=="POST":

        email=request.form["email"]
        password=request.form["password"]

        conn=sqlite3.connect("database.db")
        cur=conn.cursor()

        cur.execute(
            "SELECT * FROM users WHERE email=? AND password=?",
            (email,password)
        )

        user=cur.fetchone()

        conn.close()

        if user:
            return "Login Successful"

        return "Invalid Login"

    return render_template("login.html")


from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/learn")
def learn():
    return render_template("learn.html")

@app.route("/quiz")
def quiz():
    return render_template("quiz.html")

@app.route("/result")
def result():
    return render_template("result.html")

if __name__ == "__main__":
    app.run(debug=True)