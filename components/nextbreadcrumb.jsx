import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useBreadcrumbs from '../hooks/usebreadcrumbs';
import siteFrontmatter from 'config/siteFrontmatter.json';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  const { locale, asPath } = useRouter();
  const { frontMatter } = useConfig();

  const seksjonsNavn = locale == 'no' ? 'Forside Bolk' : 'Current Section';

  // Helper function to safely get section data
  const getSectionData = (section) => {
    const sectionData = siteFrontmatter[section]?.introduksjon?.[locale];
    if (!sectionData) return null;
    return {
      href: sectionData.href,
      title: sectionData.title
    };
  };

  if (asPath === '/' || frontMatter.breadcrumb === false) return null;

  return (
    <nav aria-label="breadcrumb" className="py-1 px-2 nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current">
      <ol className="flex flex-row justify-items-center justify-center">
        <li className="breadcrumb-item hidden sm:flex my-1 sm:flex-row flex-nowrap justify-items-center">
          <Link className="-mt-1 -ml-2" href="/" aria-label="link to home/forsiden" title="Home/Forside">
            <Image className="block rounded-full" src="/images/logo_nett.svg" alt="Landsloven logo" width={30} height={30} />
          </Link>
          <span className="pl-2 pr-4"> | </span>
        </li>
        {breadcrumbs.map(breadcrumb => (
          <li className="flex my-1 flex-row flex-nowrap justify-items-center" key={breadcrumb.href}>
            {(breadcrumb.index !== 1) ? (
              <Fragment>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-ll-blue-700 font-medium underline text-[15px] mr-2 font-sans hover:text-ll-blue-500 dark:text-ll-gold-200">
                    <span>{breadcrumb.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[200px]">
                    {Object.keys(siteFrontmatter).map(section => {
                      const sectionData = getSectionData(section);
                      return sectionData && (
                        <DropdownMenuItem key={section} asChild>
                          <Link
                            href={sectionData.href}
                            className="w-full cursor-pointer">
                            {sectionData.title}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="pl-2 pr-4 sm:visible"> | </span>
              </Fragment>
            ) : (
              <span aria-current="page" className="text-[15px] font-sans">
                {breadcrumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;