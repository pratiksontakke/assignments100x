import CardWrapper from "./CardWrapper";

export default function CardWrapperOuter() {
    return (
        <div>
            <CardWrapper>Children 101</CardWrapper>
        </div>
    );
}

function TextComponent() {
    return <h1>Hi there</h1>;
}
