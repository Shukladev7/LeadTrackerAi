import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NirmalaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  linkToHome?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-12 w-24',
  '2xl': 'h-24 w-24'
};

const textSizeClasses = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl',
  '2xl': 'text-3xl'
};

export function NirmalaLogo({ 
  size = 'md', 
  showText = true, 
  linkToHome = true, 
  className 
}: NirmalaLogoProps) {
  const logoContent = (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative flex-shrink-0 bg-white rounded", sizeClasses[size])}>
        <Image 
          src="/images/nirmala-logo.jpg" 
          alt="Nirmala Pumps" 
          width={size === 'sm' ? 24 : size === 'md' ? 32 : size === 'lg' ? 48 : size === 'xl' ? 64 : 96} 
          height={size === 'sm' ? 24 : size === 'md' ? 32 : size === 'lg' ? 48 : size === 'xl' ? 64 : 96} 
          className="object-contain w-full h-full rounded"
          priority={size === 'lg' || size === 'xl'}
          unoptimized
        />
      </div>
      {showText && (
        <span className={cn("font-bold text-primary", textSizeClasses[size])}>
          Nirmala Pumps
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="hover:opacity-80 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
