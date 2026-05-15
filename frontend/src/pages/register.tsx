import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      const response = await fetch("http://localhost:5173/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          role: "player",
        }),
      });

      const text = await response.text();

      if (!text) {
        throw new Error("Серверээс хоосон хариу ирлээ.");
      }

      const data = JSON.parse(text);

      if (!response.ok) {
        throw new Error(data.error || "Алдаа гарлаа");
      }

      if (!response.ok) {
        throw new Error(data.error || "Бүртгэл амжилтгүй боллоо");
      }

      // Амжилттай болвол Token-ийг хадгалаад нүүр хуудас руу шилжих
      localStorage.setItem("token", data.token);
      alert("Бүртгэл амжилттай!");
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Бүртгүүлэх</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Хэрэглэгчийн нэр"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

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
          {loading ? "Түр хүлээнэ үү..." : "Бүртгүүлэх"}
        </button>
      </form>

      <p>
        Акаунттай юу? <Link to="/auth/login">Нэвтрэх</Link>
      </p>
    </div>
  );
};

// Энгийн CSS-in-JS загвар
const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    marginTop: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    width: "300px",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default Register;
