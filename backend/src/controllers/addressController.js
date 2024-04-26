// addressController.js
const Address = require('../models/adress.model');

// Controller function to create a new address
exports.createAddress = async (req, res) => {
  try {
    const { streetAddress, state, pincode, city } = req.body;

    // Create a new address instance
    const newAddress = new Address({
      streetAddress,
      state,
      pincode,
      city,
    });

    // Save the new address to the database
    await newAddress.save();

    // Respond with success message
    res.status(201).json({ message: "Address created successfully", address: newAddress });
  } catch (error) {
    console.error("Error creating address:", error);
    res.status(500).json({ message: "Error creating address" });
  }
};
