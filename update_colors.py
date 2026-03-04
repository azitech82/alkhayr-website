import sys

def replace_colors(file_path, old_color, new_color, old_hex_gradient, new_hex_gradient, old_hex_text, new_hex_text):
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Replace Tailwind classes
        new_content = content.replace(f'bg-{old_color}-600', f'bg-{new_color}-600')
        new_content = new_content.replace(f'bg-{old_color}-700', f'bg-{new_color}-700')
        new_content = new_content.replace(f'text-{old_color}-600', f'text-{new_color}-600')
        new_content = new_content.replace(f'text-{old_color}-100', f'text-{new_color}-100')
        new_content = new_content.replace(f'hover:bg-{old_color}-700', f'hover:bg-{new_color}-700')
        new_content = new_content.replace(f'hover:text-{old_color}-600', f'hover:text-{new_color}-600')
        new_content = new_content.replace(f'focus:ring-{old_color}-500', f'focus:ring-{new_color}-500')
        new_content = new_content.replace(f'focus:border-{old_color}-500', f'focus:border-{new_color}-500')
        
        # Replace CSS colors
        new_content = new_content.replace(old_hex_gradient, new_hex_gradient)
        new_content = new_content.replace(f'color: {old_hex_text};', f'color: {new_hex_text};')
        
        # Special case for radio buttons in concern_form
        new_content = new_content.replace(f'text-{old_color}-600 focus:ring-{old_color}-500', f'text-{new_color}-600 focus:ring-{new_color}-500')

        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f'Successfully updated {file_path}')
    except Exception as e:
        print(f'Error updating {file_path}: {e}')

# Ummul Quran Course: Purple -> Emerald
replace_colors(
    '/Users/imac/Documents/trae_projects/Akademi_Al_Khayr_homepage/ummul_quran_course.html', 
    'purple', 'emerald',
    'linear-gradient(90deg, #7c3aed, #a855f7, #22c55e)', 'linear-gradient(90deg, #059669, #34d399, #10b981)',
    '#7c3aed', '#059669'
)

# Concern Form: Purple -> Blue
replace_colors(
    '/Users/imac/Documents/trae_projects/Akademi_Al_Khayr_homepage/concern_form.html',
    'purple', 'blue',
    'linear-gradient(90deg, #7c3aed, #a855f7, #22c55e)', 'linear-gradient(90deg, #2563eb, #60a5fa, #3b82f6)',
    '#7c3aed', '#2563eb'
)
