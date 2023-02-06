interface Greeting {
    name: string,
    count?: number,
    isLoggedIn: boolean
}

export const Greet = (props: Greeting) => {
    return(
        <>
            <div>Hello {props.name}</div>
            <div>{props.count || <div>No value</div>}</div>
            <div>{props.isLoggedIn && <h2>User is logged In</h2>}</div>
        </>
    )
}