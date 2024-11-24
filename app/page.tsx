import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Get to know me better! 🚀
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to my portfolio website. So I'm guessing you want to know
          more, right? Let's get right into it!
        </p>
        <p>
          First of all, I am a Computer Science student at the Federal
          University of Technology, Akure.
        </p>
        <p>
          I currently work as a Backend developer at{" "}
          <strong>Maaxdo Technologies</strong>. I've also worked as a freelance
          developer for the past 4 years.
        </p>
        <p>
          I am passionate about building software solutions that tackle
          real-world problems and learning more about programming concepts.
        </p>
        <p>
          If you want to have a copy of my Resume / CV, you can download it.
          Just{" "}
          <a href="/resume.pdf" target="_blank" download>
            click here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
