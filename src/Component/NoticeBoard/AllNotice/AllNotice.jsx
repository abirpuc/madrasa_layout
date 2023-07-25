import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './allnotice.css'
import { Link } from 'react-router-dom';
import pdf_1 from '../../../noticpdf/notice _1.pdf'
import pdf_2 from '../../../noticpdf/notice.pdf'
import pdf_3 from '../../../noticpdf/notice_2.pdf'
import pdf_4 from '../../../noticpdf/notice_3.pdf'
import pdf_5 from '../../../noticpdf/notice_4.pdf'


const column = [
    {
        name: 'ক্রমিক ',
        selector: (_, index) => index + 1,
        sortable: false,
        width:"100px",
        wrap:true,
        wrapHeader:true,
       
    },
    {
        name: 'শিরোনাম ',
        selector: row => row.name,
        sortable: true,
        wrap:true,
        width: "220px",
        wrapHeader: true
       
    },
    {
        name: 'প্রকাশের তারিক',
        selector: row => row.publishData,
        sortable: true,
        wrap:true,
        wrapHeader: true
       
    },
    {
        name: 'ভিউ',
        selector: row => row.view,
        sortable: true,
        wrap:true,
        wrapHeader: true,
        width:"70px"
      
    },
    {
        name: 'ডাউনলোড',
        selector: row => row.download,
        sortable: true,
        wrap:true,
        wrapHeader: true
      
    },
]

const data = [
    {
        id: 1,
        name: 'ড্রাইভিং প্রশিক্ষক নিয়োজন বিজ্ঞপ্তি',
        publishData: '01-05-23',
        view: <Link><i className="fa-sharp fa-solid fa-eye" style={{color:'#000000'}}></i></Link>,
        download: <Link to={pdf_1} download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"><i className="fa-solid fa-cloud-arrow-down" style={{color:'#000000'}}></i></Link>
    },
    
    {
        id: 3,
        name: 'মে-আগস্ট সেসনে বিনা কোর্স ফিতে মোটর ড্রাইভিং উইথ বেসিক মেইনটেন্যান্স কোর্সে ভর্ত',
        publishData: '01-05-23',
        view: <Link><i className="fa-sharp fa-solid fa-eye" style={{color:'#000000'}}></i></Link>,
        download:<Link to={pdf_2} download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"><i className="fa-solid fa-cloud-arrow-down" style={{color:'#000000'}}></i></Link>
    },
    {
        id: 4,
        name: 'ট্রেডসমূহের সাবস্টোর/লাইব্রেরী/সিকিউরিটি/স্পোর্টস গুডস/একাডেমিক/মেইন স্টোর ভেরিফ',
        publishData: '01-05-23',
        view: <Link><i className="fa-sharp fa-solid fa-eye" style={{color:'#000000'}}></i></Link>,
        download: <Link to={pdf_3} download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"><i className="fa-solid fa-cloud-arrow-down" style={{color:'#000000'}}></i></Link>
    },
    {
        id: 5,
        name: 'নারায়ণগঞ্জ টিএসসি-তে ই-গভর্ন্যান্স ও উদ্ভাবন কর্মপরিকল্পনা ২০২২-২৩ বাস্তবায়ন সংক',
        publishData: '01-05-23',
        view: <Link ><i className="fa-sharp fa-solid fa-eye" style={{color:'#000000'}}></i></Link>,
        download: <Link to={pdf_4} download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"><i className="fa-solid fa-cloud-arrow-down" style={{color:'#000000'}}></i></Link>
    },
    {
        id: 6,
        name: 'নবম শ্রেণির ফলাফল ২০২২',
        publishData: '01-05-23',
        view: <Link><i className="fa-sharp fa-solid fa-eye" style={{color:'#000000'}}></i></Link>,
        download: <Link to={pdf_5} download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"><i className="fa-solid fa-cloud-arrow-down" style={{color:'#000000'}}></i></Link>
    },
]

const AllNotice = () => {
    const [search, setSearch] = useState(data)
    const handleSearch = (event) => {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        // console.log(newData)
        setSearch(newData)
    }

    return (
        <div>
            <h3>সকল নোটিশ </h3>
            <div className="search__field">
                <label htmlFor="">Search</label>
                <input className='input__field' type="text" placeholder='search by name' onChange={handleSearch} />
            </div>
            <DataTable
                columns={column}
                data={search}
                highlightOnHover
                striped
                pagination
            />
            {/* <table>
                <tr>
                    <th className="id">ক্রমিক</th>
                    <th className="name">শিরোনাম</th>
                    <th className='pub__date'>প্রকাশের তারিক</th>
                    <th className='view'>ভিউ</th>
                    <th className='download'>ডাউনলোড</th>
                </tr>
                <tbody>
                    {
                        search.map((d,idx) =>{
                            return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{d.name}</td>
                                <td>{d.publishData}</td>
                                <td className='table__icon'>{d.view}</td>
                                <td className='table__icon'>{d.download}</td>
                            </tr>
                            )
                        })
                    }

                    </tbody>
            </table> */}
        </div>
    );
};

export default AllNotice;