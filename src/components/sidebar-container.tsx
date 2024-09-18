import { FC, ReactNode } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';

type SidebarContainerProps = {
  children: ReactNode;
  title: string;
  trigger: ReactNode;
};

export const SidebarContainer: FC<SidebarContainerProps> = ({
  children,
  title,
  trigger,
}) => {
  return (
    <ScrollArea className='h-full'>
      <div className='px-4'>
        <div className='flex items-center mt-10 mb-10 justify-between'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <div>{trigger}</div>
        </div>
        {children}
      </div>
    </ScrollArea>
  );
};
