import express from "express"
import fs from 'fs'
import { createNewUser, deleteUser, getAllUsers, getSingleUser, updateUser } from "../controller/usersController.js"
const router = express.Router()


router.get('/', getAllUsers)

router.get('/:id', getSingleUser)

router.post('/', createNewUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router