
import React, {useEffect, useState} from 'react';
import axios from './../functions/axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
const Search = () => {

        let { topicId } = useParams();
      
        return (
          <div className="pt-5 mt-5">
            <h3>{topicId}</h3>
          </div>
        );

    // const [books,setBook] = useState ([]);
    // useEffect(()=> {
    //     axios.get('/api/books')
    //     .then(res => {
    //         setBook(res.data);
    //     });
    // },[]);

    // return (
    //     <div>
    //         <div className="container p-5 mt-5" >
    //             <div className="row">
    //                 {books.map((item,i) => (
    //                     <div className="col-12 border border-1 p-2 mb-2" key={i}>
    //                         <div className="row">
    //                             <div className="col-4" >
    //                                 <img src={"https://picsum.photos/id/80/250/270"} className="img-fluid" alt="..." />
    //                             </div>
    //                             <div className="col-8">
    //                                 <table className="table small">
    //                                     <thead>
    //                                         <tr>
    //                                             <th className="display-6">{item.title}</th>
    //                                             <th></th>
    //                                         </tr>
    //                                     </thead>
    //                                     <tbody>
    //                                         <tr>
    //                                             <td className="fw-bold">Author</td>
    //                                             <td>{item.author}</td>
    //                                         </tr>
    //                                         <tr>
    //                                             <td className="fw-bold">Publisher</td>
    //                                             <td>{item.title}</td>
    //                                         </tr>
    //                                         <tr>
    //                                             <td className="fw-bold">Year</td>
    //                                             <td>{item.year}</td>
    //                                         </tr>
    //                                     </tbody>
    //                                 </table>
    //                                 <button type="button" className="btn btn-outline-primary">Borrow</button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // )

}
export default Search;