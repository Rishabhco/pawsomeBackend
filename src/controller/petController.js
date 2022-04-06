const Pets = require("../models/petModels.js");
const {v4:uuidv4}=require("uuid")

const home = (req, res) => {
  console.log("Hello this is backend server of Pawsome for hacker Senpai");
  res.status(200).send("Hello this is backend server of Pawsome for hacker Senpai");
};

const adoptPet = async (req, res) => {
    const uuid = uuidv4() + "_" + req.body.petInfo.name;
    const pet = new Pets({
        petid:uuid,
        ...req.body,
        postedBy:req.user._id
    });
    try{
        await job.save();
        res.status(201).send("Pet Adoption Form has been created !!!");
    } catch (error) {
        res.status(400).send(error);
    }
};

const findAllPet = async (req, res) => {
  try {
    const pet = await Pets.find({});
    res.status(200).json({
      status: true,
      message: "All Pets",
      errors: [],
      data: {
        pets: pet,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Unable to read all the pets",
      errors: error,
      data: {},
    });
  }
};


const findSpecificPet = async (req, res) => {
  try {
    const pet = await Pets.find({}).limit(parseInt(req.query.limit));
    res.status(200).json({
      status: true,
      message: "All Pets",
      errors: [],
      data: {
        pets: pet,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Unable to read all the pets",
      errors: error,
      data: {},
    });
  }
};


  const findAllPetCat = async (req, res) => {
    try {
      const job = await Jobs.find({...req.body});
      res.status(200).json({
        status: true,
        message: "All Jobs of specific position",
        errors: [],
        data: {
          jobs: job,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: "Unable to read the jobs",
        errors: error,
        data: {},
      });
    }
  };


module.exports = {
  home,
  adoptPet,
  findAllPet,
  findAllPetCat,
  findSpecificPet
};
