from flask import Flask, jsonify
import nltk

app = Flask(__name__)

@app.route('/analyze/<text>')
def analyze(text):
    # Dummy sentiment for demonstration
    sentiment = "positive" if "fantastic" in text.lower() else "neutral"
    return jsonify({"sentiment": sentiment})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)