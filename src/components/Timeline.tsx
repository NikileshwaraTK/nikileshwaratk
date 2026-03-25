import { motion } from "framer-motion";

export default function Timeline() {
  const jobs = [
    {
      title: "Emids Technologies",
      role: "Senior Consultant (2024 - Present)",
      desc: "Databricks, PySpark, Healthcare pipelines",
    },
    {
      title: "Euclid Innovations",
      role: "Senior Software Engineer",
      desc: "Hadoop, Hive, Sqoop",
    },
    {
      title: "Cognizant",
      role: "Software Engineer",
      desc: "Spark, Databricks",
    },
    {
      title: "Acert IT Solutions",
      role: "Software Engineer",
      desc: "AWS, Airflow",
    },
  ];

  return (
    <div style={{ padding: "40px", background: "#020617", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Career Journey</h2>

      {jobs.map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ margin: "20px 0" }}
        >
          <h3>{job.title}</h3>
          <p>{job.role}</p>
          <p>{job.desc}</p>
          <hr />
        </motion.div>
      ))}
    </div>
  );
}
