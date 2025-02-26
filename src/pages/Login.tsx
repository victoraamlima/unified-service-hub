import Button from "@/components/Button/Button";
import Form from "@/components/Form/Form";
import LabelInput from "@/components/Form/LabelInput";
import { useAppDesignContext } from "@/contexts/design";
import { getBaseUrl } from "@/utils/getBaseUrl";
import Image from "next/image";
import Link from "next/link";
// import img from "";

export default function Login() {
  const { themeObject } = useAppDesignContext();

  return (
    <main
      className="flex flex-col h-screen"
      style={{ fontFamily: "helvetica" }}
    >
      <section className="flex-center w-full h-full flex-col gap-8 p-3">
        <div className="absolute -z-10 h-1/2 bg-blue5 rounded-xl bg-slate-700 flex-center top-3 w-[98%] max-2sm:h-[98 %] max-2sm:top-2 ">
          <div className="relative w-full h-full overflow-hidden max-2sm:opacity-60">
            <Image
              src={getBaseUrl("/assets/images/pattern.png")}
              alt="pattern"
              width={3240}
              height={1041}
              className="w-full h-full object-fill absolute -left-40 max-2sm:-left-14"
            />
            <Image
              src={getBaseUrl("/assets/images/pattern2.png")}
              alt="pattern"
              width={3240}
              height={1041}
              className="w-full h-full object-fill absolute left-72 max-2sm:left-14"
            />
          </div>
        </div>

        <div className="flex-center flex-col gap-6 font-semibold text-white1 max-2sm:gap-2">
          <Image
            width={3762}
            height={1850}
            src={getBaseUrl("/assets/images/BRASAO-ALEPA.png")}
            alt="Brasão da ALEPA"
            className="w-96 max-2sm:w-60"
          />

          <h3 className="text-3xl max-2sm:text-xl">Gabinete do deputado </h3>
          <h2 className="text-5xl max-2sm:text-3xl">Zeca Pirão</h2>
        </div>

        <Form>
          <LabelInput
            label="Usuário"
            type="user"
            placeHolder="Digite o nome do usuário"
          />

          <LabelInput
            label="Senha"
            type="password"
            placeHolder="Digite sua senha"
          />

          <Link href="/Dashboard/Dashboard">
            <Button
              onClick={() => {}}
              name="entrar"
              type="submit"
              width="w-full"
            />
          </Link>
        </Form>
      </section>
    </main>
  );
}
