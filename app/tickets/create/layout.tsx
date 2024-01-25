export default function CreateTicketsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col justify-between w-full h-full min-h-max mb-0 gap-6">
			{children}
		</section>
	);
}
