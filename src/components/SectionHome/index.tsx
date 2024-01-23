import Image from "next/image";
import perfil from "../../../assets/perfil.jpeg";

export function SectionHome() {
  return (
    <div className="w-full mt-16">
      <section className="flex justify-around items-center">
        <div className="flex flex-col items-center animate-fade animate-once animate-duration-1000 animate-delay-[600ms] animate-ease-in-out">
          <div>
            <h1 className="text-7xl">Celso Cruz Borges</h1>
          </div>
          <div className="flex w-608 mt-3">
            <span className=" text-xl">
              Com 18 anos de experiência, trabalha com os seguintes focos,
              fornecer experiências transformadoras às pessoas que buscam
              tratamento psicoterápico e neuropsicológico e oportunizar o
              crescimento e desenvolvimento das empresas mantendo o foco na
              gestão de pessoas.
            </span>
          </div>
        </div>
        <div className="animate-fade animate-once animate-duration-1000 animate-delay-[600ms] animate-ease-in-out">
          <Image
            src={perfil}
            alt="Landscape picture"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
