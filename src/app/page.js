"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "../../convex/_generated/api";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  const router = useRouter();

function getStartedHandler() {
  if (user) {
    router.push("/dashboard");
  } else {
    router.push("/sign-in");
  }
}

function aboutDeveloperHandler() {
  redirect("/aboutdeveloper");
}



  useEffect(() => {
    user && checkUser();
  }, [user]);

  const checkUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
    });
    console.log(result);
  };
  return (
    <div className="bg-gradient-to-r from-gray-100 to-blue-200 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href={"/"}>
          <Image
            src={"/HpLogo.png"}
            height={120}
            width={200}
            alt="Logo"
            priority
          />
        </Link>
        <div className="space-x-6">
        
          <Button
            className="rounded-full bg-zinc-800 hover:bg-gray-700"
            onClick={getStartedHandler}
          >
            Get Started
          </Button>
          <Button
            className="ml-4 rounded-full text-black bg-white hover:bg-slate-200"
            onClick={aboutDeveloperHandler}
          >
            About Developer
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 mt-[2rem]">
        <h2 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
          <span className="text-black"> Simplify </span>{" "}
          <span className="text-red-500">PDF</span>{" "}
          <span className="text-blue-500">Note</span>
          <span className="text-black">-Taking With </span>
          <br /> <span className="text-black"> AI-Powered </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
          Elevate your note-taking experience with our AI-powered PDF app.
          Seamlessly extract key insights, summaries, and annotations from any
          PDF with just a few clicks.
        </p>
        <div className="mt-[4rem] space-x-4 flex items-center justify-center flex-col md:flex-row gap-5">
          <Button
            size="lg"
            className="rounded-full bg-black hover:bg-gray-700"
            onClick={getStartedHandler}
          >
            Get Started
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full bg-white"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6 pb-20 max-w-6xl mx-auto">
        <div>
          <h3 className="text-lg font-semibold">The lowest price</h3>
          <p className="text-gray-600">Affordable AI-powered note-taking.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">The fastest on the market</h3>
          <p className="text-gray-600">
            Instantly convert your PDFs into concise notes with ease.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">The most loved</h3>
          <p className="text-gray-600">
            Hundreds of users trust us for quick, accurate note-taking.
          </p>
        </div>
      </section>
    </div>
  );
}
