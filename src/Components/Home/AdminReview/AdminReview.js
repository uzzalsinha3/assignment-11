import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AdminReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    
    const onSubmit = data => {
        const eventData = {
            Name: data.Name,
            // Price: data.Price,
            image: imageURL
        }
        const url =`https://warm-eyrie-98471.herokuapp.com/addReview`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server theke paoa', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','659129645e4c046190a97350c06080a0');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.url);
            console.log(response.data.data.url);
            
          })
          .catch(function (error) {
            console.log(error);
          });
        

    }
    return (
        <div>
            <h1>Review Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
     
                <input defaultValue="Name" {...register("Name")} />
                <input defaultValue="Price" {...register("Price")} />
      
                <input type="file" onChange={handleImageUpload} />
      
                <input type="submit" />
           </form>
        </div>
    );
};

export default AdminReview;