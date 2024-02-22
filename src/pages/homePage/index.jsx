import React, { useEffect, useRef, useState } from "react";
import Image1 from "../../assets/001.png"
import Image6 from "../../assets/002.png"
import Image3 from "../../assets/003.png"
import Image4 from "../../assets/004.png"
import Image5 from "../../assets/005.png"
import Image2 from "../../assets/006.png"
import Image7 from "../../assets/007.png"
import Image8 from "../../assets/008.png"
import { DeleteIcon, HomePageContainer, HomePageWrapper, Image, ImageContainer, ImageWrapper, Input, InputWrapper } from "../../styles/homePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const HomePage=()=>{
    const defaultImages=[
        {id:1,src:Image1},
        {id:2,src:Image2},
        {id:3,src:Image3},
        {id:4,src:Image4},
        {id:5,src:Image5},
        {id:6,src:Image6},
        {id:7,src:Image7},
        {id:8,src:Image8}
    ]

    const [imageArray,setImageArray]=useState(()=>{
        const savedLayout=localStorage.getItem("imageArray")
        return savedLayout ? JSON.parse(savedLayout) : defaultImages
    })
    const dragImage=useRef(0)
    const draggedOverImage=useRef(0)


    const handleUpload=(e)=>{
        const file= e.target.files[0];
        if(file){
            const reader=new FileReader()
            reader.onloadend=()=>{
                setImageArray((prev)=>[
                    {id:prev+1,src:reader.result},
                    ...prev
                ])
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSort=()=>{
        const imageArrayClone=[...imageArray]
        const temp=imageArrayClone[dragImage.current]
        imageArrayClone[dragImage.current]=imageArrayClone[draggedOverImage.current]
        imageArrayClone[draggedOverImage.current]=temp
        setImageArray(imageArrayClone)
    }

    const handleDelete=(id)=>{
        const updatedImageArray=imageArray.filter((image)=>image.id!==id)
        setImageArray(updatedImageArray)
    }

    const handleTouchStart=(index)=>{
        dragImage.current=index
    }
    
    const handleTouchMove=(index)=>{
        draggedOverImage.current = index
    }
    
    const handleTouchEnd=()=>{
        handleSort()
    }

    useEffect(()=>{
        localStorage.setItem("imageArray",JSON.stringify(imageArray))
    },[imageArray])

    return(
        <HomePageContainer>
            <HomePageWrapper>
                <InputWrapper>
                    <p>Drag & drop your images here or click to browse</p>
                    <Input type="file" onChange={handleUpload}/>
                </InputWrapper>
                <ImageContainer>
                    {imageArray && imageArray.map((image,index)=>{
                        let wrapperStyle={}
                        if(index===0 || index===imageArray.length-1){
                            wrapperStyle = {width: "100%"}
                        }else{
                            wrapperStyle={width:"50%"}
                        }

                        return(
                            <ImageWrapper
                                key={image.id}
                                draggable="true"
                                onDragStart={()=>dragImage.current=index}
                                onDragEnter={()=>draggedOverImage.current=index}
                                onDragEnd={handleSort}
                                onDragOver={e=>e.preventDefault()}  
                                onTouchStart={() => handleTouchStart(index)}
                                onTouchMove={() => handleTouchMove(index)}
                                onTouchEnd={handleTouchEnd}
                                style={
                                    wrapperStyle
                                } 
                            >
                                <Image src={image.src} alt="Error"/>
                                <DeleteIcon>
                                    <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(image.id)}/>
                                </DeleteIcon>
                            </ImageWrapper>
                        )
                    })}
                </ImageContainer>
            </HomePageWrapper>
        </HomePageContainer>
    )
}

export default HomePage