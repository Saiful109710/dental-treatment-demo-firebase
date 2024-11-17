import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppointment from "../components/MyAppointment/MyAppointment";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details.jsx/details";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async ()=>{
                    const servicesRes = await fetch('dentalData.json');
                    const servicesData = await servicesRes.json();

                    const feedbackRes = await fetch('/feedbackData.json')
                    const feedbackData = await feedbackRes.json()

                    return {servicesData,feedbackData}
                }
            },
            {
                path:'/alltreatments',
                element:<AllTreatments></AllTreatments>,
                loader:()=>fetch('/dentalData.json')
            },
            {
                path:'/myappointment',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:async ({params})=>{
                    const detailRes =await fetch('/dentalData.json')
                    const detailData = await  detailRes.json()
                    const singleData = detailData.find((data)=>data.id==params.id);
                    return singleData

                }
            }
        ]
    }
])

export default router