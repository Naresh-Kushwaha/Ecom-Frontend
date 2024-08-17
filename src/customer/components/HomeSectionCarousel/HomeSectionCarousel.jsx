import { React, useState } from "react"
import KeyboardArrowLeft, { KeyboardArrowLeftIcon } from '@mui/icons-material/KeyboardArrowLeft'
import AliceCarousel from "react-alice-carousel"
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";

import "react-alice-carousel/lib/alice-carousel.css";

const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}></HomeSectionCard>)
    const syncActiveIndex = ({item}) => setActiveIndex(item);

    return (
        <div className="border ">
            <h2 className="text-2xl font-extrabold text-gray-800 ">{sectionName}</h2>

            <div className="relative p-5">
                <AliceCarousel
                    // disableButtonsControls
                    items={items}
                    responsive={responsive}
                    disableDotsControl
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

               {activeIndex!==items.length-4 && <Button onClick={slideNext} variant="contained" className="z-50 bg-white" sx={{ bgcolor: "white", position: 'absolute', top: "7rem", right: "0rem", transform: "translateX(50%) rotate(90deg)" }} aria-label="next"><KeyboardArrowLeft sx={{ transform: "rotate(90deg)", color: "black" }} /></Button>}
                { activeIndex!==0 && <Button onClick={slidePrev} variant="contained" className="z-50 bg-white" sx={{ bgcolor: "white", position: 'absolute', top: "7rem", left: "0rem", transform: "translateX(50%) rotate(-90deg)" }} aria-label="next"><KeyboardArrowLeft sx={{ transform: "rotate(90deg)", color: "black" }} /></Button>}

            </div>
        </div>
    );
};
export default HomeSectionCarousel;