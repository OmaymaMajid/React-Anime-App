import React from 'react';
import { Table } from "react-bootstrap";
import Natsu from './NatsuDragneel.jpg'; 
export default function Main(){
    return(
        <>
        <h1>Fairy Tail</h1>
        <Table striped bordered hover>
        <thead>
        <tr>
            <th>Image</th>
            <th>name</th>
            <th>Caracteristiques</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><img src={Natsu} width="100px" /></td>
            <td>Natsu Dragneel</td>
            <td>...</td>
        </tr>
        </tbody>
       
        </Table>
        </>


    )
}