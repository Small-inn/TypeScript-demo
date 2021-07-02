// ts 引入 js库 会有问题
// ts ---> .d.ts 翻译文件 @types/npm-name ---> js
import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
// import cheerio from 'cheerio'


export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json')

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess()
  }

  async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content)
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    this.writeFile(fileContent)
  }
  
}

export default Crowller



// const analyzer = new LxAnalyzer()



