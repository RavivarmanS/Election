import React from 'react'
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
export const SidebarData = [

    {
        title: "Home",
        icon:<HomeIcon/>,
        link:'/'

    },
    {
        title: "House List",
        icon:<LocalLibraryIcon/>,
        link:'/students'

    },
    {
        title: "Students Report",
        icon:<GroupIcon/>,
        link:'/candidate'

    },
    {
        title: "Voting",
        icon:<AssessmentIcon/>,
        link:'/voting'

    },
    {
        title: "Results",
        icon:<WorkspacePremiumIcon/>,
        link:'/result'

    },

]