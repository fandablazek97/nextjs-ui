// import Image from "next/image";
import { HiUser } from "react-icons/hi2";

type AvatarProps = {
  src?: string | null;
  name?: string | null;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "success"
    | "error"
    | "warning"
    | "info";
  size?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  hasRandomColor?: true;
  as?: React.ElementType;
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "relative flex bg-gray-600 items-center justify-center aspect-square overflow-hidden",
  size: {
    none: "",
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-xl",
    lg: "w-16 h-16 text-2xl",
    xl: "w-24 h-24 text-3xl",
    "2xl": "w-32 h-32 text-5xl",
    full: "w-full h-full",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  randomColor: {
    "0": "bg-red-600",
    "1": "bg-orange-600",
    "2": "bg-yellow-500",
    "3": "bg-lime-600",
    "4": "bg-green-600",
    "5": "bg-teal-600",
    "6": "bg-sky-600",
    "7": "bg-indigo-600",
    "8": "bg-purple-600",
    "9": "bg-fuchsia-600",
  },
};

export default function Avatar({
  // Component props
  src = null,
  name = null,
  color = "primary",
  size = "md",
  radius = "full",
  hasRandomColor = true,
  as: Tag = "div",
  className = "",
  ...rest
}: AvatarProps) {
  // Component logic
  function getInitials(str: string) {
    let names = str.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  // ${hasRandomColor ? cvs.randomColor[randomIndex] : ""}
  return (
    // Component markup
    <Tag className={`${className}`} {...rest}>
      <div
        className={`${cvs.base} ${cvs.size[size]} ${cvs.radius[radius]} 
        `}
      >
        {name !== null && (
          <span className="mx-auto text-center uppercase text-white">
            {getInitials(name)}
          </span>
        )}
        {name === null && src === null && (
          <div className="h-full w-full p-1">
            <HiUser className="h-full w-full text-white" />
          </div>
        )}
      </div>
    </Tag>
  );
}
