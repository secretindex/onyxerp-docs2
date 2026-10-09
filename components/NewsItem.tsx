"use client"

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import Link from "next/link";
import axios from "axios";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const NewsItem = ({
  id,
  title,
  description,
  date,
  admin
}: {
  id: string;
  title: string;
  description: string;
  date: string;
  admin: boolean
}) => {
  const handleNotify = async () => {
    const response = await axios.post("/api/send", { id: id })
    console.log(response.data)
  }
  return (
    <div
      key={id}
      className="flex flex-col gap-2 border-x-0 px-2 py-4 border w-full rounded-sm bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all ease-in-out"
    >
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-[0.9rem] text-zinc-600 dark:text-zinc-400">
              {description}
            </span>
            <Link className="text-blue-600 hover:text-blue-400 transition-all ease-in-out text-[0.8rem]" href={`/newsletter/${id}`}>Ler mais...</Link>
          </div>
          <div>
            {
              admin && (
                <AlertDialog>
                  <AlertDialogTrigger render={<Button variant="outline" />}>
                    <Bell />
                  </AlertDialogTrigger>
                  <AlertDialogPopup>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Notificar todos os assinantes?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Ao confirmar, você irá enviar o email para todos os assinantes da plataforma.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogClose render={<Button variant="ghost" />}>
                        Cancelar
                      </AlertDialogClose>
                      <AlertDialogClose render={<Button variant="default" />} onClick={handleNotify}>
                        Notificar usuários
                      </AlertDialogClose>
                    </AlertDialogFooter>
                  </AlertDialogPopup>
                </AlertDialog>
              )
            }
          </div>
        </div>
        <Badge variant="secondary" className="w-fit p-2">
          {date}
        </Badge>
      </div>
    </div>
  );
};

export default NewsItem;
