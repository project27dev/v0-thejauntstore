import fs from "fs"
import path from "path"

// CONFIG
const IMAGES_DIR = path.join(process.cwd(), "public/pendent") // folder for pendants
const START_ID = 200 // different range to avoid clashing with rings

const names = [
  "Botanical Gold Pendant",
  "Pressed Flower Pendant",
  "Minimal Bloom Pendant",
  "Vintage Botanical Pendant",
  "Floral Resin Pendant",
  "Garden Essence Pendant",
  "Wildflower Gold Pendant",
]

const tagPool = [
  "gold",
  "pressed-flowers",
  "botanical",
  "minimalist",
  "handmade",
  "for-her",
  "new-in",
  "bestseller",
]

// Helper: pick random 3 tags + always "pendant"
function getRandomTags() {
  const shuffled = tagPool.sort(() => 0.5 - Math.random())
  return ["pendant", ...shuffled.slice(0, 3)]
}

// Read image files from the directory
if (!fs.existsSync(IMAGES_DIR)) {
  console.error(`❌ Folder not found: ${IMAGES_DIR}`)
  process.exit(1)
}

const files = fs
  .readdirSync(IMAGES_DIR)
  .filter((file) =>
    [".jpg", ".jpeg", ".png", ".webp"].includes(path.extname(file).toLowerCase())
  )

const products = files.map((file, index) => {
  const name = names[Math.floor(Math.random() * names.length)]

  return `{
    id: ${START_ID + index},
    name: "${name}",
    price: 4,
    images: ["/pendent/${file}"],
    tags: ${JSON.stringify(getRandomTags())},
    description: "A simple handcrafted botanical pendant featuring natural elements.",
    category: "pendants",
  }`
})

// Output ready-to-paste TS array
console.log("\n// AUTO-GENERATED PENDANTS\n")
console.log(products.join(",\n"))
