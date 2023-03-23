import './App.css'
import { TagCloud } from 'react-tagcloud'

//! You can use different word cloud libraries WordCloud from 'react-d3-cloud'
// import WordCloud from 'react-d3-cloud'
// import { scaleOrdinal } from 'd3-scale'
// import { schemeCategory10 } from 'd3-scale-chromatic'
import data from './dependency-counts.json'

const ignoreWords = ['babel', 'webpack', '@types']

//! Uncommented code if you need WordCloud from 'react-d3-cloud'
// const wordCloudData = data
//   .map((item) => ({
//     text: item.value,
//     value: item.count * 5,
//   }))
//   .filter((item) => !ignoreWords.some((word)=>item.text.includes(word)))

const wordCloudDataLine = data
  .map((item) => ({
    value: item.value,
    count: item.count,
  }))
  .filter((item) => !ignoreWords.some((word) => item.value.includes(word)))

//! Uncommented code if you need WordCloud from 'react-d3-cloud'
// const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10)

export default function App() {
  return (
    <div className="App">
      {/* <WordCloud
        data={wordCloudData}
        width={window.innerWidth}
        height={window.innerHeight}
        font="Times"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 5}
        spiral="rectangular"
        rotate={(word) => word.value % 360}
        padding={5}
        random={Math.random}
        fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
      /> */}

      <TagCloud minSize={12} maxSize={35} tags={wordCloudDataLine} />
    </div>
  )
}
