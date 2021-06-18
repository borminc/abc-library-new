
import { set } from 'lodash';
import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from './../functions/axios';
const Borrow = () => {

    let {bookId} = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        axios.get('/api/books/' + bookId)
        .then(res => {
            setBook(res.data);
        });
    }, [bookId]);



    return (
        <>
            {book && (
                <div className="container pt-5 mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3">
                                    <img src={book.image} className="card-img-top" alt="" />
                                </div>
                                <div className="col-8">
                                    <table className="table small">
                                        <thead>
                                            <tr>
                                                <th className="display-5">{book.title}</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="fw-bold">Author</td>
                                                <td>{book.author}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Year</td>
                                                <td>{book.year}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Publisher</td>
                                                <td>{book.publisher}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Category</td>
                                                <td>category</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Stock</td>
                                                <td>{book.stock}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="container pt-2">
                            <h3>Description</h3>
                            <p>{book.description}</p>
                        </div>
                    </div>

                    <div className="container pt-5 mt-5">
                        <div className="card-group">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Rule and Policy</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="small">
                                            <li>Give the book back in a timely manner.</li>
                                            <li>Do not fold down the corners</li>
                                            <li>Don't lend it to others</li>
                                            <li>Don't write in, underline, or highlight ANYTHING.</li>
                                            <li>Don't take the book in the bath or to the pool.</li>
                                            <li>Don't lose the dust jacket.</li>
                                            <li>If you lose or maim it, buy a replacement</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Overdue Materials</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="small">
                                            <li>When any borrowed item becomes overdue, borrowing privileges are automatically suspended</li>
                                            <li>For items more than the due date, a bill for its replacement will be issued:
                                                <ul>
                                                    <li>$1.00 for 1 day</li>
                                                </ul>
                                            </li>
                                            <li>Borrowing privileges will be restored after return of all late materials and/or payment of all fees</li>
                                            <li>Outstanding charges may be referred to a collection agency after 30 days, and registration blocks may be applied</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <p>Click button below to confirm your borrow</p>
                        <button type="button" className="btn btn-primary">Borrow</button>
                    </div>
                </div>
            )}
        </>
    )

}
export default Borrow;