export const TextUI = ({ inputProps, labelTitle, isError, mssError, register }: {
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    isError: boolean,
    mssError: string,
    labelTitle: string,
    register?: any
}) => {

    return <label className="form-control w-full">
        <div className="label">
            <span className="label-text">{labelTitle}</span>
            <span className=" text-red-600">*</span>
        </div>
        <input type="text" {...inputProps} {...register} className="input input-bordered w-full " />
        <div className="label">
            <span
                className="label-text-alt text-red-600"
                style={{ display: isError === true ? "block" : "none" }}
            >
                {mssError}
            </span>
        </div>
    </label>
}