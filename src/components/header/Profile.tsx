import React, {useEffect} from "react";
import bell from "../../recources/photos/bell_3.svg";
import {useSelector} from "react-redux";
import {RootState, useTypeDispatch} from "../../store/store";
import {getProfile} from "../../store/backend_api/fetch_profile";


export const Profile : React.FC = () => {
    const {profile} = useSelector((state: RootState) => state.fetchProfileReducer)
    const dispatch = useTypeDispatch()

    useEffect(() => {
        dispatch(getProfile())
    }, [])

    return (
        <div className={"profile"}>
                    <span className={"profile__name"}>
                        {profile.login}
                    </span>
            <div className={"profile__avatar"}>
                <img className={"profile__avatar-img"}
                     src="https://phonoteka.org/uploads/posts/2021-05/1622024717_28-phonoteka_org-p-akhegao-piksel-art-krasivo-37.jpg"
                     alt=""/>
            </div>
            <div className={"profile__notifications"}>
                <img className={"profile__notifications-img"} src={bell} alt=""/>
            </div>
            <span className={"profile__more"}>...</span>
        </div>
    )
}

