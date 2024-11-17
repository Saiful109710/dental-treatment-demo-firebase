import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Modal = ({treatment}) => {
    const {user} = useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        
        const number = e.target.number.value;
        const date = e.target.date.value;
        const address = e.target.address.value;

        const info = {
            email,
            fname,
            lname,
            number,
            date,
            address,
            treatment
        }

        let saveData = [];
        const localData = localStorage.getItem("appointment");
        if(localData){
            saveData = JSON.parse(localData)
        }
        saveData.push(info);
        localStorage.setItem("appointment",JSON.stringify(saveData))

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
                value={user?.email}
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
