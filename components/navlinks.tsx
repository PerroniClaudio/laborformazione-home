"use client";

import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "./ui/separator";

type Props = {};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
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

function Navlinks({}: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="h-8">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <Separator orientation="vertical" />

        <NavigationMenuItem>
          <NavigationMenuTrigger>Corsi di formazione</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 grid-cols-1 w-[500px] text-center">
              <ListItem
                href={`https://corsi.laborformazione.it/aree-formative/?pagina=privacy`}
                title="Area Privacy"
              />
              <ListItem
                href={`https://corsi.laborformazione.it/aree-formative/?pagina=legale`}
                title="Area Legale"
              />
              <ListItem
                href={`https://corsi.laborformazione.it/aree-formative/?pagina=cybersecurity`}
                title="Cybersecurity"
              />
              <ListItem
                href={`https://corsi.laborformazione.it/aree-formative/?pagina=artificialintelligence`}
                title="Artificial Intelligence"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <Separator orientation="vertical" />

        <NavigationMenuItem>
          <Link
            href="https://corsi.laborformazione.it/docenti/"
            legacyBehavior
            passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Docenti
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <Separator orientation="vertical" />

        <NavigationMenuItem>
          <Link
            href="https://corsi.laborformazione.it/contatti/"
            legacyBehavior
            passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contatti
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navlinks;
