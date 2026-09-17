"use client";

import { createClient } from "@/utils/supabase/client";
import { LoginContext } from "@/context/LoginContext";

import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";

const Admin = () => {
  const { isLogged, setIsLogged } = useContext(LoginContext);
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsLogged(true);
        setLoading(false);
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
  };

  return (
    <>
      {isLogged ? (
        <div className="flex flex-col h-full w-full items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Você já está logado!</h1>
          <Link href="/admin/publicar" className="text-muted-foreground hover:underline">
            Começar a publicar
          </Link>
        </div>
      ) : (
        <div className="flex flex-col h-full w-full items-center justify-center gap-4">
          <div className="flex flex-col gap-2 w-1/3 m-auto">
            <h1 className="text-2xl font-bold">OnyxDocs Admin</h1>
            <p className="text-muted-foreground">
              Entre e comece a publicar as notícias.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/3 m-auto">
            <div className="flex flex-col gap-2 w-full m-auto">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <Input
                id="email"
                placeholder="you@example.com"
                className="w-full"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                size="lg"
              />
            </div>
            <div className="flex flex-col gap-2 w-full m-auto">
              <label htmlFor="senha" className="font-bold">
                Senha
              </label>
              <Input
                id="senha"
                placeholder="••••••••"
                className="w-full"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                size="lg"
              />
            </div>
            <Button onClick={handleSubmit} className="w-full" type="submit">
              {loading ? "Carregando..." : "Entrar"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
