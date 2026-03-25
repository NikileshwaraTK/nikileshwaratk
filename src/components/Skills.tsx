import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "PySpark", level: "90%" },
    { name: "Azure Databricks", level: "85%" },
    { name: "AWS", level: "80%" },
    { name: "SQL", level: "90%" },
    { name: "Airflow", level: "75%" },
  ];

  return (
    <div style={{ padding: "40px", background: "#020617", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Skills</h2>

      {skills.map((skill, i) => (
        <div key={i} style={{ marginBottom: "15px" }}>
          <p>{skill.name}</p>

          <div style={{ background: "#1e293b", height: "10px" }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: skill.level }}
              transition={{ duration: 1 }}
              style={{ height: "10px", background: "#3b82f6" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
