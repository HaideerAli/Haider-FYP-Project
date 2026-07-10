from docx import Document

doc = Document('Spring 2026_CS619_13357 (1).docx')
for i, para in enumerate(doc.paragraphs[:120]):
    text = para.text.strip()
    if text:
        print(f'{i}: {text}')
