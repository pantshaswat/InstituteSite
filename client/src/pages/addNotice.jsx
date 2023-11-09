import '../App.css';
import { useState, useEffect } from "react";
import axios from 'axios'
function AddNoticePage(){
    const [notice_title, setNoticeTitle] = useState('');
    const [notice_description, setNoticeDescription] = useState('');
    const [notice_type, setNoticeType] = useState('');
    const [notice_date, setNoticeDate] = useState('');
    const [notice_picture, setNoticePicture] = useState();

    const onImageAdded = (e)=>{
        console.log(e.target.files[0]);
        setNoticePicture(e.target.files[0]);
    }
    const onSubmit= async(e)=> {
        e.preventDefault();
        const formData = new FormData();
        formData.append("notice_picture",notice_picture);
        const textData = {
            "notice_title":notice_title,
       "notice_description":notice_description,
        "notice_type":notice_type,
        "notice_date":notice_date
        }
        formData.append('text_data', JSON.stringify(textData));
        try {
            const response = await axios.post('https://institute-site.vercel.app/upload', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(response.data);
          } catch (error) {
            console.error('Error uploading data:', error);
          }
    }
    return(
        <>
        <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className="mb-6">
    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Notice Title</label>
    <input type="text" onChange={(e)=> setNoticeTitle(e.target.value)} placeholder={`Enter the Notice Title`} id="noticeTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-6">
    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Notice Description</label>
    <input type="text" onChange={(e)=> setNoticeDescription(e.target.value)}  placeholder={`Enter the Notice Description`} id="noticeDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-6">
    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Notice Type</label>
    <input type="text" onChange={(e)=> setNoticeType(e.target.value)}  placeholder={`Enter the Notice Type`} id="noticeType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div>
<label htmlFor="noticeDate">Notice Date: </label>
  <input type="date" onChange={(e)=> setNoticeDate(e.target.value)}  id="noticeDate" name="noticeDate" className= "border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-lg"/>
</div>
<div>
<label htmlFor="notice_picture">Notice Photo:  </label>
<input type="file" name="notice_picture" accept='image/*' onChange={onImageAdded}/>
</div>
<button type="submit" onClick={onSubmit} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add Notice</button>


        </form>
       
        </>
    )
}

export default AddNoticePage;