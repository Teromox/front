/*
public record ErrorResponse(
        Integer errorCode,
        String errorMsg,
        String errorDescription
) {
*/

export interface ErrorType {
    errorCode: number;
    errorMsg: string;
    errorDescription: string;
}