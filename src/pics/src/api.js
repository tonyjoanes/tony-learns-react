import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID vl-lCFxKC_ji3Eeydp-mIrscI_jtc2WbpNujrKWkeSE'
        },
        params: {
            query: term
        }
    });

    console.log(response.data.results);
    
    return response.data.results;
};

export default searchImages;