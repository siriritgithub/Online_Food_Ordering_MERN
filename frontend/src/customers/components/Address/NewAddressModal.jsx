// NewAddress.js
import React from 'react';
import { Modal, Box } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import addressService from '../services/addressService';

const initialValues = {
  streetAddress: '',
  state: '',
  pincode: '',
  city: '',
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required('Street Address is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.string()
    .required('Pincode is required')
    .matches(/^\d{6}$/, 'Pincode must be 6 digits'),
  city: Yup.string().required('City is required'),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  outline: 'none',
  p: 4,
};

const NewAddress = ({ open, handleClose }) => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await addressService.createAddress(values);
      console.log(response); // Handle success response (optional)
      resetForm();
      handleClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error saving address:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          <Form>
            {/* Form fields... */}
            <Grid container spacing={2}>
              {/* Form fields... */}
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Deliver Here
            </Button>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
};

export default NewAddress;
