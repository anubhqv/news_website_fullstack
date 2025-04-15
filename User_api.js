const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('./../models/User');

// Signup Route
router.post('/signup', (req, res) => {
   
    let { name, email, Password, DOB } = req.body;
    
    // ✅ Sanitize inputs safely
    name = name ? name.trim() : "";
    email = email ? email.trim() : "";
    Password = Password ? Password.trim() : "";
   
    

    // ✅ Basic validation
    if (!name || !email || !Password) {
        return res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    }

    // ✅ Name validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        return res.json({
            status: "FAILED",
            message: "Invalid name entered."
        });
    }

    // ✅ Email validation
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return res.json({
            status: "FAILED",
            message: "Invalid email format."
        });
    }



    // ✅ Password strength
    if (Password.length < 8) {
        return res.json({
            status: "FAILED",
            message: "Password must be at least 8 characters long."
        });
    }

    // ✅ Check if user exists
    User.find({ email }).then(result => {
        if (result.length > 0) {
            return res.json({
                status: "FAILED",
                message: "User already exists with this email."
            });
        } else {
            // ✅ Encrypt password
            const saltRounds = 10;
            bcrypt.hash(Password, saltRounds)
                .then(hashedPassword => {
                    const newUser = new User({
                        name,
                        email,
                        Password: hashedPassword,
                    });

                    newUser.save()
                        .then(result => {
                            res.json({
                                status: "SUCCESS",
                                message: "Signup successful!",
                                data: result
                            });
                        })
                        .catch(err => {
                            res.json({
                                status: "FAILED",
                                message: "Error saving user to the database."
                            });
                        });
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "Error hashing the password."
                    });
                });
        }
    }).catch(err => {
        console.error(err);
        res.json({
            status: "FAILED",
            message: "An error occurred while checking for existing user."
        });
    });
});

router.post('/signin',(req,res)=>{
    let { name, email, Password} = req.body;

    // ✅ Sanitize inputs safely
    email = email.trim();
    Password =Password.trim();
    if(email==""||Password==""){
        res.json({
            status:"failed",
            message:"Empty fields"
        })
    }else{
        User.find({email}).then(data=>{
            if(data.length){
              const hashedPassword=data[0].Password;
              bcrypt.compare(Password,hashedPassword).then(result=>{
                if(result){
                    res.json({status: "success",
                    message:"sign in complete",
                    data:data
                })
                }else{
                    res.json({
                        status:"Failed",
                        message:"invalid password or username"
                    })
                }
              }).catch(err=>{
                  res.json({
                  status:"failed",
                message:"error occured"
            })
              })
            }else{
                res.json({
                    status:"failed",
                message:"invalid credentials"
                })
            }
        }).catch(err=>{
            res.json({
                status:"failed",
                message:"error occured while checking for user"
            })
        })
    }
})
module.exports = router;
