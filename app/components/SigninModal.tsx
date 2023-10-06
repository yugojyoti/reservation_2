import * as React from "react";
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
  email: string;
  password: string;
}

export default function SigninModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = React.useState<IUser>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
    setUser({ email: "", password: "" });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="bg-blue-500 text-white border py-1 px-4 mr-3 rounded font-bold hover:bg-blue-800"
      >
        Sign In{" "}
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
            className="flex justify-center ont-bold text-4xl uppercase"
          >
            Sign In
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 px-5 ">
                <div className="col-span-2">
                  <input
                    className="border-2 px-4 py-2 border-black w-full"
                    placeholder=" Email Address"
                    name="email"
                    type="email"
                    value={user.email}
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
                  className="px-10 py-2 text-white bg-blue-600 hover:bg-blue-900 rounded"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
