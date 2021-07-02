import fs from 'fs'
// import path from 'path'
// import superagent from 'superagent'
import cheerio from 'cheerio'
import { Analyzer } from './crowller'

interface Course {
  title: string
  count: number
}

interface CourseResult {
  time: number
  data: Course[]
}

interface Content {
  [propName: number]: Course[]
}

export default class lxAnalyzer implements Analyzer{
  private static instance: lxAnalyzer

  static getInstance() {
    if (!this.instance) {
      this.instance = new lxAnalyzer()
    }
    return this.instance
  }

  private constructor() {}

  private getCourseInfo(html: string) {
    const $ = cheerio.load(html)
    const courseItems = $('.course-item')
    const courseInfos: Course[] = []
    courseItems.map((index, ele) => {
      const random = (Math.floor(Math.random() * 100)).toString()
      const descs = $(ele).find('.course-desc')
      const title = descs.eq(0).text()
      const count = parseInt(descs.eq(0).text().split('：')[1] || random, 10)
      courseInfos.push({ title, count })
    })
    return {
      time: new Date().getTime(),
      data: courseInfos
    }
  }

  private generateJsonContent(courseResult: CourseResult, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[courseResult.time] = courseResult.data
    return fileContent
  }
  
  public analyze(html: string, filePath: string) {
    const courseResult = this.getCourseInfo(html)
    const fileContent = this.generateJsonContent(courseResult, filePath)
    return JSON.stringify(fileContent)
  }

}