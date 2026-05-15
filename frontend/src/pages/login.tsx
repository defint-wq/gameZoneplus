import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Backend-ийн login API руу хүсэлт илгээх
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Нэвтрэхэд алдаа гарлаа");
      }

      // 1. Token-ийг хадгалах
      localStorage.setItem("token", data.token);

      // 2. Амжилттай бол нүүр хуудас руу шилжих
      navigate("/");

      // Хэрэв та хуудсыг бүтнээр нь дахин ачаалж (refresh)
      // Auth төлөвийг шинэчлэх хүсэлтэй бол window.location.reload() ашиглаж болно
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Нэвтрэх</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Имэйл хаяг"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Нууц үг"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Шалгаж байна..." : "Нэвтрэх"}
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Шинэ хэрэглэгч үү? <Link to="/register">Бүртгүүлэх</Link>
      </p>
    </div>
  );
};

// Загвар (Register хуудастай ижил байлгавал эвтэйхэн)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    width: "320px",
    gap: "15px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  input: {
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#28a745", // Нэвтрэх товчийг ногоон болгов
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold" as const,
  },
  error: {
    color: "#d9534f",
    backgroundColor: "#f2dede",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "14px",
    textAlign: "center" as const,
  },
};

export default Login;
