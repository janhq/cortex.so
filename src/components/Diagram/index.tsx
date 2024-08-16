import BrowserOnly from "@docusaurus/BrowserOnly";
import { Excalidraw, loadFromBlob } from "@excalidraw/excalidraw";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useEffect, useState } from "react";

interface DiagramProps {
  diagramPath: string;
}

export default function Diagram({ diagramPath }: DiagramProps) {
  // return (
  //   <BrowserOnly>
  //     {() => {
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  useEffect(() => {
    if (excalidrawAPI !== null) {
      fetch(diagramPath)
        .then((res) => res.blob())
        .then((blob) => loadFromBlob(blob, excalidrawAPI.getAppState(), null))
        .then((data) => {
          excalidrawAPI.updateScene(data);

          // excalidrawAPI.setActiveTool({ type: "hand", locked: true });
        });
    }
  }, [excalidrawAPI]);

  return (
    <div style={{ height: "600px" }}>
      <Excalidraw
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
        isCollaborating={false}
        zenModeEnabled={false}
        viewModeEnabled={true}
        gridModeEnabled={false}
        UIOptions={{
          canvasActions: {
            export: false,
            loadScene: false,
            saveToActiveFile: false,
          },
        }}
      />
    </div>
  );
  //     }}
  //   </BrowserOnly>
  // );
}
