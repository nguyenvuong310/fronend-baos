import { useState, useEffect } from "react";
import BuyPageModal from "../../components/BuyPageModal";
import StudentFileCard from "../../components/StudentFileCard"
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getDocByUserid } from "../../service/userService";
import UploadModal from "../../components/UploadModal";
const FolderView = (props) => {
    useEffect(() => {

    }, []);
    return (
        <>
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
                <div class="grid grid-cols-4 gap-[4rem] mt-2">
                    abc
                </div>
            </div>

            <Footer />

        </>
    );
};

export default FolderView;