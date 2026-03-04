import os
import re

# Directory to scan
directory = '/Users/imac/Documents/trae_projects/Akademi_Al_Khayr_homepage'

# Files to exclude
exclude_files = ['forms.html', 'update_nav.py', 'update_nav_v2.py']

# New content to insert
desktop_new = """<a href="forms.html" class="block px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition border-b border-gray-50">
                                <i class="fas fa-file-alt mr-2 text-purple-400"></i> Forms
                            </a>"""

mobile_new = """<a href="forms.html" class="block font-semibold text-gray-800">Forms</a>"""

# Regex patterns to find the old blocks
# We use re.DOTALL to match across lines and non-greedy matching
# The patterns attempt to match the block of 3 links we added previously

# Desktop pattern: looks for Outing Form link ... Activity Form link
desktop_pattern = r'<a href="outing_form\.html"[^>]*>.*?Outing Form\s*</a>\s*<a href="ummul_quran_course\.html"[^>]*>.*?Ummul Quran Course\s*</a>\s*<a href="concern_form\.html"[^>]*>.*?Activity Form\s*</a>'

# Mobile pattern: simpler links
mobile_pattern = r'<a href="outing_form\.html"[^>]*>.*?Outing Form</a>\s*<a href="ummul_quran_course\.html"[^>]*>.*?Ummul Quran Course</a>\s*<a href="concern_form\.html"[^>]*>.*?Activity Form</a>'

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Update Desktop Menu
    # We need to capture the indentation of the matched block to apply it to the new content
    # But for now, let's just try a direct regex substitution
    
    # Desktop
    if re.search(desktop_pattern, content, re.DOTALL):
        print(f"Found desktop block in {file_path}")
        content = re.sub(desktop_pattern, desktop_new, content, flags=re.DOTALL)
    
    # Mobile
    if re.search(mobile_pattern, content, re.DOTALL):
        print(f"Found mobile block in {file_path}")
        content = re.sub(mobile_pattern, mobile_new, content, flags=re.DOTALL)
        
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")
    else:
        print(f"No changes needed for {file_path}")

def main():
    for filename in os.listdir(directory):
        if filename.endswith(".html") and filename not in exclude_files:
            file_path = os.path.join(directory, filename)
            update_file(file_path)

if __name__ == "__main__":
    main()
