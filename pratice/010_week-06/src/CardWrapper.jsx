export default function CardWrapper({ children }) {
    console.log(children);
    return (
        <div style={{ border: "2px solid black", margin: "10px" }}>
            {children}
        </div>
    );
}
