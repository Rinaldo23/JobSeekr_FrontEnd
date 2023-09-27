import axios from 'axios';
import React, { useState } from 'react';

const JobForm = () => {
  const [formData, setFormData] = useState({
    image: '', 
    date: '', 
    title: '', 
    companyDesc: '',
    companyname: '',
    designation: '',
    experience: '',
    location: '',
    batch: '',
    eligibility: '',
    applyLink: '',
    jobDesc: [''], 
    jobResponsibilities: [''],
    skills: [''],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle special cases for arrays and booleans
   if (name === 'jobDesc' || name === 'jobResponsibilities' || name === 'skills') {
      let updatedArray = [...formData[name]];
      updatedArray = value.split(",");
      setFormData({
        ...formData,
        [name]: updatedArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit =async (e) => {

    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verifyToken`,formData)

    try {
        e.preventDefault();
        // console.log(formData)
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/addJob`,formData)
        console.log("submit success")
      } catch (error) {
        console.error("Error sending message:", error);
      }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Job Information</h2>
 
        {/* Image */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Image Link
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Date */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
         {/* Experience */}
        <div className="mb-4">
          <label htmlFor="experience" className="block text-gray-700 text-sm font-bold mb-2">
             Experinence
          </label>
          <input
            type="text"
            name="experience"
            id="experience"
            value={formData.experience}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Designation */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={formData.designation}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Batch */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Batch
          </label>
          <input
            type="text"
            name="batch"
            id="batch"
            value={formData.batch}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Job Description */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Job Description
          </label>
          <input
            type="text"
            name="jobDesc"
            id="jobDesc"
            value={formData.jobDesc}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
        {/* Company Name */}
        <div className="mb-4">
          <label htmlFor="companyname" className="block text-gray-700 text-sm font-bold mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="companyname"
            id="companyname"
            value={formData.companyname}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Company Description */}
        <div className="mb-4">
          <label htmlFor="companyname" className="block text-gray-700 text-sm font-bold mb-2">
            Company Description
          </label>
          <input
            type="text"
            name="companyDesc"
            id="companyDesc"
            value={formData.companyDesc}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Location */}
        <div className="mb-4">
          <label htmlFor="companyname" className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Apply Link */}
        <div className="mb-4">
          <label htmlFor="applyLink" className="block text-gray-700 text-sm font-bold mb-2">
            Apply Link
          </label>
          <input
            type="text"
            name="applyLink"
            id="applyLink"
            value={formData.applyLink}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Skills */}
        <div className="mb-4">
          <label htmlFor="companyname" className="block text-gray-700 text-sm font-bold mb-2">
           Skills
          </label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={formData.skills}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
         {/* Eligibility */}
         <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
           Eligibility
          </label>
          <input
            type="text"
            name="eligibility"
            id="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Job Responsibilities */}
            <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
           Job Responsibilities
          </label>
          <input
            type="text"
            name="jobResponsibilities"
            id="jobResponsibilities"
            value={formData.jobResponsibilities}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="w-full p-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default JobForm;
