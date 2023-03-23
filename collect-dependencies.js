const fs = require('fs')
const path = require('path')

const dependencyCounts = {}

for (const filePath of process.argv.slice(2)) {
  const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  const packageDependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  }

  for (const dep in packageDependencies) {
    if (dependencyCounts[dep]) {
      dependencyCounts[dep]++
    } else {
      dependencyCounts[dep] = 1
    }
  }
}

const data = Object.entries(dependencyCounts).map(([value, count]) => ({
  value,
  count,
}))

data.sort((a, b) => b.count - a.count)

const outputFilePath = path.join(__dirname, 'dependency-counts.json')
fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2))

console.log(`Saved dependency counts to ${outputFilePath}`)
