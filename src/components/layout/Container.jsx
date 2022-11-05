export default function Container({children}) {
    return (
        <div className="h-auto w-full flex flex-col ">
            {children}
        </div>
    )
}