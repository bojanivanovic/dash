// style
import "./css/style.css"
import "./css/layout.css"

// assets
import menuProfilePic from "./res/profile.jpg"
import menuHomeIcon from "./res/home-svgrepo-com.svg"
import menuBoardsIcon from "./res/board-svgrepo-com.svg"
import menuSettingsIcon from "./res/settings-svgrepo-com.svg"

// js
import * as clock from './widgets/clock.js'
import * as timer from './widgets/timer.js'

const profileImg = document.getElementById('nav-profile-link')
profileImg.src = menuProfilePic
const homeImg = document.getElementById('nav-home-link')
homeImg.src = menuHomeIcon
const boardsImg = document.getElementById('nav-boards-link')
boardsImg.src = menuBoardsIcon
const settingsImg = document.getElementById('nav-settings-link')
settingsImg.src = menuSettingsIcon

clock.setDate()
clock.updateClock()

console.log(timer.tsk)
console.log(document)


