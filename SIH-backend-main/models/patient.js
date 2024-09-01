// Define the Patient schema
//first circle
const patientSchema = new Schema({
    patientId: { type: Schema.Types.ObjectId, required: true, unique: true },
    doctorName: { type: String, required: true },
    doctorEmail: { type: String, required: true },
    patientEmail: { type: String, required: true },
    age: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    alcoholic: { type: Boolean, required: true },
    smokes: { type: Boolean, required: true },
    weight: { type: Number, required: true },
    reports: [{ type: Schema.Types.ObjectId, ref: 'Report' }]
  }, { timestamps: true });
  
  // Create the Patient model
  const Patient = mongoose.model('Patient', patientSchema);
  
  module.exports = Patient;
  