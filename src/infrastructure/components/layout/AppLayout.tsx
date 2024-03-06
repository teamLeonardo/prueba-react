export const AppLayout = ({ children, title }: any) => {
    return <div className="max-w-[600px] m-auto">
        {
            title && <div className="mt-[30px] mb-[30px]">
                <h1 className="text-lg font-bold ">{title}</h1>
            </div>
        }
        {children}
    </div>
}