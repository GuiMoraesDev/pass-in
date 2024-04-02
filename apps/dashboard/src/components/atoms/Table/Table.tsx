import {
  type HTMLAttributes,
  forwardRef,
  type ThHTMLAttributes,
  type TdHTMLAttributes,
} from 'react';
import { twMerge } from 'tailwind-merge';

const TableRoot = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="flex relative w-full flex-1 overflow-auto border border-white/10 rounded-lg">
    <table
      ref={ref}
      className={twMerge('w-full text-sm', className)}
      {...props}
    />
  </div>
));
TableRoot.displayName = 'TableRoot';

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={twMerge('h-[40px] leading-[40px] sticky top-0', className)}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={twMerge(
      'border-b border-white/10 transition-colors data-[state=selected]:bg-zinc-800',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={twMerge(
      'leading-[40px] px-5 py-3 align-middle text-left text-sm font-semibold',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={twMerge('[&_tr]:text-zinc-300', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={twMerge(
      'leading-[40px] px-5 py-3 align-middle text-sm',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={twMerge('h-10 sticky bottom-0 [&_tr]:border-0', className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
};
