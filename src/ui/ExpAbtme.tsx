
interface ExpAbtypes {
    name: String,
    yrs: String,
    exp: String
}

const ExpAbtme = ({name, yrs, exp}: ExpAbtypes) => {
  return (
    <div className="border-1 border-primary bg-[#f1f1f1] dark:bg-[#1f2937] w-full rounded-xl p-4">
        <h2 className="text-primary text-3xl">{name}</h2>
        <div>
            <hr />
            <p>{yrs}<br />{exp}</p>
        </div>
    </div>
  )
}

export default ExpAbtme