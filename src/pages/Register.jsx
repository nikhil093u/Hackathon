import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useGoogleLogin } from "@react-oauth/google";
import {jwtDecode}  from "jwt-decode";

function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormdata] = useState({
    fname: "",
    lname: "",
    address: "",
    gender: "",
    dob: null,
    phone: "",
  });
  useEffect(() => {
    if (userInfo) {
      setFormdata((prev) => ({
        ...prev,
        fname: userInfo.given_name || "",
        lname: userInfo.family_name || "",
        address: userInfo.email || "",
      }));
    }
  }, [userInfo]);
  const login = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    console.log('access_token:', tokenResponse.access_token);
    const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenResponse.access_token}`,
      },
    });

    const profile = await res.json();
    console.log('User profile:', profile);
    setUserInfo(profile);
  },
  onError: (error) => {
    console.error('Login Failed:', error);
  },
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmittedData(formData);
    setFormdata({
      fname: "",
      lname: "",
      address: "",
      gender: "",
      dob: "",
      phone: "",
    });
    navigate("/learn");
  };

  return (
    <>
      <div className="absolute top-18 right-4 z-16">
        <button
          type="button"
          onClick={login}
          className="block text-lg font-semibold text-gray-700 bg-white px-4 py-1 rounded-full shadow-lg flex items-center space-x-3 hover:shadow-xl transition-all duration-200 transform hover:scale-105 will-change-transform cursor-pointer"
        >
          Login With Google
        </button>
      </div>
      <form onSubmit={submitData}>
        <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-300 py-3">

          <div
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-5  backdrop-blur-lg bg-opacity-95"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <h1 className="text-2xl font-bold text-center mb-1 bg-gradient-to-r from-purple-700 to-blue-300 bg-clip-text text-transparent">
              User Registration
            </h1>

            <div className="space-y-2">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your first name"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-4 py-0.75 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Enter your last name"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-4 py-0.75 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full text-sm px-4 py-0.75 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-4 py-0.75 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="something else">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob || ""}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-4 py-0.75 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-sm px-4 py-0.75 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-blue-300 text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105  will-change-transform hover:from-purple-700 hover:to-red-300 text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
