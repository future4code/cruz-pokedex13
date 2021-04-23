import React, { useContext } from "react";
import { BASE_URL } from "../constants/api";
import { ButtonPrevNextPage, ButtonChangePage} from "../constants/buttons";
import GlobalStateContext from "../GlobalState/GlobalContext";


export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  const {setCurrentPageUrl, nextPageUrl, prevPageUrl, count, setCount} = useContext(GlobalStateContext)

    function gotoNextPage() {
        if(count>=0 && count<= 55){
            setCount(count+1)
            setCurrentPageUrl(nextPageUrl);
        }else{
            setCurrentPageUrl(`${BASE_URL}`);
        }
      }
      
      function gotoPrevPage() {
        if (count > 0){
            setCount(count-1)
            setCurrentPageUrl(prevPageUrl)
        }else{
            setCurrentPageUrl(`${BASE_URL}`);
        }
      }
  
    return (
    <ButtonChangePage>
      {gotoPrevPage && <ButtonPrevNextPage onClick={gotoPrevPage}>  Previous </ButtonPrevNextPage>}
      {count <= 55 && gotoNextPage && <ButtonPrevNextPage onClick={gotoNextPage}>Next</ButtonPrevNextPage>}
    </ButtonChangePage>
  );
}
