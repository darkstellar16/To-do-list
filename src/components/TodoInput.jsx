import React, { Fragment } from 'react'

export const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
    return (
        <div className='card card-body my-3 '>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text bg-primary text-white' style={{ height: '100%' }}>
                            <i className='fas fa-book'></i>
                        </div>
                    </div>
                    <input
                        type="text"
                        className='form-control text-capitalize'
                        value={item}
                        onChange={handleChange}
                        placeholder='Add your todo item'
                    />
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='submit'
                        className={editItem ? "btn btn-success mt-3" : "btn btn-primary mt-3"}

                        style={{ width: '100%' }}>{editItem ? "Edit Item" : "Add Item"}</button>
                </div>
            </form>
        </div>
    )
}
