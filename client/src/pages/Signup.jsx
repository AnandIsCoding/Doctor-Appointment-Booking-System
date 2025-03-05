import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addUser } from "../redux/slices/userSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);

  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    image: null,
  });

  // Single onChange handler
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value, // Handle file input separately
    }));
  };

  const handleSignupBtn = async (event) => {
    event.preventDefault();

    if (formData.age < 18 || formData.age > 110) {
      toast.error("Age must be Minimum 18");
      return;
    }
    if (!formData.image) {
      return toast.error("Please upload a profile image");
    }

    // Show loading toast
    const loadingToast = toast.loading("Please Wait .... ");
    setIsloading(true);

    try {
      // Create FormData
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("image", formData.image); 

      // Make the API call to register or signup the user
      const response = await axios.post(
        "https://dochealth.onrender.com/api/v1/user/signup",
        formDataToSend,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message, {
          style: {
            border: '1px solid #27DFB3',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#27DFB3',
            secondary: '#27DFB3',
          },
        });
        dispatch(addUser(response.data.user));
        navigate("/patient");
      } else {
        console.log(formDataToSend);
        console.log(response.data.message);
        toast.error(response?.data?.error || response?.data?.messsage);
      }
    } catch (error) {
      console.log("Error in handleSignupBtn in Signup.jsx ----->>", error);
      toast.error(
        error.response?.data?.error || "An unexpected error occurred!"
      );
    } finally {
      setIsloading(false);
      toast.dismiss(loadingToast);
    }
  };

  const handleLoginBtn = async (event) => {
    setIsloading(true);
    event.preventDefault();
    if (formData.email.trim().length < 5)
      return toast.error("Please enter a valid email");

    // Show loading toast
    const loadingToast = toast.loading("Please Wait .... ");
    setIsloading(true);

    // call backend api to login
    try {
      const response = await axios.post(
        `https://dochealth.onrender.com/api/v1/user/login`,
        { email: formData.email, password: formData.password },
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success(response.data.message, {
          style: {
            border: '1px solid #27DFB3',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#27DFB3',
            secondary: '#27DFB3',
          },
        });
        dispatch(addUser(response.data.user));
        navigate("/patient");
      } else {
        console.log(response.data.message);
        toast.error(response?.data?.error || response?.data?.messsage);
      }
    } catch (error) {
      console.log("Error in handleLoginBtn in Signup.jsx ----->>", error);
      toast.error(
        error.response?.data.message || "An unexpected error occurred!"
      );
    } finally {
      setIsloading(false);
      toast.dismiss(loadingToast);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="mt-28 w-full flex justify-center items-center mb-8">
        <div className="bg-black rounded-lg py-3 px-3 w-[95%] md:w-[80%] md:h-fit lg:h-[42vw] md:flex">
          {/* Image Section */}
          <div className="w-full md:w-[50%] h-full bg-blue-700 overflow-hidden rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644057.jpg?t=st=1740641507~exp=1740645107~hmac=bb9b4bad4389b45a6eaf2d75cd5b34fa15dfa228a1a0ff7aa3d6d06460a05780&w=1380"
              alt="signupPage_image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Signup Form */}
          <div className="w-full md:w-[50%] pt-5">
            <h1 className="text-black text-xl md:text-2xl font-bold w-[60%] md:w-[50%] pl-5 py-2 bg-white rounded-r-full">
              {isSignup ? "Welcome" : "Welcome Back"}
            </h1>

            <form className="w-full pt-4 pl-8 flex flex-col md:pr-32">
              {/* Name Field (Signup Only) */}
              {isSignup && (
                <>
                  <label
                    htmlFor="name"
                    className="text-white cursor-pointer text-sm"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Username"
                    value={formData.name}
                    onChange={handleChange}
                    required={true}
                    className="bg-none border-b-2 border-zinc-400 text-white px-4 py-2 outline-none"
                  />
                </>
              )}

              {/* Email Field */}
              <label
                htmlFor="email"
                className="text-white cursor-pointer text-sm mt-2"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="User email"
                value={formData.email}
                onChange={handleChange}
                required={true}
                className="bg-transparent border-b-2 border-zinc-400 text-white px-4 py-2 outline-none"
              />

              {/* Password Field */}
              <label
                htmlFor="password"
                className="text-white cursor-pointer text-sm mt-2"
              >
                Password
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="true"
                placeholder="User password"
                value={formData.password}
                onChange={handleChange}
                required={true}
                className="bg-transparent border-b-2 border-zinc-400 text-white px-4 py-2 outline-none"
              />
              <p
                className="text-end text-sm font-semibold text-white cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? "show password" : "hide password"}
              </p>

              {/* Additional Fields (Signup Only) */}
              {isSignup && (
                <>
                  <label
                    htmlFor="age"
                    className="text-white cursor-pointer text-sm mt-2"
                  >
                    Age
                  </label>
                  <input
                    name="age"
                    type="number"
                    placeholder="User age"
                    value={formData.age}
                    onChange={handleChange}
                    required={true}
                    className="bg-transparent border-b-2 border-zinc-400 text-white px-4 py-2 outline-none"
                  />

                  <label
                    htmlFor="gender"
                    className="text-white cursor-pointer text-sm mt-2"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                    required={true}
                    className="bg-transparent border-b-2 border-zinc-400 text-sm text-white px-4 py-2 outline-none mt-2"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male" className="text-green-800">
                      Male
                    </option>
                    <option value="female" className="text-green-800">
                      Female
                    </option>
                    <option value="other" className="text-green-800">
                      Other
                    </option>
                  </select>

                  <label
                    htmlFor="image"
                    className="text-white cursor-pointer text-sm mt-2"
                  >
                    Profile Image
                  </label>
                  <input
                    name="image"
                    type="file"
                    onChange={handleChange}
                    required={true}
                    accept="image/*"
                    className="bg-transparent border-b-2 border-zinc-400 text-white px-4 py-2 outline-none mt-2 cursor-pointer"
                  />
                </>
              )}

              {/* Switch Between Signup & Login */}
              <h2 className="text-center text-white mt-5">
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <span
                  onClick={() => setIsSignup((prev) => !prev)}
                  className="text-[#1dd2f6] cursor-pointer mx-2"
                >
                  {isSignup ? "Login here" : "Signup here"}
                </span>
              </h2>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={isSignup ? handleSignupBtn : handleLoginBtn}
                className={`w-full text-center text-black text-xl font-bold bg-[#27DFB3] py-2 rounded-lg transition-all duration-300 hover:bg-[#88e1eb] mt-4 ml-[-4vw] md:ml-0 cursor-pointer ${
                  !isSignup ? "mt-42 md:mt-62" : "mt-0"
                } `}
              >
                {isSignup ? "Signup" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
