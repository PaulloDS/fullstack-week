"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetClose } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const Header = () => {
    const {status, data} = useSession();
    const handleLoginClick = async () => {
        await signIn();
    }
    const handleLogOutClick = async () => {
        await signOut();
    }
    return (
        <Card className="flex items-center justify-between p-[1.875rem]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <div className="flex items-center justify-between mb-5">
                        <SheetHeader className="text-left text-lg font-semibold">
                            Menu
                        </SheetHeader>
                        {status === 'authenticated' && data?.user && (
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarFallback>
                                        {data.user.name?.[0].toUpperCase()}
                                    </AvatarFallback>
                                    {data.user.image && (
                                        <AvatarImage className="rounded-3xl" width={40} src={data.user.image}/>
                                    )}
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="font-medium">{data.user.name}</p>
                                    <small className="opacity-75">Boas compras!</small>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-2 flex flex-col gap-2">
                        {status === 'unauthenticated' && (
                            <Button onClick={handleLoginClick} className="w-full justify-start gap-2" variant="outline">
                                <LogInIcon size={16}/>
                                Fazer login
                            </Button>
                        )}

                        {status === 'authenticated' && (
                            <Button onClick={handleLogOutClick} className="w-full justify-start gap-2" variant="outline">
                                <LogOutIcon size={16}/>
                                Fazer logout
                            </Button>
                        )}

                        <SheetClose asChild>
                            <Link href={`/`}>
                                <Button className="w-full justify-start gap-2" variant="outline">
                                    <HomeIcon size={16}/>
                                    Início
                                </Button>
                            </Link>
                        </SheetClose>

                        <Button className="w-full justify-start gap-2" variant="outline">
                            <PercentIcon size={16}/>
                            Ofertas
                        </Button>

                        <SheetClose asChild>
                            <Link href={`/catalog`}>
                                <Button className="w-full justify-start gap-2" variant="outline">
                                    <ListOrderedIcon size={16}/>
                                    Catálogo
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

            <h1 className="font-semibold text-lg"><span className="text-primary">PDS</span> Store</h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon/>
            </Button>
        </Card>
    );
}
 
export default Header;