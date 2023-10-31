'use client'

import React from "react"

export default function InviteFrom () {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        // console.log(data.get('name'))
        const data = {
            data = formData.get('name') 
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Evento
                <input type="text" placeholder="feli juangulin 🎃" name="name"/>
            </label>
            <button>Crear invitacion</button>
        </form>
    )
}