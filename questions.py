questions = [

{
"question":"Who developed Python?",
"options":[
"James",
"Dennis",
"Guido van Rossum",
"Mark"
],
"answer":"Guido van Rossum"
},

{
"question":"Which keyword creates a function?",
"options":[
"function",
"define",
"def",
"func"
],
"answer":"def"
}

]

from quiz.questions import questions

@app.route("/quiz")
def quiz():
    return render_template(
        "quiz.html",
        questions=questions
    )

@app.route("/submit", methods=["POST"])
def submit():

    score = 0

    for i, q in enumerate(questions):

        answer = request.form.get(f"q{i}")

        if answer == q["answer"]:
            score += 1

    return render_template(
        "result.html",
        score=score,
        total=len(questions)
    )

conn = sqlite3.connect("database.db")
cur = conn.cursor()

cur.execute(
    "INSERT INTO scores(user_id, subject, score) VALUES(?,?,?)",
    (1, "Python", score)
)

conn.commit()
conn.close()


@app.route("/history")
def history():

    conn = sqlite3.connect("database.db")
    cur = conn.cursor()

    cur.execute("SELECT * FROM scores")

    data = cur.fetchall()

    conn.close()

    return render_template(
        "history.html",
        scores=data
        }