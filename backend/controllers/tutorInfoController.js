const tutorInfoModel = require('../models/tutorInfoModel')

function queryStringToObject(queryString) {
    const obj = {}
    const keyValuePairs = queryString.split('&');
    keyValuePairs.forEach(keyValuePair => {
        const [key, value] = keyValuePair.split('=')
        obj[key] = value
    })
    return obj
}

async function findAllTutors(ctx) {
    // Fetch all Tutors from the database and return as payload
    const tutors = await tutorInfoModel.find({})
    ctx.body = tutors
}

async function addTutor(ctx) {
    // Create New Tutor from payload sent and save to database
    const newTutor = new tutorInfoModel(ctx.request.body)
    const savedNewTutor = await newTutor.save()
    ctx.body = savedNewTutor
}

async function queryTutors(ctx) {
    const query = ctx.params.queryString;
    const obj = queryStringToObject(query);
    const mongodbQuery = {
        $and: [
            { subjects: { $all: [obj.subject] } },
            { price: { $gte: obj.minHourlyRate, $lte: obj.maxHourlyRate } },
            // { lesson_type: { $all: [obj.lessonType] } },
            // { availability: { $all: obj.availability.split(',') } },
            // { gender: { $in: obj.gender.split(',') } },
            // { student_level: { $all: [obj.studentsLevel] } }
        ]
    }
    const tutors = await tutorInfoModel.find(mongodbQuery)
    ctx.body = tutors
}

async function updateTutor(ctx) {
    // Find Tutor based on id
    const id = ctx.params.id
    const tutor = await tutorInfoModel.findById(id)
    const tutorInfo = ctx.request.body
    tutor.name = tutorInfo.name

    // Update Tutor in database
    const updatedTutor = await tutor.save()
    ctx.body = updatedTutor
}

async function deleteTutor(ctx) {
    // Get id from url parameters and find Tutor in database
    const id = ctx.params.id
    const tutor = await tutorInfoModel.findById(id)

    // Delete Tutor from database and return deleted object as reference
    const deletedTutor = await tutor.remove()
    ctx.body = deletedTutor
}

module.exports = {
    findAllTutors,
    queryTutors,
    addTutor,
    updateTutor,
    deleteTutor,
}
