import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = '/Users/kazuma/Downloads/slides'
const destDir = path.join(__dirname, '../src/lessons/lesson02')

for (let i = 1; i <= 37; i++) {
  const n = String(i).padStart(2, '0')
  const srcPath = path.join(srcDir, `slide${n}.jsx`)
  let content = fs.readFileSync(srcPath, 'utf8')

  const newName = `Slide${String(i - 1).padStart(2, '0')}`

  content = content.replace(/\r\n/g, '\n')
  content = content.replace(/\nwindow\.Slide\d+ = Slide\d+;\s*$/m, '')

  content = content.replace(/function Slide\d+\(\)/, `export default function ${newName}()`)

  const lines = content.split('\n')
  let insertAt = 0
  for (let j = 0; j < lines.length; j++) {
    const t = lines[j].trim()
    if (t === '' || t.startsWith('//')) insertAt = j + 1
    else break
  }
  if (!content.includes("lesson02Slides.css")) {
    lines.splice(insertAt, 0, "import './lesson02Slides.css'", '')
  }
  content = lines.join('\n')

  content = content.replace(/<section\s+([^>]*)>/, (full, attrs) => {
    if (/\bclassName=/.test(attrs)) {
      return `<section ${attrs.replace(/className="([^"]*)"/, 'className="lesson02-slide $1"')}>`
    }
    return `<section className="lesson02-slide" ${attrs}>`
  })

  const destPath = path.join(destDir, `${newName}.jsx`)
  fs.writeFileSync(destPath, content)
}

console.log('Wrote Slide00.jsx … Slide36.jsx')
