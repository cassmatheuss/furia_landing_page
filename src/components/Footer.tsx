export function Footer() {
  return (
    <main className="flex items-center justify-center w-full h-[242px] border-t-white relative overflow-hidden bg-black">
        <div className="flex relative flex-col text-white font-light">
            <span>Site não oficial feito apenas como modelo em Landing Page simples para o processo seletivo da FURIA. Acesse o <a className= "underline" href="https://furia.gg/">site oficial.</a></span>
            <span>*Site ainda não responsivo, sendo portável apenas para desktop no momento (Projeto feito em menos de 24 horas).</span>
            <span className="italic">Projeto feito por <a className="underline" href="https://github.com/cassmatheuss/furia_landing_page">Matheus Castilho</a></span>
        </div>
    </main>
  );
}
