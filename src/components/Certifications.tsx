import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      name: "Azure Data Engineer (DP-203)",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/NikileshwaraTK-3810/14E3872DF019FB4F?sharingId",
    },
    {
      name: "AWS Data Engineer Associate",
      link: "https://www.credly.com/badges/9c54484e-5f96-4d29-b649-4e685e93c376/public_url",
    },
  ];

  return (
    <div style={{ padding: "40px", background: "#020617", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Certifications</h2>

      <ul>
        {certs.map((c, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href={c.link} target="_blank" rel="noreferrer">
              {c.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
