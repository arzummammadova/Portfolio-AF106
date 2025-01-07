import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'
const app = express();
const port = 5000
let { students } = JSON.parse(fs.readFileSync("db.json"))
app.use(express.json())
console.log(students)
app.get("/", (req, res) => {
    res.send("salam dostlar hello");

})

// 1)"Students" adinda array yaradin db.json faylinda.
// Students property: name, surname, age, isStudent, 
// Postman istifadə edərək yaratdığınız server-ə soruğular göndərin.



// app.get("/api/students",(req,res)=>{
//    res.status(200).send(students)
// })


// // (GET /students), 
// app.get("/api/students", (req, res) => {
//     try {
//         res.status(200).send({ message: "sucsess", data: students })
//     }
//     catch {
//         res.status(500).send({ message: "internal server error " })
//     }

// })



// // (GET / students /:id), 

// app.get("/api/students/:id", (req, res) => {
//     try {
//         const { id } = req.params
//         const student = students.find((student) => student.id == id)
//         if (!student) {
//             res.status(404).send({ message: "student not found" })

//         }
//         res.status(200).send({ message: "sucsess", data: students })

//     }
//     catch {
//         res.status(500).send({ message: "internal servuce error " })
//     }
// })


// // (POST /students), 

// app.post("/api/students", (req, res) => {

//     try {
//         const newUser = req.body;
//         if (!newUser.name || !newUser.surname || !newUser.age) {
//             res.status(404).send({ message: "bad request" })
//         }
//         students.push({ id: uuidv4(), ...newUser })
//         fs.writeFileSync("db.json", JSON.stringify({ students }));
//         res.status(201).send({ message: "User created", data: newUser })

//     }
//     catch (error) {
//         res.status(500).send({ message: "internal service error " })

//     }
// })


// // DELETE /students  /:id)

// app.delete("/api/students/:id", (req, res) => {
//     try {
//         const { id } = req.params
//         const existStudent = students.findIndex((student) => student.id == id)
//         if (existStudent === -1) {
//             res.status(404).send({ message: "not found" })
//         }
//         students.splice(existStudent, 1)
//         fs.writeFileSync("db.json", JSON.stringify({ students }))
//         res.status(200).send({ message: "deleted succcesfully" })
//     }
//     catch {
//         res.status(500).send({ message: "internal service error" })
//     }

// })


// // (PUT / students  /:id)

// app.put("/api/students/:id", (req, res) => {
//     try {
//         const { id } = req.params
//         const updated = req.body
//         const existStudentIndex = students.findIndex((student) => student.id == id)
//         if (existStudentIndex == -1) {
//             res.status(404).send({ message: "not found" })
//         }
//         students[existStudentIndex] = { id, ...updated }
//         fs.writeFileSync("db.json", JSON.stringify({ students }))
//         res.status(200).send({ message: "sucsess", data: students[existStudentIndex] })
//     }

//     catch (error) {

//         res.status(500).send({ message: "internal server error" })
//     }

// })


// app.patch("/api/students/:id", (req, res) => {
//     try {
//         const { id } = req.params
//         const updated = req.body
//         const existStudentIndex = students.findIndex((student) => student.id == id)
//         if (existStudentIndex == -1) {
//             res.status(404).send({ message: "not found" })
//         }
//         students[existStudentIndex] = { id, ...updated }
//         fs.writeFileSync("db.json", JSON.stringify({ students }))
//         res.status(200).send({ message: "sucsess", data: students[existStudentIndex] })
//     }

//     catch (error) {

//         res.status(500).send({ message: "internal server error" })
//     }

// })



const getAll = (req, res) => {
    try {
        res.status(200).send({ message: "sucsess", data: students })
    }
    catch {
        res.status(500).send({ message: "internal server error " })
    }
};
const getById= (req, res) => {
    try {
        const { id } = req.params
        const student = students.find((student) => student.id == id)
        if (!student) {
            res.status(404).send({ message: "student not found" })

        }
        res.status(200).send({ message: "sucsess", data: students })

    }
    catch {
        res.status(500).send({ message: "internal servuce error " })
    }
}
const addStudent= (req, res) => {

    try {
        const newUser = req.body;
        if (!newUser.name || !newUser.surname || !newUser.age) {
            res.status(404).send({ message: "bad request" })
        }
        students.push({ id: uuidv4(), ...newUser })
        fs.writeFileSync("db.json", JSON.stringify({ students }));
        res.status(201).send({ message: "User created", data: newUser })

    }
    catch (error) {
        res.status(500).send({ message: "internal service error " })

    }
}

const deleteByID=(req, res) => {
    try {
        const { id } = req.params
        const existStudent = students.findIndex((student) => student.id == id)
        if (existStudent === -1) {
            res.status(404).send({ message: "not found" })
        }
        students.splice(existStudent, 1)
        fs.writeFileSync("db.json", JSON.stringify({ students }))
        res.status(200).send({ message: "deleted succcesfully" })
    }
    catch {
        res.status(500).send({ message: "internal service error" })
    }

}
const  updatebyId= (req, res) => {
    try {
        const { id } = req.params
        const updated = req.body
        const existStudentIndex = students.findIndex((student) => student.id == id)
        if (existStudentIndex == -1) {
            res.status(404).send({ message: "not found" })
        }
        students[existStudentIndex] = { id, ...updated }
        fs.writeFileSync("db.json", JSON.stringify({ students }))
        res.status(200).send({ message: "sucsess", data: students[existStudentIndex] })
    }

    catch (error) {

        res.status(500).send({ message: "internal server error" })
    }

}

const patchbyId= (req, res) => {
    try {
        const { id } = req.params
        const updated = req.body
        const existStudentIndex = students.findIndex((student) => student.id == id)
        if (existStudentIndex == -1) {
            res.status(404).send({ message: "not found" })
        }
        students[existStudentIndex] = { id, ...updated }
        fs.writeFileSync("db.json", JSON.stringify({ students }))
        res.status(200).send({ message: "sucsess", data: students[existStudentIndex] })
    }

    catch (error) {

        res.status(500).send({ message: "internal server error" })
    }

}

app.get("/api/students",getAll)
app.get("/api/students/:id",getById)
app.post("/api/students",addStudent)
app.delete("/api/students/:id",deleteByID)
app.put("/api/students/:id",updatebyId);
app.patch("/api/students/:id",patchbyId)











app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})