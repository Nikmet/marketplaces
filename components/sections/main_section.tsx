import cn from "classnames";
import { Container } from "../container";
import { Header } from "../header";
import { LeadForm } from "../lead_form";

export interface IMain_SectionProps {
    className?: string;
}

export const MainSection = ({ className }: IMain_SectionProps): React.JSX.Element => {
    return (
        <div className={cn("bg-black/70 h-[100vh]", className)}>
            <Container className="relative">
                {/* Добавить видео */}
                {/* <div className="absolute inset-0 -z-10">
                    <video className="w-full h-full object-cover opacity-40" autoPlay muted loop>
                        <source src="/warehouse.mp4" type="video/mp4" />
                    </video>
                </div> */}
                <Header></Header>
                <div className="h-[80vh] flex items-center  justify-center">
                    <LeadForm />
                </div>
            </Container>
        </div>
    );
};
