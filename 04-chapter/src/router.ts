import { Router, Request, Response } from 'express'
import Crowller from './crowller'
import LxAnalyzer from './lxAnalyzer'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})


router.get('/bye', (req: Request, res: Response) => {
  const secret = 'secretKey'
  const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
  // 使用单例模式
  const analyzer = LxAnalyzer.getInstance()
  new Crowller(url, analyzer)

  res.send('Get Data Success')
})

export default router