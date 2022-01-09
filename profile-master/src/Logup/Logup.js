import Input from "../components/UI/Input/Input";
import { useState } from "react";

function Logup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="container-fluid logup-fluid">
      <div className="row logup">
        <h1 className="text-center">Đăng kí </h1>
        <Input
          className="mb-3"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <Input
          className="mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />

        <div className="text-center mb-3">
          <button className="btn btn-success">Đăng kí</button>
        </div>
      </div>
    </div>
  );
}
export default Logup;
