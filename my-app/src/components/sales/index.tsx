import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export function Sales(){
    return(
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center mt-4">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos Clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
            </CardHeader>
            <CardDescription className="ml-5 mb-5">
                Novos clientes nas últimas 24 horas
            </CardDescription>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src='https://avatars.githubusercontent.com/u/123174616?v=4'/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Sujeito Programadar</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">allangabrieldev@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Sujeito Financeiro</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">financeiro@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}