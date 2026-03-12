"use client";

import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

interface CredentialPreviewOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export function CredentialPreviewOverlay({
  isOpen,
  onClose,
  imageUrl,
  title,
}: CredentialPreviewOverlayProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative flex h-full w-full max-w-[95vw] max-h-[85vh] flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4}
              centerOnInit
              doubleClick={{ mode: "reset" }}
            >
              {({ zoomIn, zoomOut }) => (
                <>
                  {/* Header with title and controls */}
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="truncate text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1">
                      <button
                        type="button"
                        onClick={() => zoomIn()}
                        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-slate-700/80 text-white transition hover:bg-slate-600"
                        aria-label="Zoom in"
                      >
                        <ZoomIn size={20} />
                      </button>
                      <button
                        type="button"
                        onClick={() => zoomOut()}
                        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-slate-700/80 text-white transition hover:bg-slate-600"
                        aria-label="Zoom out"
                      >
                        <ZoomOut size={20} />
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-slate-700/80 text-white transition hover:bg-slate-600"
                        aria-label="Close"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Image with zoom/pan */}
                  <div className="relative flex-1 overflow-hidden rounded-lg bg-slate-900/50">
                    <TransformComponent
                      wrapperClass="!w-full !h-full"
                      contentClass="!w-full !h-full flex items-center justify-center"
                    >
                      <img
                        src={imageUrl}
                        alt={title}
                        className="max-h-[70vh] w-auto max-w-full object-contain"
                      />
                    </TransformComponent>
                  </div>
                </>
              )}
            </TransformWrapper>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
