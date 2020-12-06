import React from 'react';

export const DropDown = () => {
    return (
        <div>

            <label for="moreaction">More Action:</label>
            <select name="moreaction" id="moreaction">
                <option value="view">View</option>
                <option value="edit">Edit</option>
                <option value="send">Send</option>
                <option value="delete" class="delete">Delete</option>

            </select>
        </div>)
}