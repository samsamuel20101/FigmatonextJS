import { Tooltip } from "@nextui-org/tooltip"
import EyeIcon from "./EyeIcon"
import EditIcon from "./EditIcon"
import DeleteIcon from "./DeleteIcon"
import { Button } from "@nextui-org/button"
import { title } from "./primitives"
import BlobIcon from "./BlobIcon"
import SendIcon from "./SendIcon"

const ChattingBlock = () => {
	return (
		<div className="flex flex-col flex-grow justify-between h-full min-h-fit w-full shadow-lg">
			<div className="flex flex-row justify-between text-base p-4 bg-primary-100 rounded-t-xl">
				<div>New Ticket: #2212</div>
				<div>Change Status</div>
			</div>
			<div className="flex flex-col justify-between p-4 gap-5 border-b-1">
				<div className="text-2xl font-bold">Sipping Questions</div>
				<div className="flex flex-row justify-between">
					<div>Tue, Nov 28, 2023 at 10:21 AM</div>
					<div className="relative flex items-center justify-center gap-2">
						<Tooltip content="Edit Ticket">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<EditIcon />
							</span>
						</Tooltip>
						<Tooltip content="Edit ticket">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<BlobIcon />
							</span>
						</Tooltip>
						<Tooltip color="danger" content="Delete ticket">
							<span className="text-lg text-danger cursor-pointer active:opacity-50">
								<DeleteIcon />
							</span>
						</Tooltip>
					</div>
				</div>
			</div>
			<div className="flex flex-col relative py-8 px-4 h-full w-full">
				<div className="absolute bottom-0 w-full -mx-4">
					<div className="w-full m-0 px-4">
						<div className="w-full rounded-lg p-2 bg-[#bababa] h-32">hello</div>
					</div>
					<div className="w-full relative flex flex-row-reverse">
						<Button radius="full" className="m-4" startContent={<SendIcon />}>Send Message</Button>
					</div>
				</div>
				<div className="flex min-h-full h-full w-full"></div>
			</div>
		</div>
	)
}

export default ChattingBlock