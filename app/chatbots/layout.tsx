export default function ChatbotLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col justify-between w-full h-full gap-6 py-8">
			{children}
		</section>
	);
}
