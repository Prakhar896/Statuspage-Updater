import type { API } from './interfaces/API';
export declare class Statuspage {
    readonly api: API;
    private readonly apiClient;
    constructor(pageId: string);
    /**
     * Set a new API URL.
     * @param newUrl The new API url
     */
    setApiUrl(newUrl: string): void;
    /**
     * Get the components for the page. Each component is listed along with its status -
     * one of `operational`, `degraded_performance`, `partial_outage`, or `major_outage`.
     */
    private readonly getComponents;
    /**
     * Get the status rollup for the whole page. This endpoint includes an indicator -
     * one of `none`, `minor`, `major`, or `critical`, as well as a human description of the
     * blended component status. Examples of the blended status include "All Systems
     * Operational", "Partial System Outage", and "Major Service Outage".
     */
    private readonly getStatus;
    /**
     * Get a summary of the status page, including a status indicator, component statuses,
     * unresolved incidents, and any upcoming or in-progress scheduled maintenances.
     */
    private readonly getSummary;
}
