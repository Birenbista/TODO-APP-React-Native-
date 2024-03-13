import { useEffect } from 'react'
import * as database from '../../database'
import { useDispatch } from "react-redux"
import { setTasks } from "../../redux/taskSlice"
import * as SplashScreen from 'expo-splash-screen';


export default function AppLoader() {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const data = await database.load();

            dispatch(setTasks(data))
        })()
        SplashScreen.hideAsync();

    }, [])

}