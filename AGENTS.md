# AGENTS.md

Guidance for coding agents working in this repository.

## Project snapshot

- This is a small Python practice repository with standalone scripts.
- Current scripts in root: `qasir.py`, `string.py`, `conf.py`, `list.py`, `dict.py`, `loop.py`.
- There is no package structure, dependency file, or formal test suite yet.

## Primary goals for changes

1. Keep edits focused on the user request.
2. Preserve the learning-oriented nature of the scripts unless asked to refactor deeply.
3. Prefer small, readable fixes over broad rewrites.

## Environment and execution

- Use Python 3.
- Run a single script directly, for example:

```bash
python3 qasir.py
python3 string.py
```

- If you modify a script, run that script after changes to confirm it executes.

## Coding conventions

- Use clear variable names and consistent indentation (4 spaces).
- Keep files ASCII unless a file already requires Unicode.
- Add short comments only where logic is not obvious.
- Avoid introducing new dependencies unless necessary.

## File and change policy

- Do not rename or move existing files unless the user asks.
- Avoid unrelated cleanup in the same change.
- If creating new files, use descriptive names and keep them minimal.

## Quality checklist before finishing

- Confirm changed Python files run without syntax errors.
- Keep output and behavior aligned with the user's request.
- Ensure `README.md` and examples stay consistent with the code when relevant.
