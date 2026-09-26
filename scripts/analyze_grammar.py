import json
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

with open('questions_raw.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Loaded {len(questions)} questions.")

# Let's inspect unique Telugu grammar question stems to discover mappings for grammar terms:
for q in questions:
    stem = q['stem']
    # If stem has Telugu grammar keywords like సంధి, సమాసం, విభక్తి, అలంకారం, etc.
    if any(k in stem for k in ['సంధి', 'సమాస', 'విభక్తి', 'అలంకార', 'కర్తరి', 'కర్మణి', 'ప్రకృతి', 'వికృతి', 'పర్యాయ', 'నానార్థ']):
        pass
