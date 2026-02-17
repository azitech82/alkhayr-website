import os

file_path = 'gallery.html'
new_content_path = 'new_gallery_content.html'

with open(file_path, 'r') as f:
    lines = f.readlines()

with open(new_content_path, 'r') as f:
    new_block = f.read().strip()

# Find the start line
start_marker = '<div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8 p-4">'
start_idx = -1
for i, line in enumerate(lines):
    if start_marker in line:
        start_idx = i
        break

if start_idx == -1:
    print("Start marker not found!")
    exit(1)

# Find the end line
# Since we know the structure, we can just look for the closing div that matches the indentation or just counting divs?
# The indentation seems to be 16 spaces (based on previous Read output).
# Line 202: 16 spaces indentation.
# Line 358: 16 spaces indentation.

end_idx = -1
for i in range(start_idx + 1, len(lines)):
    line = lines[i]
    if line.strip() == '</div>' and (len(line) - len(line.lstrip())) == (len(lines[start_idx]) - len(lines[start_idx].lstrip())):
        end_idx = i
        break

if end_idx == -1:
    print("End marker not found!")
    # Fallback: look for the closing div before the end of the container or section
    # But checking indentation is usually safe if formatted correctly.
    # Let's try to count braces/tags if indentation fails? No, HTML is not that strict.
    # Let's just assume the indentation matches.
    exit(1)

# Replace the block
# We replace lines[start_idx : end_idx + 1] with new_block
new_lines = lines[:start_idx] + [new_block + '\n'] + lines[end_idx+1:]

with open(file_path, 'w') as f:
    f.writelines(new_lines)

print("Successfully updated gallery.html")
