export default function TicketsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col justify-between w-full gap-6 py-8">
			{children}
		</section>
	);
}
