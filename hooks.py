"""Build navigation from the semester and course folders in docs/."""

from pathlib import Path
import re


SECTIONS = {
    "class-test": "Class Test",
    "mid-term": "Mid Term",
    "final": "Final",
    "presentation": "Presentation",
    "project": "Project",
}

COURSE_ORDER = {
    1: ["bus101", "eng7101", "mat101", "sta191"],
    2: ["cs191", "mat102", "phy100"],
    3: ["dsa101", "eng7102", "mat291"],
    4: ["pphs7102", "cs295", "sta293"],
}

COURSE_LABELS = {"pphs7102": "PPHS 7102"}


def _pages(folder: Path, docs: Path, label: str):
    """Return index and nested Markdown pages under a folder, if present."""
    if not folder.is_dir():
        return []
    pages = []
    index = folder / "index.md"
    if index.is_file():
        pages.append({label: index.relative_to(docs).as_posix()})
    for file in sorted(folder.glob("*.md")):
        if file.name != "index.md":
            pages.append({file.stem.replace("-", " ").title(): file.relative_to(docs).as_posix()})
    folders = [path for path in folder.iterdir() if path.is_dir()]
    folders.sort(
        key=lambda path: (
            list(SECTIONS).index(path.name) if path.name in SECTIONS else len(SECTIONS),
            path.name,
        )
    )
    for subfolder in folders:
        child_pages = _pages(subfolder, docs, "Overview")
        if child_pages:
            label = SECTIONS.get(subfolder.name)
            if label is None:
                match = re.fullmatch(r"ct-(\d+)", subfolder.name)
                label = f"Class Test {match.group(1)}" if match else subfolder.name.replace("-", " ").title()
            pages.append({label: child_pages})
    return pages


def on_config(config):
    docs = Path(config["docs_dir"])
    if not docs.is_absolute():
        docs = Path(config["config_file_path"]).parent / docs
    semesters = []
    for semester in sorted(docs.glob("semester-[0-9][0-9]")):
        if not semester.is_dir():
            continue
        number = int(semester.name[-2:])
        index = semester / "index.md"
        entries = [{"Overview": index.relative_to(docs).as_posix()}] if index.is_file() else []
        courses = [path for path in semester.iterdir() if path.is_dir()]
        preferred = COURSE_ORDER.get(number, [])
        courses.sort(key=lambda path: (preferred.index(path.name) if path.name in preferred else len(preferred), path.name))
        for course in courses:
            if not re.fullmatch(r"[a-z]+[0-9]+", course.name):
                continue
            course_pages = _pages(course, docs, "Overview")
            if course_pages:
                entries.append({COURSE_LABELS.get(course.name, course.name.upper()): course_pages})
        if entries:
            semesters.append({f"Semester {number}": entries})
    config["nav"] = [{"Home": "index.md"}, {"Semesters": semesters}]
    return config
