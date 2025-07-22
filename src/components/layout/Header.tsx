// Bu dosyanın en üstündeki import'lar arasında "Link" olduğundan emin olalım
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";

export const Header = () => {
    return (
        <header className="bg-white text-black shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">

                <Link href="/" className="text-2xl font-bold">
                    Hypatia
                </Link>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" className={`${navigationMenuTriggerStyle()} bg-transparent hover:text-hypatia-purple`}>
                                Anasayfa
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" className={`${navigationMenuTriggerStyle()} bg-transparent hover:text-hypatia-purple`}>
                                Hakkımızda
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:text-hypatia-purple">Projeler</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <ListItem href="/projects" title="Tüm Projeler">
                                        Topluluğumuz tarafından geliştirilen tüm projelere göz atın.
                                    </ListItem>
                                    <ListItem href="/projects/platform" title="Topluluk Platformu" />
                                    <ListItem href="/projects/quiz" title="Mobil Bilgi Yarışması" />
                                    <ListItem href="/projects/gallery" title="Yapay Zeka Galerisi" />
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/blog" className={`${navigationMenuTriggerStyle()} bg-transparent hover:text-hypatia-purple`}>
                                Blog
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* DEĞİŞİKLİK BURADA: Butonu <Link> içine aldık */}
                <div className="flex items-center gap-4">
                    <Link href="/join">
                        <Button className="bg-slate-900 hover:bg-slate-700 text-white">
                            Katıl
                        </Button>
                    </Link>
                    <Search className="cursor-pointer" />
                </div>

            </div>
        </header>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";