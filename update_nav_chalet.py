import os
import re

# Directory to scan
directory = '/Users/imac/Documents/trae_projects/Akademi_Al_Khayr_homepage'

# New content to insert
desktop_link = """
                            <a href="booking_aak_chalet.html" class="block px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition border-b border-gray-50">
                                <i class="fas fa-home mr-2 text-purple-400"></i> Booking AAK Chalet
                            </a>"""

mobile_link = """
                    <a href="booking_aak_chalet.html" class="block font-semibold text-gray-800">Booking AAK Chalet</a>"""

# Regex patterns
# Desktop: Look for Gallery link in the dropdown
desktop_pattern = r'(<a href="gallery\.html"[^>]*>.*?Gallery\s*</a>)'

# Mobile: Look for Gallery link in the mobile menu
mobile_pattern = r'(<a href="gallery\.html"[^>]*>.*?Gallery</a>)'

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "booking_aak_chalet.html" in content:
        print(f"Skipping {file_path} - already updated")
        return

    original_content = content
    
    # Update Desktop Menu
    # Find the Gallery link and append the new link
    # We use a specific regex to target the desktop dropdown link structure
    # The desktop link has classes starting with "block px-4 py-3"
    desktop_match = re.search(r'(<a href="gallery\.html"[^>]*class="[^"]*block px-4 py-3[^"]*"[^>]*>.*?Gallery\s*</a>)', content, re.DOTALL)
    if desktop_match:
        print(f"Found desktop block in {file_path}")
        replacement = desktop_match.group(1) + desktop_link
        content = content.replace(desktop_match.group(1), replacement)
    
    # Update Mobile Menu
    # The mobile link has class "block font-semibold text-gray-800"
    mobile_match = re.search(r'(<a href="gallery\.html"[^>]*class="[^"]*block font-semibold text-gray-800[^"]*"[^>]*>.*?Gallery</a>)', content, re.DOTALL)
    if mobile_match:
        print(f"Found mobile block in {file_path}")
        replacement = mobile_match.group(1) + mobile_link
        content = content.replace(mobile_match.group(1), replacement)
        
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")
    else:
        print(f"No matching pattern found in {file_path}")

def main():
    for filename in os.listdir(directory):
        if filename.endswith(".html") and filename != "booking_aak_chalet.html":
            file_path = os.path.join(directory, filename)
            update_file(file_path)

if __name__ == "__main__":
    main()
