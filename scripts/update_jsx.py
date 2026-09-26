import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('questions_cleaned.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

with open('TET 2A Telugu.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Locate export const QUESTION_BANK = [ ... ];
start_marker = 'export const QUESTION_BANK = ['
end_marker = 'const makeAttempt = (mode, topic, questionIds) => ({'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Error: Could not find markers in TET 2A Telugu.jsx")
    sys.exit(1)

json_formatted = json.dumps(questions, ensure_ascii=False, indent=2)

new_content = (
    content[:start_idx]
    + 'export const QUESTION_BANK = '
    + json_formatted
    + ';\n\n'
    + content[end_idx:]
)

with open('TET 2A Telugu.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

with open('src/TET 2A Telugu.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully updated TET 2A Telugu.jsx and src/TET 2A Telugu.jsx with {len(questions)} cleaned questions.")
