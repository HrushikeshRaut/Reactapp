import React,{useCallback, useContext, useEffect , useMemo, useState} from "react";
import Table from "../../Components/table";
const HomePage = () => {

  // react hooks
  // useState,useEffect,useContext,useMemo,useCallback

  const [count , setCount]=useState(4)

  let data = {
    "meta": {
        "status": 200,
        "is_error": false
    },
    "data": [
        {
            "_id": "6555d4c1801e9b957d27c172",
            "hspName": "Medicover Hospitals, Pune",
            "drName": "Dr. Suraj Patil, MD",
            "profileImage": "https://b2c-bucket-model-uat.s3.ap-south-1.amazonaws.com/drTestimonial/1700125596678_profileImage.png",
            "content": "GMoney is our regular and trustworthy agency. It has always been great to work with you. As a budding hospital, we face a lot of issues related to cashless payments. GMoney helped us with a smooth and hassle-free payment process. We are glad to onboard with them and look forward to a good collaboration in future as well. Thank you on behalf of Medicover Hospitals.",
            "status": true,
            "uploadedBy": "653b85e19b1164b68f46ab07",
            "updated_on": "2023-11-16T09:06:36.840Z",
            "priority": 1,
            "created_on": "2023-11-16T08:37:21.246Z",
            "__v": 0
        },
        {
            "_id": "6555d451801e9b957d27c16e",
            "hspName": "Gaudium Women Hospital ",
            "drName": "Dr. Manika Khanna",
            "profileImage": "https://b2c-bucket-model-uat.s3.ap-south-1.amazonaws.com/drTestimonial/1700123729079_profileImage.png",
            "content": "Our hospital and our patients both are satisfied with the quick services provided by GMoney. It ’s easier for the hospital & patients to get reimbursement for their medical bills.",
            "status": true,
            "uploadedBy": "653b85e19b1164b68f46ab07",
            "updated_on": null,
            "priority": 2,
            "created_on": "2023-11-16T08:35:29.216Z",
            "__v": 0
        },
        {
            "_id": "6555e856ceb3dbf5eb654278",
            "hspName": "G Plus Heart Hospital, Mumbai",
            "drName": "Dr. Amol Chauhan",
            "profileImage": "https://b2c-bucket-model-uat.s3.ap-south-1.amazonaws.com/drTestimonial/1700128854132_profileImage.png",
            "content": "Our patients love GMoney’s convenient advance against Mediclaim and quick responses. Their excellent relationship manager support simplifies reimbursement claims, significantly improving our ability to offer full care to all patients. Highly recommended! ",
            "status": true,
            "uploadedBy": "653b85e19b1164b68f46ab07",
            "updated_on": null,
            "priority": 3,
            "created_on": "2023-11-16T10:00:54.236Z",
            "__v": 0
        }
    ]
}

  useEffect(()=>{
    // setTimeout(()=>{
      console.log('heloo');
      let temp = count;
      setCount(temp+1)
    // },1000)
   },[])

  const increase =()=>{
    let temp = count;
    setCount(temp+1)
  }

return (
    <div>
      <h1>Im home</h1>
      <Table data={data.data} />
       <div>
        {count}
        <br /><br /><br />
        <button onClick={()=>increase()}>Increment</button>
       </div>
    </div>
  );
};

export default HomePage;
