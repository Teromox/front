import { LoadingContainer } from "./style/LoadingStyle";
import { ThreeDot } from "react-loading-indicators";

function Loading() {
    return (
        <LoadingContainer>
            <ThreeDot variant="bounce" color="#000000" size="medium" text="" textColor="#000000" />
        </LoadingContainer>
    )
}

export default Loading