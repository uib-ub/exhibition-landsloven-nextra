'use client';

import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import Image from 'next/image';
import Link from 'next/link';
import useBreadcrumbs from '../hooks/useBreadcrumbs';
import siteFrontmatter from 'config/siteFrontmatter.json';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from 'react';

const NxBreadCrumbs = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  const { frontMatter } = useConfig();
  const breadcrumbs = useBreadcrumbs();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getSectionData = (section) => {
    const sectionData = siteFrontmatter[section]?.introduksjon?.[locale];
    return sectionData ? {
      href: sectionData.href,
      title: sectionData.title
    } : null;
  };

  if (!isClient || asPath === '/' || frontMatter?.breadcrumb === false) return null;

  return (
    <Breadcrumb className="py-1 px-2 nx-mt-1.5 font-antiqua">
      <BreadcrumbList>
        {/* Home logo item */}
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink asChild>
            <Link href="/" aria-label="link to home/forsiden" title="Home/Forside">
              <Image
                className="block rounded-full"
                src="/images/logo_nett.svg"
                alt="Landsloven logo"
                width={30}
                height={30}
              />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Breadcrumb items */}
        {breadcrumbs?.map((breadcrumb) => (
          <BreadcrumbItem key={breadcrumb.href}>
            <BreadcrumbSeparator />
            {breadcrumb.index !== 1 ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-ll-blue-700 font-medium underline text-[15px] hover:text-ll-blue-500 dark:text-ll-gold-200">
                  {breadcrumb.label}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  {Object.keys(siteFrontmatter)
                    .filter(section => getSectionData(section))
                    .map(section => {
                      const sectionData = getSectionData(section);
                      return (
                        <DropdownMenuItem key={section} asChild>
                          <Link href={sectionData.href} className="w-full cursor-pointer">
                            {sectionData.title}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <span aria-current="page" className="text-[15px] font-sans">
                {breadcrumb.label}
              </span>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NxBreadCrumbs;