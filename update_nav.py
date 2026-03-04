import os

files_to_update = [
    "index.html",
    "gallery.html",
    "aak_huffaz.html",
    "about.html",
    "memorisation.html",
    "fees.html",
    "alumni.html",
    "arabic_course.html",
    "islamic_leadership_course.html",
    "online_tahfiz_arabic.html",
    "academic_levels.html",
    "co_curriculum.html",
    "registration.html",
    "registration_club.html",
    "outing_form.html",
    "ummul_quran_course.html",
    "concern_form.html"
]

desktop_insertion = """                            <a href="outing_form.html" class="block px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition border-b border-gray-50">
                                <i class="fas fa-walking mr-2 text-purple-400"></i> Outing Form
                            </a>
                            <a href="ummul_quran_course.html" class="block px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition border-b border-gray-50">
                                <i class="fas fa-book-quran mr-2 text-purple-400"></i> Ummul Quran Course
                            </a>
                            <a href="concern_form.html" class="block px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition border-b border-gray-50">
                                <i class="fas fa-comment-medical mr-2 text-purple-400"></i> Activity Form
                            </a>
"""

mobile_insertion = """                    <a href="outing_form.html" class="block font-semibold text-gray-800">Outing Form</a>
                    <a href="ummul_quran_course.html" class="block font-semibold text-gray-800">Ummul Quran Course</a>
                    <a href="concern_form.html" class="block font-semibold text-gray-800">Activity Form</a>
"""

base_dir = "/Users/imac/Documents/trae_projects/Akademi_Al_Khayr_homepage"

for filename in files_to_update:
    filepath = os.path.join(base_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} (not found)")
        continue

    with open(filepath, 'r') as f:
        content = f.read()

    original_content = content
    
    # Update Desktop Menu
    # Search for the Fees payment link block end or start
    # The pattern in index.html is:
    # <a href="fees.html" class="block px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition border-b border-gray-50 last:border-0">
    #     <i class="fas fa-credit-card mr-2 text-purple-400"></i> Fees payment
    # </a>
    
    # We can split by the fees link and insert after it.
    fees_desktop_pattern = 'Fees payment\n                            </a>'
    if fees_desktop_pattern in content:
        parts = content.split(fees_desktop_pattern)
        # Check if we split correctly (should be at least 2 parts)
        if len(parts) >= 2:
            # We insert after the first occurrence (usually only one)
            # Actually, let's be more precise.
            # The pattern includes the closing </a> tag and the newline/indentation before the next tag.
            # But the indentation in my script string needs to match.
            # Let's try to find a unique substring for the fees link closing tag.
            
            # Construct the replacement
            replacement = fees_desktop_pattern + '\n' + desktop_insertion.rstrip()
            content = content.replace(fees_desktop_pattern, replacement, 1)
            print(f"Updated desktop menu in {filename}")
    
    # Update Mobile Menu
    # <a href="fees.html" class="block font-semibold text-gray-800">Fees payment</a>
    fees_mobile_pattern = '<a href="fees.html" class="block font-semibold text-gray-800">Fees payment</a>'
    if fees_mobile_pattern in content:
        replacement = fees_mobile_pattern + '\n' + mobile_insertion.rstrip()
        content = content.replace(fees_mobile_pattern, replacement, 1)
        print(f"Updated mobile menu in {filename}")

    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Saved {filename}")
    else:
        print(f"No changes in {filename}")
