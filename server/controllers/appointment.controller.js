import chalk from "chalk";
import doctorModel from "../models/doctor.model.js";
import userModel from '../models/user.model.js';
import appointmentModel from '../models/appointment.model.js'

export const bookAppointmentController = async (req, res) => {
  try {
    const { userId, doctorId, dateSlot, timeSlot } = req.body;

    // Check if userId and doctorId exist in request body
    if (!userId || !doctorId) {
      return res.status(400).json({ success: false, message: "User ID and Doctor ID are required." });
    }

    // Fetch Doctor Data
    const doctor = await doctorModel.findById(doctorId).select('-password');
    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    // Fetch User Data
    const user = await userModel.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if doctor has slots booked
    let slotsBooked = doctor.slotsBooked || {}; // Ensure it's initialized

    // Check if slot is already booked
    if (slotsBooked[dateSlot] && slotsBooked[dateSlot].includes(timeSlot)) {
      return res.status(400).json({ success: false, message: 'Slot is already booked. Try another slot.' });
    }

    // Book the slot
    if (!slotsBooked[dateSlot]) {
      slotsBooked[dateSlot] = [];
    }
    slotsBooked[dateSlot].push(timeSlot);

    // Create appointment data with required fields
    const appointmentData = {
      doctorData: {
        id: doctorId,
        name: doctor.name,
        email:doctor.email,
        specialization: doctor.specialization,
        image:doctor.image,
        experience:doctor.experience,
        qualification:doctor.qualifications,
        location:doctor.location,
        consultationFee:doctor.consultationFee
      },
      userData: {
        id: userId,
        name: user.name,
        email: user.email
      },
      doctorId,
      userId,
      dateSlot,
      timeSlot,
      amount: doctor.fees ||0,
      createdAt: new Date()
    };

    // Save appointment in database
    const appointment = new appointmentModel(appointmentData);
    await appointment.save();

    // Update doctor's booked slots
    await doctorModel.findByIdAndUpdate(doctorId, { slotsBooked });

    res.status(201).json({ success: true, message: 'Appointment Booked' });
  } catch (error) {
    console.log(
      chalk.bgRed("Error in bookAppointmentController in appointment.controller.js ===> ", error)
    );
    if (error.code === 'ECONNRESET') {
      return res.status(500).json({ success: false, message: "Server connection lost. Please retry." });
    }

    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



export const allAppointmentsController = async(req,res) =>{
  try {
    const {userId} = req.body
    const allappointments = await appointmentModel.find({userId})
    res.status(200).json({success: true, allappointments})
  } catch (error) {
    console.log(
      chalk.bgRed("Error in allAppointmentsController in appointment.controller.js ===> ", error)
    );
    if (error.code === 'ECONNRESET') {
      return res.status(500).json({ success: false, message: "Server connection lost. Please retry." });
    }

    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
