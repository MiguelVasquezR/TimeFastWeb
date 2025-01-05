"use client";

import { useParams, useRouter } from "next/navigation";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const OlvidePassword = () => {
  const { token } = useParams();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (
      password !== confirmPassword ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("password", password);
    urlencoded.append("token", token || "");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8080/time-fast-api/api/colaborador/actualizas-password",
        requestOptions
      );
      const result = await response.text();
      const json = JSON.parse(result);

      if (json.error === false) {
        router.push("/");
        toast.success("Contraseña actualizada correctamente");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="bg-blue w-screen h-screen font-roboto flex justify-center items-center">
      <div className="flex flex-col gap-5 bg-white rounded-md w-[400px] h-[600px] text-center p-5">
        <p className="text-2xl font-bold text-blue">Recuperar contraseña</p>
        <p className="text-blue text-xl font-bold animate-pulse">TimeFast</p>
        <form
          className="h-full flex flex-col justify-center items-center gap-5"
          onSubmit={handleSubmit}
        >
          {error && <p className="text-red-500">{error}</p>}

          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <label htmlFor="password">Nueva Contraseña</label>
            <div className="shadow-md p-2 rounded-md outline-none w-full flex flex-row justify-between items-center">
              <input
                type={showPassword.password ? "text" : "password"}
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword.password ? (
                <IoMdEyeOff
                  size={22}
                  onClick={() =>
                    setShowPassword({ ...showPassword, password: false })
                  }
                />
              ) : (
                <IoMdEye
                  size={22}
                  onClick={() =>
                    setShowPassword({ ...showPassword, password: true })
                  }
                />
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <div className="shadow-md p-2 rounded-md outline-none w-full flex flex-row justify-between items-center">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                className="w-full outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {showPassword.confirmPassword ? (
                <IoMdEyeOff
                  size={22}
                  onClick={() =>
                    setShowPassword({ ...showPassword, confirmPassword: false })
                  }
                />
              ) : (
                <IoMdEye
                  size={22}
                  onClick={() =>
                    setShowPassword({ ...showPassword, confirmPassword: true })
                  }
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue text-white rounded-md shadow-md px-5 py-2"
            disabled={loading}
          >
            {loading ? (
              <div className="w-9 h-9 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OlvidePassword;
