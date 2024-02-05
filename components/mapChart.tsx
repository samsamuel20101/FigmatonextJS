'use client'

import { Tooltip } from "@nextui-org/tooltip";
import { Dispatch, SetStateAction, memo, useEffect, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { FileAddIcon, FlagIcon, MetricIcon, Team1Icon, TicketsIcon } from "./icons";
import { pointerType } from "./resionCard";

const MapChart = ({globalMousePos, setGlobalMousePos}:{globalMousePos:{ x: number, y: number }, setGlobalMousePos: Dispatch<SetStateAction<pointerType>>}) => {
  const [content, setContent] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  // const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, [setGlobalMousePos]);
  // console.log(globalMousePos.x, globalMousePos.y)
  return (
    <div data-tip="">
      <ComposableMap>
        <ZoomableGroup>
          <Tooltip
            isOpen={isOpen}
            onOpenChange={prev => setIsOpen(prev)}
            content={
              <div className="flex flex-col gap-2 p-3 items-start font-medium">
                <div className="flex flex-row gap-1">
                  <FlagIcon />
                  <h1>{content}</h1>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <FileAddIcon />
                      <h1>245 Orders</h1>
                    </div>
                    <div className="flex flex-row gap-1">
                      <MetricIcon />
                      <h1>$5648 Sales</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <Team1Icon />
                      <h1>156 Costumers</h1>
                    </div>
                    <div className="flex flex-row gap-1">
                      <TicketsIcon />
                      <h1>198 Tickets</h1>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Geographies geography="/features.json" className="geographies">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setContent(`${geo.properties.name}`);
                      setIsOpen(true)
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D1E4EE",
                        outline: "none",
                      },
                      hover: {
                        fill: "#06F",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </Tooltip>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
