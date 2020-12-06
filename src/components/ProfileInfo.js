import React from 'react'
import axios from 'axios'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DisplayName from './DisplayName'

export const ProfileInfo = () => {
    const [userid, setUser] = React.useState(2)
    const [res, setRes] = React.useState(null)

    React.useEffect(() => {
        axios.get(`https://reqres.in/api/users/${userid}`)
            .then(function (result) {

                setRes(result.data)
                console.log(result.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {

            });



    }, [])
    return (<div>

        <br />
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        {/* <ImageIcon /> */}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={res == null ? "Loading" : <DisplayName response={res.data} />} secondary={res == null ? "Loading" : res.data.email} />
            </ListItem>
        </div>

    </div>)

}
