import type { AxiosInstance } from 'axios';
import type { Incidents } from '../interfaces/Result';
export declare class IncidentsAPI {
    private readonly apiClient;
    constructor(apiClient: AxiosInstance);
    /**
     * Get a list of the 50 most recent incidents. This includes all unresolved
     * incidents as described above, as well as those in the *Resolved* and *Postmortem* state.
     */
    getAll(): Promise<Incidents>;
    /**
     * Get a list of any unresolved incidents. This endpoint will only return
     * incidents in the *Investigating*, *Identified*, or *Monitoring* state.
     */
    getUnresolved(): Promise<Incidents>;
}
