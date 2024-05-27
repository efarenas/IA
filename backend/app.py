from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = 'sk-proj-l6GO220dvne9tAQWbR7DT3BlbkFJWhyxA1gTLKb1myiDsA3B'

@app.route('/api/process-prompt', methods=['POST'])
def process_prompt():
    data = request.json
    prompt = data['prompt']

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=100
    )

    return jsonify({'response': response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(debug=True)
