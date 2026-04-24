import os
import glob

tag = """<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18106017455"></script> 
    <script> 
      window.dataLayer = window.dataLayer || []; 
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date()); 
    
      gtag('config', 'AW-18106017455'); 
    </script>"""

html_files = glob.glob('**/*.html', recursive=True)
for f in html_files:
    if f == 'index.html': continue # already did this one
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if '<head>' in content and 'AW-18106017455' not in content:
        content = content.replace('<head>', tag, 1)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")
