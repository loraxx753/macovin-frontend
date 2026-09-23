import { useLocation } from 'react-router-dom';
import { Button } from '@/components/Atoms/Button';

/**
 * Thumb-zone primary action on phones. One job: get them to Work or Contact.
 * Hidden on Contact (they're already there) and on desktop (nav is visible).
 */
export function StickyCta() {
  const { pathname } = useLocation();

  if (pathname === '/contact') {
    return null;
  }

  const onWork = pathname === '/work';

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="pointer-events-auto border-t border-ink/10 chrome-glass px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-16px_rgba(20,28,36,0.35)]">
        <Button to={onWork ? '/contact' : '/work'} className="w-full no-underline">
          {onWork ? 'Talk to us' : 'See what we can build'}
        </Button>
      </div>
    </div>
  );
}
