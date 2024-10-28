import React from 'react'

const MagicButton = ({
    title, icon, position, otherClasses
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button className="relative inline-flex h-[5vh] lg:h-12 mt-5 min-w-[150px] md:min-w-[200px] overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-auto flex-grow">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DE1414_0%,#FCA5A5_50%,#DE1414_100%)]" />
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-950 px-5 sm:px-7 lg:text-lg text-xs font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    );
};

export default MagicButton;
