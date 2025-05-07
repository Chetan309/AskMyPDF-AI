"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Image from "next/image";
import Link from "next/link";
import UploadPdfDialog from "./_components/UploadPdfDialog";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { user, isLoaded } = useUser();

    const userEmail = user?.primaryEmailAddress?.emailAddress ?? "";

    const fileList = useQuery(
        api.fileStorage.getUserFiles,
        userEmail ? { userEmail } : "skip"
    );

    useEffect(() => {
        if (isLoaded && !user) {
            redirect("/sign-in");
        }
    }, [isLoaded, user]);

    if (!isLoaded || !user) return null;

    return (
        <div>
            <h2 className="font-medium text-3xl">Workspace</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
                {fileList?.length > 0
                    ? fileList.map((file, index) => (
                          <Link href={`/workspace/${file.fileId}`} key={index}>
                              <div className="flex shadow-md p-5 rounded-md flex-col items-center justify-center border hover:scale-105 transition-all">
                                  <Image
                                      src={"/pdf.png"}
                                      alt="Pdf file"
                                      width={70}
                                      height={70}
                                  />
                                  <h2 className="mt-3 font-medium text-md cursor-pointer">
                                      {file?.fileName}
                                  </h2>
                              </div>
                          </Link>
                      ))
                    : Array.from({ length: 10 }).map((_, index) => (
                          <div
                              className="bg-slate-200 rounded-md h-[100px] animate-pulse"
                              key={index}
                          ></div>
                      ))}
            </div>
        </div>
    );
}
