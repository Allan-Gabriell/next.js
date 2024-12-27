import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelBottom, Package, Home, ShoppingBag, Users, Settings2, Import, LogOut } from "lucide-react";
import Link from 'next/link';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";

export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="hidden sm:block fixed inset-y-0 left-0 z-10 w-14 border-r bg-background flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
                <Link 
                href="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary
                text-primary-foreground rounded-full"
                >
                    <Package className="h-4 w-4 "/>
                    <span className="sr-only">Dashboard avatar</span>
                </Link>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                        >
                        <Home className="h-5 w-5" />
                        <span className="sr-only">Inicio</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Inicio</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                        >
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Pedidos</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Pedidos</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                        >
                        <Package className="h-5 w-5" />
                        <span className="sr-only">Produtos</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Produtos</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                        >
                        <Users className="h-5 w-5" />
                        <span className="sr-only">Clientes</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Clientes</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                        >
                        <Settings2 className="h-5 w-5" />
                        <span className="sr-only">Configurações</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Configurações</TooltipContent>
                </Tooltip>

            </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
            <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                        >
                        <LogOut className="h-5 w-5 text-red-500" />
                        <span className="sr-only">Sair</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Sair</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </nav>

      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b
        bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className='w-5 h-5'/>
                <span className="sr-only">Abrir / fechar menu </span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-4 text-lg font-medium">
                <Link href='#'
                className="flex h-10 w-10 bg-primary rounded-full text-lg
                items-center justify-center text-primary-foreground md:text-base gap-2"
                prefetch={false}
                >
                    <Package className="h-5 w-5 transition-all"/>
                    <span className="sr-only">Logo do projeto</span>
                </Link>

                <Link href='#'
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                >
                    <Home className="h-5 w-5 transition-all"/>
                    Inicio
                </Link>

                <Link href='#'
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                >
                    <ShoppingBag className="h-5 w-5 transition-all"/>
                    Pedidos
                </Link>

                <Link href='#'
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                >
                    <Package className="h-5 w-5 transition-all"/>
                    Produtos
                </Link>

                <Link href='#'
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                >
                    <Users className="h-5 w-5 transition-all"/>
                    Clientes
                </Link>

                <Link href='#'
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                >
                    <Settings2 className="h-5 w-5 transition-all"/>
                    Configurações
                </Link>

                <Link href='#'
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                >
                    <LogOut className="h-5 w-5 transition-all text-red-500"/>
                    Sair
                </Link>

              </nav>
            </SheetContent>
          </Sheet>

            <h2>Menu</h2>

        </header>
      </div>
    </div>
  );
}
