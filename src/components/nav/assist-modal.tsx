/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { cn } from "@/utils/classnames";
import { XIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

interface AssistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssistModal({ isOpen, onClose }: AssistModalProps) {
  const [value, setValue] = useState<string>("");

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // @ts-ignore
      setValue(result);
    },
  });

  return (
    <motion.div
      animate={{ y: isOpen ? "5%" : "100%" }}
      transition={{ ease: "backInOut", duration: 0.5 }}
      className={cn(
        "fixed left-0 top-0 h-screen w-full rounded-t-3xl bg-white",
      )}
    >
      <div className="relative h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <div className="p-8">
            <h4 className="text-center text-3xl font-semibold text-[#0D6BDC]">
              How can i help you?
            </h4>
            <div>
              <textarea
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <button
                onMouseDown={() => listen({ lang: "en-US" })}
                onMouseUp={stop}
              >
                🎤
              </button>
              {listening && <div>Go ahead I&apos;m listening</div>}
            </div>
          </div>
        </div>
        <div className="absolute right-8 top-8">
          <button onClick={onClose}>
            <XIcon className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
