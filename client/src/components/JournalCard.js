import ReactModal from "react-modal"
import { useState } from "react"
export default function JournalCard({ dateFormatter, entry }) {
    const [vis, setVis] = useState(false)
    const el=document.querySelector(".App")
    return (
        <div className="justify-center">
            <div onClick={() => setVis(true)} className="bg-base-300 h-10 flex justify-center border-base-100 border border-dashed ">
                <h3 className="absolute left-1">{entry.name}</h3>
                <h3 className="justify-center text-center">Journal</h3>
                <h3 className="absolute right-1">{dateFormatter(entry)}</h3>
            </div>
            <ReactModal isOpen={vis} appElement={el}>
                <div className="flex justify-center">

                <div className="p-5">
                <h1 className=" p-3 m-2 font-bold mx-auto"> Title: <p className="skew-y-3 shadow-xl transform bg-base-200 p-3 m-3 inline-flex font-bold">{entry.name}</p></h1>
                <h1 className="font-light italic mx-auto pb-3 pl-2">Milestone: {entry.milestone}</h1>
                </div>
                <div className="overflow-auto border-box bg-base-100/80 border-4 shadow-2xl rounded-lg my-4 md:w-6/12 md:p-4 border-warning">
                    <p className="font-semibold">{entry.journal}</p>
                </div>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setVis(false)}>✕</button>

                </div>
            </ReactModal>
        </div>
    )
}