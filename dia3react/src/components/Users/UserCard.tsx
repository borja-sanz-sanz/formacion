import { User } from "./types"

type UserCardProps = {
    user: User
}
export const UserCard = ({user}: UserCardProps) => {
    return <div>
        <p>Nombre: {user.name.first} {user.name.last}</p>
        <p>Email: {user.email}</p>
    </div>
}