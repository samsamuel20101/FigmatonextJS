import { Button } from "@nextui-org/button"
import ListIcon from "@/components/ListIcon"
import GalleryIcon from "@/components/GalleryIcon"
import { Link } from "@nextui-org/link"

const TicketToggleView = ({ selected, setSelected }: { selected: string, setSelected:(state: string) => void}) => {
	return (
		<div className="flex flex-row gap-0">
			<Button
				onClick={() => setSelected('table')}
				as={Link}
				className={`hover:border-b-2 border-b-primary-500 bg-foreground-100 ${selected == 'table' ? `border-b-2 border-b-primary-500` : ``}`}
				radius="none"
				startContent={
					<ListIcon />
				}
			>
				Table
			</Button>
			<Button
				onClick={() => setSelected('gallery')}
				as={Link}
				className={`hover:border-b-2 border-b-primary-500 bg-foreground-100 ${selected == 'gallery' ? `border-b-2 border-b-primary-500` : ``}`}
				radius="none"
				startContent={
					<GalleryIcon />
				}>
				Gallery View
			</Button>
		</div>
	)
}

export default TicketToggleView
