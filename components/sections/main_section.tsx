import cn from "classnames";
import { Container } from "../container";
import { Header } from "../header";
import { LeadForm } from "../lead_form";

export interface IMain_SectionProps {
    className?: string;
}

export const MainSection = ({ className }: IMain_SectionProps): React.JSX.Element => {
    return (
        <div className={cn("bg-black/70 min-h-[100dvh] relative", className)} id="main-section">
            {/* Видео фон */}
            <div className="fixed inset-0 -z-10">
                <video className="w-full h-full object-cover opacity-60" autoPlay muted loop playsInline>
                    <source
                        src="https://media.istockphoto.com/id/1198431368/ru/видео/горизонтальная-камера-двигается-по-ряду-полок-с-картонными-коробками-промышленное-внутреннее.mp4?s=mp4-640x640-is&k=20&c=a5DkfDKez5cAbcrBAAgPAuVNMNVFULVEaQO5kRV_wtQ="
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className="relative z-10">
                <Container>
                    <Header />
                    <div className="flex items-center justify-center py-8 md:py-16 lg:py-24 min-h-[80dvh]">
                        <LeadForm />
                    </div>
                </Container>
            </div>
        </div>
    );
};
