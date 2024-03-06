export const ButtonUi = ({ className, children, ...props }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <button {...props} className={`${className} btn `}>
            {children}
        </button>
    )
}

