
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, LayoutDashboard, Users, User, LogOut, Settings, Package, FileText, UserPlus, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth-context';
import { getInitials, isProtectedRoute } from '@/lib/auth-utils';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { NirmalaLogo } from '@/components/nirmala-logo';


const navItems = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/leads', label: 'Leads', icon: Users },
    { href: '/quotations', label: 'Quotations', icon: FileText },
    { href: '/employees', label: 'Employees', icon: UserPlus },
    { href: '/tasks', label: 'Tasks', icon: Briefcase },
    { href: '/products', label: 'Products', icon: Package },
    { href: '/setup', label: 'Setup', icon: Settings },
];

const AppLogo = () => (
  <div className="flex items-center">
    <NirmalaLogo size="xl" showText={false} className="min-w-[64px]" />
  </div>
);

const NavLink = ({ href, label, icon: Icon, isActive }: { href: string; label: string; icon: React.ElementType; isActive: boolean }) => (
    <Link
        href={href}
        className={cn(
            "text-sm font-medium transition-colors px-3 py-2 rounded-md",
            isActive 
                ? "bg-accent text-accent-foreground" 
                : "text-muted-foreground hover:text-foreground"
        )}
    >
        {label}
    </Link>
);

const MobileNavLink = ({ href, label, icon: Icon, isActive, onLinkClick }: { href: string; label: string; icon: React.ElementType; isActive: boolean, onLinkClick: () => void }) => (
    <Link
        href={href}
        onClick={onLinkClick}
        className={cn(
            "flex items-center gap-4 rounded-lg px-3 py-2 text-foreground transition-all hover:text-primary",
            isActive && "bg-muted text-primary"
        )}
    >
        <Icon className="h-4 w-4" />
        {label}
    </Link>
);


export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Check if this is an auth page (login, signup, etc.) where we don't want the navbar
  const isAuthPage = pathname.startsWith('/auth/');

  // Special-case: allow quotation print pages to be accessed without auth
  // and without the app chrome (navbar/sidebar), so the print view and
  // generated PDF contain only the quotation content.
  const isQuotationPrintPage =
    pathname.startsWith('/quotations/') && pathname.endsWith('/print');

  // If this is a protected route (except print pages), wrap children with ProtectedRoute
  const shouldProtect = isProtectedRoute(pathname) && !isQuotationPrintPage;
  const content = shouldProtect ? (
    <ProtectedRoute>{children}</ProtectedRoute>
  ) : (
    children
  );

  // For auth pages and print-only quotation pages, render without navbar
  // and with a simple full-screen container.
  if (isAuthPage || isQuotationPrintPage) {
    return (
      <div className="min-h-screen w-full bg-white">
        {content}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <AppLogo />
            {navItems.map((item) => (
                <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                />
            ))}
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                    <AppLogo />
                    {navItems.map((item) => (
                        <MobileNavLink
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                            onLinkClick={() => setIsMobileMenuOpen(false)}
                        />
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
       
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
             {/* Optional Search Bar can go here */}
          </div>
          {user && (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.photoURL || ''} />
                            <AvatarFallback>
                              {getInitials(user.displayName)}
                            </AvatarFallback>
                        </Avatar>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.displayName || 'User'}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {content}
        </main>
    </div>
  );
}
