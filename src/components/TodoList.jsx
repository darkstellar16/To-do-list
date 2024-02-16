import React, { Fragment, useState } from 'react'
import { TodoItem } from './TodoItem'



export const TodoList = ({ items, handleDelete, handleEdit }) => {


    return (
        <Fragment>
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>to do list</h3>
                {items.map((item) => {
                    return <TodoItem key={item.id}
                        title={item.item}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)} />
                }
                )}

                <button type="submit" className='btn btn-danger btn-block text-capitalize mt-5 '
                    onClick={() => {
                        console.log("Button clicked");
                    }}>
                    clear list
                </button>
            </ul>

        </Fragment>

    )
}
