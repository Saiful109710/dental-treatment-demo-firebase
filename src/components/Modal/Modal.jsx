import React from "react";

const Modal = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e)
    }
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
           <form onSubmit={handleSubmit} action="">
           <div>
                <label htmlFor="">First Name</label>
                <input
                type="text"
                name='fname'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
            <div>
                <label htmlFor="">Last Name</label>
                <input
                type="text"
                name='lname'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
            <div>
                <label htmlFor="">email</label>
                <input
                type="email"
                name='email'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
            <div>
                <label htmlFor="">Phone Number</label>
                <input
                type="number"
                name='number'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
             <div>
                <label htmlFor="">AppointMent Data</label>
                <input
                type="date"
                name='date'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
            <div>
                <label htmlFor="">Address</label>
                <input
                type="text"
                name='address'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
            <button className="btn btn-primary" type="submit">Make Appointment</button>
           </form>
         
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
