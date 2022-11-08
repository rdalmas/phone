import { Note } from "./Note";

type Call = {
    /** "unique ID of call" */
    id: string;
    /** "inbound" or "outbound" call */
    direction: string; 
    /** Caller's number */
    from: string;
    /** Callee's number */
    to: string;
    /** Duration of a call (in seconds) */
    duration: number;
    /** Boolean that indicates if the call is archived or not */
    is_archived: boolean;
    /** The type of the call, it can be a missed, answered or voicemail. */
    call_type: string;
    /** Aircall number used for the call. */
    via: string; 
    /** When the call has been made. */
    created_at: string;
    /** Notes related to a given call */
    notes: Note[];
}

type PaginatedCalls = {
    nodes: Call[];
    totalCount: number;
    hasNextPage: boolean;
}

export type {
    Call,
    PaginatedCalls,
}
