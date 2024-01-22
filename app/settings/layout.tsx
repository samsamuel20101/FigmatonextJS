import { SearchIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";
import { Input } from "@nextui-org/input";
import TabComponent from "./tabComponent";

export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col justify-between w-full h-full gap-6 py-8">
			<div className="flex flex-col gap-4 h-full">
				<div className="flex justify-between">
					<h1 className={title()}>Settings</h1>
					<div className="flex flex-row gap-2">
						<ThemeSwitch />
						<Input
							key='rounded-full'
							radius='full'
							type="text"
							size="sm"
							placeholder="Search"
							className="max-w-[220px]"
							startContent={
								<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
							}
						/>
					</div>
				</div>
				<div className="flex flex-row gap-4 w-full h-full">
					<div className="bg-foreground-50 dark:bg-foreground-100 shadow-lg p-4 rounded-lg w-full h-full min-w-min">
						<TabComponent />
						{children}
					</div>
				</div>
			</div>
		</section>
	);
}
