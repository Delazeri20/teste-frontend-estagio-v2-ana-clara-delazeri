import React from 'react';
import equipmentData from '../data/equipment.json';
import stateHistoryData from '../data/equipmentStateHistory.json'

function Equipments() {

    const names = []
    const state = []
    const id = []
    for (let i = 0; i < equipmentData.length && stateHistoryData.length; i++) {
        if (stateHistoryData[i].states[i].equipmentStateId === "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f") {
            stateHistoryData[i].states[i].equipmentStateId = "Manutenção"
        } else if (stateHistoryData[i].states[i].equipmentStateId === "baff9783-84e8-4e01-874b-6fd743b875ad") {
            stateHistoryData[i].states[i].equipmentStateId = "Parado"
        } else if (stateHistoryData[i].states[i].equipmentStateId === "0808344c-454b-4c36-89e8-d7687e692d57") {
            stateHistoryData[i].states[i].equipmentStateId = "Operando"
        }
        names.push(<p>{`${equipmentData[i].name}`}</p>)
        state.push(<p>{`${stateHistoryData[i].states[i].equipmentStateId}`}</p>)
        id.push(<p>{`${equipmentData[i].id}`}</p>)
    }

    return (
        <>
            <table className='table'>
                <tr>
                    <td>Nome</td>
                    <td>Estado</td>
                    <td>Id</td>
                </tr>
                <tr>
                    <td>{names}</td>
                    <td>{state}</td>
                    <td>{id}</td>
                </tr>
            </table>
        </>
    );
}


export default Equipments;