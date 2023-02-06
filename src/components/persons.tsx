interface PersonList {
    names: {
        first_name: string,
        last_name: string
    }[]
}

export const Persons = (props: PersonList) => {
    const {names} = props
    return (
        <>
            {
                names.map((item) => (
                    <div key={item.first_name}>
                        <h3>{item.first_name} {item.last_name}</h3>
                    </div>
                ))
            }
        </>
    )
}