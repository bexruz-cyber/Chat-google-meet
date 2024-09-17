"use client"

import {FC, ReactNode} from "react"
import SharedLayout from "@/components/shared-layout"
import ChatSidebar from "@/components/chat-sidebar"

type ChatsLayout = {
    children: ReactNode
}
export const ChatsLayout: FC<ChatsLayout> = ({children}) => {
    return <SharedLayout SidebarComponent={() => <ChatSidebar/>}>
        {children}
    </SharedLayout>
}