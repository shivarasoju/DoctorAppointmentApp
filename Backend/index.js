const express = require('express')
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const { v4: uuidv4 } = require('uuid')
const path = require('path')
const cors=require('cors')
const extraDoctors=require('./docDetails')
const sampleDoctors=require('./allDocDetails')
require('dotenv').config()

const PORT=process.env.PORT || 3000

const app = express()

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
];

app.use(express.json())

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);


let db = null
const dbPath = path.join(__dirname, 'doctorAppointment.db')
let uuidList=[]
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    await db.run(`
      CREATE TABLE IF NOT EXISTS doctors (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        specialization TEXT NOT NULL,
        profile_image TEXT,
        availability TEXT NOT NULL
      )
    `)

    await db.run(`CREATE TABLE IF NOT EXISTS doctor_details (
    doctor_id TEXT PRIMARY KEY,
    qualification TEXT,
    experience TEXT,
    consultation_fee TEXT,
    hospital_location TEXT,
    ratings REAL,
    availability_schedule TEXT,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);
`)
    
    const  count1  = await db.get(`SELECT COUNT(*) AS count FROM doctors`)
    const count2=await db.get(`SELECT COUNT(*) AS count FROM doctor_details`)
    
    if(count1.count===0 && count2.count===0){
          for (let i = 0; i < extraDoctors.length; i++) {
          const doctor = extraDoctors[i];
          const docDetails=sampleDoctors[i]
          const uuid=uuidv4()

          await db.run(
            `INSERT INTO doctor_details (doctor_id, qualification, experience, consultation_fee, hospital_location, ratings, availability_schedule)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
              uuid,
              doctor.qualification,
              doctor.experience,
              doctor.consultation_fee,
              doctor.hospital_location,
              doctor.ratings,
              JSON.stringify(doctor.availability_schedule),
            ]
          );

          await db.run(
            `INSERT INTO doctors (id, name, specialization, profile_image, availability)
            VALUES (?, ?, ?, ?, ?)`,
            [uuid, docDetails[0], docDetails[1], docDetails[2], docDetails[3]]
          );
}
}
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
    }    
   catch (e) {
    console.error('Database error:', e.message)
  }
}

initializeDBAndServer()

app.get('/', async (req, res) => {
  try {
    const doctors = await db.all('SELECT * FROM doctors')
    res.json(doctors)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})


app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const query=`select * from doctors inner join doctor_details on doctors.id=doctor_details.doctor_id WHERE doctor_id = ?`
    const result = await db.get(query, [id]);
    if (!result) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    result.availability_schedule = JSON.parse(result.availability_schedule);

    res.json(result);
  } catch (e) {
    console.error(`Error in parameter module:`, e.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});
