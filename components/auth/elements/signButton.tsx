
export const SignButton = ( { children, buttonStyle }: {children: React. ReactNode, buttonStyle : string}  ) => {
    return (
        <div className="py-3">
            <button 
                className={`flex items-center justify-center w-full px-6 py-3 font-medium border border-gray-200 rounded-md shadow ${buttonStyle}`}
            >
                { children }
            </button>
        </div>
    )
}