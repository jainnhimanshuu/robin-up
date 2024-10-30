"use client";
import * as React from "react";
import { cn } from "@rbu/helpers";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  startIcon?: React.ReactNode;
  registerProps?: UseFormRegister<HTMLInputElement>; // Added for react-hook-form register
  error?: FieldError | undefined; // For error validation
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type, startIcon, registerProps, error, ...restProps } =
    props;
  const radius = 100; // Adjusts radius of hover effect
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div>
      <motion.div
        style={{
          background: useMotionTemplate`
              radial-gradient(
                ${
                  visible ? radius + "px" : "0px"
                } circle at ${mouseX}px ${mouseY}px,
                var(--blue-500),
                transparent 80%
              )
            `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <div className="relative flex items-center">
          {startIcon && <div className="absolute left-3">{startIcon}</div>}
          <input
            type={type}
            className={cn(
              `flex h-12 w-full border-none text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
                file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder:text-neutral-600
                focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                transition duration-400 ${startIcon ? "pl-10" : ""}`,
              className
            )}
            ref={ref}
            {...registerProps}
            {...restProps}
          />
        </div>
      </motion.div>
      {error?.message && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
