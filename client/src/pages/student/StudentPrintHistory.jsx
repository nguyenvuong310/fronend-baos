
import StudentFolderCard from "../../components/StudentFolderCard";
import Footer from "../../components/Footer"
import { useState, useEffect } from "react";
import { getHistory } from "../../service/userService"
const StudentPrintHistory = (props) => {
    const [listhistory, setListhistory] = useState([])
    useEffect(() => {
        const test = async () => {
            try {
                const data = {
                    userid: props.user.userid
                }
                const list = await getHistory(data)
                setListhistory(list.data.data)
            } catch (error) {
                console.error("Error fetching user information:", error);
            }
        };

        test()
    }, []);
    return (
        <>
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">

                <div class="flex h-screen">

                    <div class="flex place-content-center w-full">
                        <div class="overflow-x-auto sm:mx-0.8 lg:mx-0.8 w-11/12">
                            <div class="py-2 pt-10 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden shadow rounded-lg">

                                    {/* TITLE */}

                                    <div class="w-full flex bg-white border-2 border-b-black">
                                        <div class="w-full font-bold px-5 py-5 text-black-600 text-2xl">Lịch sử và tình trạng in</div>
                                    </div>

                                    {/* SEARCH */}
                                    <div class="bg-[#8289ad] border border-b-black flex w-full">
                                        <div class="relative flex-wrap justify-between ml-auto mr-3">
                                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            {/* SEARCH INPUT */}

                                        </div>
                                    </div>

                                    {/* TABLE */}
                                    <div className="flex">
                                        <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                                            <thead class="bg-white shadow-2xl">
                                                <tr>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Tài liệu
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Số trang
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Ngày lấy
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Vị trí
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Trạng thái
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="mt-1">
                                                {listhistory && listhistory.map((history, index) => {
                                                    return <tr className="even:bg-white odd:bg-blue-50">
                                                        <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                            {history.namefile}
                                                        </td>
                                                        <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                            {history.numpage}
                                                        </td>
                                                        <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                            {history.date}
                                                        </td>
                                                        <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                            {history.location}
                                                        </td>
                                                        {history.status ? <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-left">
                                                            <div className="flex bg-[#545F71] w-[8rem] border rounded-full my-2 text-white text-base px-1 py-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#50F204" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-white place-items-center ml-1 mt-1 w-4 h-4">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span className="mx-1 font-semibold">Hoàn thành</span>
                                                            </div>
                                                        </td> : <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-left">
                                                            <div className="flex bg-white w-[10rem] border border-gray-300 rounded-full my-2 text-white text-base px-1 py-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-[#545F71] place-items-center ml-1 mt-1 w-4 h-4">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span className="mx-1 text-[#545F71] font-semibold">Trong hàng chờ</span>
                                                            </div>
                                                        </td>}
                                                    </tr>

                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default StudentPrintHistory;