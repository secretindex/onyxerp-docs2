export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {children}
    </div>
  );
}
