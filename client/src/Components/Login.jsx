import { useState } from "react";

const Login = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State for showing alert

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://anime-api-s3cz.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
        localStorage.setItem("userId", data.user.id);
        setShowAlert(true); // Show alert on successful login
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    onClose();
  };

  return (
    <>
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="bg-dark p-4 text-neon rounded shadow-md">
            <p>Login successful!</p>
            <button onClick={handleCloseAlert} className="btn text-neon mt-2">
              Close
            </button>
          </div>
        </div>
      )}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-20">
        <div className="card w-full max-w-md bg-black p-4 shadow-xl z-30">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
        <button onClick={onClose} className="btn text-neon">
          Close
        </button>
      </div>
    </>
  );
};

export default Login;
