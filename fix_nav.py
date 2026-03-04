import os
import re

# Directory to scan
directory = '/Users/imac/Documents/trae_projects/Akademi_Al_Khayr_homepage'

# Files to exclude (none, as we want to fix forms.html too)
exclude_files = ['fix_nav.py', 'update_nav_v2.py', 'update_nav.py']

# The wrong string (desktop style) that might be in the mobile section
# We use regex to match it flexibly just in case of whitespace variations
# It starts with <a href="forms.html" class="block px-4...
wrong_pattern = r'<a href="forms\.html" class="block px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition border-b border-gray-50">\s*<i class="fas fa-file-alt mr-2 text-purple-400"></i> Forms\s*</a>'

# The correct mobile string
mobile_correct = '<a href="forms.html" class="block font-semibold text-gray-800">Forms</a>'

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Find position of mobile-menu container
    mobile_menu_match = re.search(r'id="mobile-menu"', content)
    if not mobile_menu_match:
        print(f"No mobile-menu found in {file_path}")
        return

    mobile_start_idx = mobile_menu_match.start()
    
    # Find all matches of the wrong pattern
    # We want to replace only those that appear AFTER mobile_start_idx
    
    def replace_callback(match):
        if match.start() > mobile_start_idx:
            return mobile_correct
        else:
            return match.group(0) # Keep as is if it's before mobile menu (i.e., it's the desktop menu)

    new_content = re.sub(wrong_pattern, replace_callback, content, flags=re.DOTALL)
    
    if new_content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed {file_path}")
    else:
        print(f"No fixes needed for {file_path}")

def main():
    for filename in os.listdir(directory):
        if filename.endswith(".html") and filename not in exclude_files:
            file_path = os.path.join(directory, filename)
            fix_file(file_path)

if __name__ == "__main__":
    main()
