import Logo from "../../../assets/logo.jpg";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex justify-around items-center w-full h-20 shadow-2xl">
      <div className="animate-fade-right animate-once animate-duration-1000 animate-ease-in-out">
        <Image src={Logo} alt="Landscape picture" width={100} height={500} />
      </div>
      <div className="flex justify-evenly gap-5 animate-fade-left animate-once animate-duration-1000 animate-ease-in-out">
        <a className="">inicio</a>
        <a>atuação</a>
        <a>serviços</a>
        <a>sobre</a>
        <a>postagens</a>
        <a>contato</a>
      </div>
    </div>
  );
}
