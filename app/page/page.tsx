'use client'
import { FaPix } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import * as styled from '../styledSite/StylePage'
import { Toaster } from '../../components/ui/sonner'
import { toast } from "sonner";
export const PageAll = () => {
    const valores = [{ icon: <FaPhoneAlt />, nome: 'Telefone', funcao: Telefone }, { icon: <FaWhatsapp />, nome: 'Whatsapp', funcao: Whatsapp }, { icon: <SiGooglemaps />, nome: 'Localização', funcao: Localizacao }, { icon: <FaPix />, nome: 'Chave PIX CNPJ', funcao: pix }]
    function Telefone() {
        window.location.href = 'tel:556193052684';
    }
    function Whatsapp() {
        window.location.href = 'https://wa.me/556193052684';
    }
    function Localizacao() {
        window.location.href = 'https://www.google.com/maps/@-16.0969883,-48.0333456,3a,75y,47.55h,99.09t/data=!3m7!1e1!3m5!1sEP7O6iWyxHjwdXBDEIJWjw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-9.087515890478102%26panoid%3DEP7O6iWyxHjwdXBDEIJWjw%26yaw%3D47.54855897125013!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D';
    }
    function pix() {
        navigator.clipboard.writeText('12.345.678/0001-90');
        toast.success('Chave PIX copiada para a área de transferência!');

    }
    return (
        <>

            <styled.Main>
                <styled.SectionPrincipal>
                    <div className="fotoAgro">
                    </div>
                    <p>
                        <span> Agropecuária AgroCampo</span> — Pioneira na região desde 2016. Sempre atendendo nossos clientes  de forma clara, honesta e próxima. Estamos sempre nos atualizando para oferecer o melhor em produtos e serviços para o campo.
                    </p>

                </styled.SectionPrincipal>
                <styled.Section>
                    {valores.map((value, index) => (
                        <styled.Article onClick={value.funcao} key={index}>{value.icon} {value.nome}</styled.Article>
                    ))}
                </styled.Section>
            </styled.Main>
            <Toaster />
        </>
    )
}