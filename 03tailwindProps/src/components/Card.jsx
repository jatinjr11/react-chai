import React from 'react'

// const Card = (props="bttn") => {
const Card = ({username,btnText="View me"}) => {
    // console.log("props", props);
    return (
        <div className="card bg-base-100 w-96 shadow-sm mt-6">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mt-4 mb-1">{username}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quidem itaque illo in est. Nihil a quae voluptas!</p>
                <div className="card-actions mt-4 justify-end">
                    {/* <button className="btn btn-primary">{props.btnText || "View me"}</button> */}
                    <button className="btn btn-primary">{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Card