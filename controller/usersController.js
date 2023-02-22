import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const userData = fs.readFileSync('./data/users.json');
const originalUserData = JSON.parse(userData);

export const getAllUsers = (req, res, next) => {
    res.send(originalUserData);
};

export const getSingleUser = (req, res, next) => {
    const user = originalUserData.users.find(
        (user) => user.id === Number(req.params.id)
    );
    if (user) {
        res.send(user);
    } else {
        res.send("user doesn't exist");
    }
};

export const createNewUser =(req, res, next) => {
    let newUser = {id: uuidv4(), ...req.body}
    originalUserData.users.push(newUser)
    fs.writeFileSync('./data/users.json', JSON.stringify(originalUserData, null, 2 ))
    res.send('new user added')
}

export const updateUser = (req,res,next) => {
    let users = {...originalUserData, users: originalUserData.users.map(user => {
        if (user.id === req.params.id){
            let updatedUser = {...user,...req.body}
            return updatedUser
        } else{
            return user
        }

    })}
    fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2))
    res.send("user updated")
}

export const deleteUser =(req,res, next) => {
    let users = {...originalUserData, users: originalUserData.users.filter(user => user.id !== req.params.id )}
    fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2))
    res.send('User deleted')
}