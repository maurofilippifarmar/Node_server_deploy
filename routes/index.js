import express from 'express'
import { getIndex } from '../controller/indexController.js'
const router = express.Router()

router.get('/', getIndex)

export default router