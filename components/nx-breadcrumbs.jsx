'use client';

import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import Link from 'next/link';
import useBreadcrumbs from '../hooks/useBreadcrumbs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MoreHorizontal } from "lucide-react";
import { useState, useEffect } from 'react';

const NxBreadCrumbs = () => {
  const router = useRouter();
  const { asPath } = router;
  const { frontMatter } = useConfig();
  const breadcrumbs = useBreadcrumbs();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || asPath === '/' || frontMatter?.breadcrumb === false) return null;

  return (
    <Breadcrumb className="py-1 px-2 nx-mt-1.5 font-antiqua">
      <BreadcrumbList>
        {/* Breadcrumb items */}
        {breadcrumbs?.map((breadcrumb) => (
          <BreadcrumbItem key={breadcrumb.href}>
            {breadcrumb.index === 0 ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-[15px] hover:text-ll-blue-500">
                  {breadcrumb.label}
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground/50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  {breadcrumb.sectionTitles?.map(section => (
                    <DropdownMenuItem key={section.key} asChild>
                      <Link href={section.href} className="w-full cursor-pointer">
                        {section.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <BreadcrumbSeparator />
                <span aria-current="page" className="text-[15px] font-sans">
                  {breadcrumb.label}
                </span>
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NxBreadCrumbs;