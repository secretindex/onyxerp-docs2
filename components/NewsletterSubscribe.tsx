"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Spinner } from "./ui/spinner";

import {
  Frame,
  FrameDescription,
  FrameHeader,
  FrameTitle,
} from "@/components/ui/frame";

import { toastManager } from "@/components/ui/toast";

import axios from "axios";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = () => {
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    if (!email || email.length == 0) {
      toastManager.add({
        description: "Digite um email primeiro",
        title: "Algo deu errado",
        type: "info",
      });

      setIsLoading(false);

      return;
    }

    if (!validateEmail()) {
      toastManager.add({
        description: "Insira um e-mail válido",
        title: "Formato inválido",
        type: "error",
      });

      setIsLoading(false);

      return;
    }

    const response = await axios.post("/api/emails", { email: email });

    if (response.data.success === true) {
      setIsLoading(false);
      setEmail("");

      toastManager.add({
        description: "Assinatura realizada com sucesso!",
        title: "Sucesso!",
        type: "success",
      });

      console.log(response.data);

      setEmail("");
      setIsLoading(false);
    }

    if (response.data.errorMessage) {
      console.log(response.data);
      toastManager.add({
        description: `${response.data.errorMessage}`,
        title: "Algo deu errado",
        type: "error",
      });

      setEmail("");
      setIsLoading(false);
    }
  };

  return (
    <Frame className="w-full">
      <FrameHeader>
        <FrameTitle className="text-lg font-semibold">
          Inscreva-se na Newsletter
        </FrameTitle>
        <FrameDescription>
          Inscreva-se na nossa newsletter para receber as últimas atualizações
          do sistema OnyxERP.
        </FrameDescription>
        <FrameDescription>
          <Form>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <div>
                <Input
                  type="text"
                  name="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button onClick={handleSubmit}>
                {isLoading ? <Spinner /> : "Inscrever-se"}
              </Button>
            </div>
          </Form>
        </FrameDescription>
      </FrameHeader>
    </Frame>
  );
};

export default NewsletterSubscribe;
