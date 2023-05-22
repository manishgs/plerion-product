import { ErrorInfo } from "react";

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo | null;
  onReset(): void;
}

export function ErrorDetails(props: ErrorDetailsProps) {
  return (
    <div>
      <p>{props.error.message}</p>
      <p> {props.errorInfo?.componentStack}</p>
      <p>{"props.onReset"}</p>
    </div>
  );
}
