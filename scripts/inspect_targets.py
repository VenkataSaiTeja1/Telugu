import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('questions_raw.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

from test_map import GLYPH_MAP, decode_text

# Target characters to inspect
targets = ['Ɂ', 'õ', 'Ģ', 'ċ', 'ö', 'ŷ', 'ȳ', 'Ğ', 'é', 'Ĺ', 'ȿ', 'ň', 'û', 'ç', 'ì', 'о', 'ɖ', 'ɀ', 'Ţ', 'Ɠ', 'Ľ', 'ǎ', 'ŝ', 'î']

samples = {c: [] for c in targets}

for q in questions:
    text = q['stem'] + ' ' + ' '.join([o['text'] for o in q['options']])
    dec = decode_text(text)
    for c in targets:
        if c in dec and len(samples[c]) < 5:
            # find word containing c
            words = [w for w in dec.split() if c in w]
            samples[c].extend(words[:3])

for c in targets:
    print(f"Char: {c} (U+{ord(c):04X}) -> Sample words: {samples[c][:5]}")
