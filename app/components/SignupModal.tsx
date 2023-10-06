"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

export default function SignupModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      city: "",
      password: "",
    });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="border bg-cyan-500 py-1 px-4 rounded mr-3 text-white font-bold hover:bg-cyan-800 "
      >
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ width: "600px" }}>
          <div className="flex justify-end mb-5">
            <Button
              onClick={handleClose}
              className="text-white bg-red-600 px-4 py-2 font-semibold hover:bg-red-800 "
            >
              Close
            </Button>
          </div>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="flex justify-center font-bold text-4xl uppercase my-5 p-3 "
          >
            Sign Up
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 px-5 ">
                <div>
                  <input
                    className="border-2 px-4 py-2 border-black  w-full"
                    placeholder="First Name"
                    value={user.firstname}
                    name="firstname"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className="border-2 px-4 py-2 border-black w-full"
                    placeholder="Last Name"
                    name="lastname"
                    type="text"
                    value={user.lastname}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className="border-2 px-4 py-2 border-black w-full"
                    placeholder=" Email Address"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className="border-2 px-4 py-2 border-black w-full"
                    placeholder=" Phone Number"
                    name="phone"
                    type="text"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className=" col-span-2">
                  <input
                    className="border-2 px-4 py-2 border-black w-full"
                    name="city"
                    value={user.city}
                    placeholder=" City"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2">
                  <input
                    className="border-2 px-4 py-2 border-black w-full "
                    name="password"
                    value={user.password}
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-center my-4">
                <button
                  className="px-10 py-2 text-white bg-cyan-600 hover:bg-cyan-900 rounded"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
