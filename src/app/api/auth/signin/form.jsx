"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Input, Button } from "@nextui-org/react";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (value, name) => {
    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
  };

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <div className="mb-16 w-full">
        <h1 className="text-black text-[1.75rem] font-bold">Iniciar sesión</h1>
        <p className="text-[#8A8B8B] text-sm">Ingresa tus credenciales para acceder</p>
      </div>
      <div className="mb-6">
        <Input 
          type="email"
          label="Email" 
          value={formValues.email}
          onValueChange={(value) => handleChange(value, 'email')}
          placeholder="Ingresa email" 
          />
      </div>
      <div className="mb-12">
        <Input 
          type="password"
          label="Contraseña" 
          value={formValues.password}
          onValueChange={(value) => handleChange(value, 'password')}
          placeholder="Ingresa contraseña" 
        />
      </div>
      <div className="flex">
        <Button
          className="w-full bg-[#111111] text-white"
          type="submit"
          disabled={loading}
          isLoading={loading}
        >
          {loading ? "Cargando..." : "Ingresar"}
        </Button>
      </div>
    </form>
  );
};
