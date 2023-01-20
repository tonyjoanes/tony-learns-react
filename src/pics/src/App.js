import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
    const [images, setImages] = useState([]);
    async function handleSubmit(term) {
        const response = await searchImages(term);

        console.log(response);
        setImages(response);
    }
    return ( 
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}

export default App;
// vl-lCFxKC_ji3Eeydp-mIrscI_jtc2WbpNujrKWkeSE
// TB63UPnlE_m0nxykZan_Vp2bcC8QUqYrEwt6IvDnFzg