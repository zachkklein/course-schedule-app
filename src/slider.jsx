import React from "react";
import { motion } from "framer-motion";

const FractionSlider = ({ numerator, denominator }) => {
  const percentage = (numerator / denominator) * 100;

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={styles.progress}
      />
      <div style={styles.label}>{numerator}/{denominator}</div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "30px",
    backgroundColor: "#e0e0e0",
    borderRadius: "15px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "inset 0 0 5px rgba(0,0,0,0.2)",
  },
  progress: {
    height: "100%",
    backgroundColor: "#72b0f3",
    borderRadius: "15px",
  },
  label: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    lineHeight: "30px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default FractionSlider;
