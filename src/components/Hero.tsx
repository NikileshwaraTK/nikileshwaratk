import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Certifications from "./Certifications";

export default function Hero() {
  const [name, setName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setName(user);
  }, []);

  return (
    <div>
      {/* HERO */}
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          background: "linear-gradient(to right, #0f172a, #1e293b)",
          color: "white",
        }}
      >
        <motion.img
          src={profile}
          alt="profile"
          style={{ width: "200px", borderRadius: "50%" }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nikileshwara T K
        </motion.h1>

        <p>Data Engineer | Azure | AWS | Big Data</p>

        {name && <h3>Welcome {name} 👋</h3>}
      </div>

      <Timeline />
      <Skills />
      <Certifications />
    </div>
  );
}
