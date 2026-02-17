import random

images = [
    "Gallery/480409144_631640739414910_1639360021761228736_n.jpg",
    "Gallery/480506390_631640786081572_4431412821148856643_n.jpg",
    "Gallery/494481421_686502203928763_2849760136621143672_n.jpg",
    "Gallery/565806577_819316423980673_1245878657240932955_n.jpg",
    "Gallery/572039952_825255220053460_8092779179774866476_n.jpg",
    "Gallery/572467888_831125469466435_8220124982302683678_n.jpg",
    "Gallery/573483658_831125556133093_5193186745928079528_n.jpg",
    "Gallery/578555688_837706398808342_1553853706806290757_n.jpg",
    "Gallery/589827054_851068027472179_2683156619955303707_n.jpg",
    "Gallery/617135034_894449729800675_3618302032493286360_n.jpg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.28.24.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.28.25.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.28.26%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.28.26%20%282%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.28.26%20%283%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.28.26.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.31.04%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.31.04.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.31.05.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2012.31.27.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.27.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.28%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.28.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.29%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.29%20%282%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.32%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.32.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.33%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.33.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.30.34.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.54%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.54%20%282%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.54.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.55.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.56%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.56%20%282%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.56.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.57%20%281%29.jpeg",
    "Gallery/WhatsApp%20Image%202026-02-13%20at%2016.33.57.jpeg"
]

rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-3", "-rotate-3"]

# Deterministic "random" based on index to be stable if re-run
# or just simple random. I'll use simple random but with a fixed seed if I wanted reproducibility.
# Actually, I'll just alternate for a good mix, but add some randomness.

print('<div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8 p-4">')

for i, src in enumerate(images):
    # Mix strategy: 50/50 roughly
    is_vintage = (i % 2 == 0) if i % 4 != 0 else False # Simple pattern: V, C, V, C... but mix it up a bit
    # Actually let's just do: if index is even -> vintage, odd -> colored. Simple and effective mix.
    # To make it less predictable:
    if i % 3 == 0:
        style = "colored"
    elif i % 3 == 1:
        style = "vintage"
    else:
        style = "vintage" # 2/3 vintage, 1/3 colored?
    
    # User said "mix some vintage and some colouring". 
    # Let's do 50/50.
    if i % 2 == 0:
        style = "vintage"
    else:
        style = "colored"

    rotation = rotations[i % len(rotations)]
    
    if style == "vintage":
        bg_class = "bg-stone-50"
        filter_class = "sepia brightness-90 contrast-85 hover:sepia-0 hover:brightness-100 hover:contrast-100"
    else:
        bg_class = "bg-white"
        filter_class = "contrast-110 saturate-110"

    print(f'''                    <div class="break-inside-avoid {bg_class} p-4 pb-16 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] border border-gray-200 {rotation} hover:rotate-0 transition duration-500 ease-in-out transform hover:scale-105 hover:z-10 relative">
                        <img src="{src}" alt="Gallery Image" class="w-full h-auto shadow-inner {filter_class} transition duration-500">
                    </div>''')

print('                </div>')
