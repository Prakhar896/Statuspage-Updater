import type { AxiosInstance } from 'axios';
import type { ScheduledMaintenances } from '../interfaces/Result';
export declare class ScheduledMaintenancesAPI {
    private readonly apiClient;
    constructor(requestService: AxiosInstance);
    /**
     * Get a list of any active maintenances. This endpoint will only return
     * scheduled maintenances in the *In Progress* or *Verifying* state.
     */
    getActive(): Promise<ScheduledMaintenances>;
    /**
     * Get a list of the 50 most recent scheduled maintenances. This includes
     * scheduled maintenances as described in the above two endpoints, as well
     * as those in the *Completed* state.
     */
    getAll(): Promise<ScheduledMaintenances>;
    /**
     * Get a list of any upcoming maintenances. This endpoint will only return
     * scheduled maintenances still in the *Scheduled* state.
     */
    getUpcoming(): Promise<ScheduledMaintenances>;
}
