import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

for file_path in ['src/TET 2A Telugu.jsx', 'TET 2A Telugu.jsx']:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update the CSS section for buttons
    old_css_part = '''.tp-btn {
  border: 1.5px solid var(--line);
  background: var(--panel);
  color: var(--ink);
  padding: 11px 20px;
  border-radius: 9px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  transition: all 0.15s ease;
}

.tp-btn:hover:not(:disabled) {
  background: var(--sel);
  border-color: var(--accent);
}

.tp-btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}

.tp-btn.primary:hover:not(:disabled) {
  opacity: 0.92;
}

.tp-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}'''

    new_css_part = '''.tp-btn {
  border: 1.5px solid var(--line);
  background: var(--panel);
  color: var(--ink);
  padding: 12px 22px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  font-family: inherit;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
}

.tp-btn.prev-btn {
  background: #ffffff;
  border: 1.5px solid #94a3b8;
  color: #0f172a;
}

.tp-btn.prev-btn:hover:not(:disabled) {
  background: #f1f5f9;
  border-color: #64748b;
}

.tp-btn.prev-btn:disabled {
  background: #f8fafc;
  border-color: #e2e8f0;
  color: #94a3b8;
  opacity: 0.6;
}

/* Primary Submit Button: High contrast vivid Royal Blue with solid white text */
.tp-btn.primary {
  background: #1d4ed8;
  border: 1.5px solid #1e40af;
  color: #ffffff !important;
  font-weight: 700;
  box-shadow: 0 3px 8px rgba(29, 78, 216, 0.3);
}

.tp-btn.primary:hover:not(:disabled) {
  background: #1e40af;
  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.4);
}

/* When disabled in light/white mode: clean readable gray, NOT washed out white */
.tp-btn.primary:disabled {
  background: #e2e8f0 !important;
  border-color: #cbd5e1 !important;
  color: #64748b !important;
  box-shadow: none !important;
  cursor: not-allowed;
  opacity: 1 !important;
}

/* Next Button: Highly visible Emerald Green with solid white text & subtle glow */
.tp-btn.next-btn {
  background: #16a34a !important;
  border: 1.5px solid #15803d !important;
  color: #ffffff !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.4) !important;
}

.tp-btn.next-btn:hover:not(:disabled) {
  background: #15803d !important;
  box-shadow: 0 5px 16px rgba(22, 163, 74, 0.5) !important;
}

@media (max-width: 640px) {
  .tp-actions {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 10px !important;
    width: 100% !important;
  }
  .tp-btn {
    width: 100% !important;
    min-height: 48px !important;
    font-size: 15px !important;
    padding: 12px 14px !important;
  }
}'''

    content = content.replace(old_css_part, new_css_part)

    # 2. Add classes to the JSX buttons
    old_buttons_part = '''              <div className="tp-actions">
                <button className="tp-btn" onClick={() => go(-1)} disabled={index === 0}>
                  ← Previous
                </button>
                {submitted == null ? (
                  <button
                    className="tp-btn primary"
                    onClick={submit}
                    disabled={selected[q.id] == null}
                  >
                    Submit answer
                  </button>
                ) : (
                  <button
                    className="tp-btn primary"
                    onClick={() => go(1)}
                    disabled={index === list.length - 1}
                  >
                    Next →
                  </button>
                )}
              </div>'''

    new_buttons_part = '''              <div className="tp-actions">
                <button className="tp-btn prev-btn" onClick={() => go(-1)} disabled={index === 0}>
                  ← Previous
                </button>
                {submitted == null ? (
                  <button
                    className="tp-btn primary submit-btn"
                    onClick={submit}
                    disabled={selected[q.id] == null}
                  >
                    Submit answer
                  </button>
                ) : (
                  <button
                    className="tp-btn primary next-btn"
                    onClick={() => go(1)}
                    disabled={index === list.length - 1}
                  >
                    Next →
                  </button>
                )}
              </div>'''

    content = content.replace(old_buttons_part, new_buttons_part)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated buttons in {file_path} successfully.")
