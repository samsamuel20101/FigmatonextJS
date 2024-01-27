import { Button } from "@nextui-org/button"
import { PropsWithChildren  } from "react"
import { ReactNode } from "react"

interface PropsType extends PropsWithChildren {
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined,
  radius?: "sm" | "md" | "lg" | "none" | "full" | undefined,
  className?: string,
  size?: "sm" | "md" | "lg" | undefined,
  variant?: "light" | "shadow" | "flat" | "solid" | "bordered" | "faded" | "ghost" | undefined,
  startContent?: ReactNode,
  endContent?: ReactNode,
  fullWidth?: boolean,
  isIconOnly?: boolean
}

const CustomButton = (props: PropsType) => {
  return (
    <Button
      color={props.color} 
      radius={props.radius} 
      size={props.size} 
      variant={props.variant} 
      startContent={props.startContent} 
      endContent={props.endContent}
      fullWidth={props.fullWidth}
      isIconOnly={props.isIconOnly}
      className={props.className}
    >
      {props.children}
    </Button>
  )
}

export default CustomButton;
