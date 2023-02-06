interface Individual {
    first_name: string,
    last_name: string
}

export const Person = (props: Individual) => {
    const {first_name, last_name} = props
    return (
        <div>{first_name} {last_name}</div>
    )
}

export {}