"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
var Endpoint;
(function (Endpoint) {
    const ACTIVE_JSON = 'upcoming.json';
    const API_V2_BASE = 'api/v2';
    const COMPONENTS_JSON = 'components.json';
    const INCIDENTS = 'incidents';
    const INCIDENTS_JSON = 'incidents.json';
    const SCHEDULED_MAINTENANCES = 'scheduled-maintenances';
    const SCHEDULED_MAINTENANCES_JSON = 'scheduled-maintenances.json';
    const STATUS_JSON = 'status.json';
    const SUBSCRIBERS_JSON = 'subscribers.json';
    const SUMMARY_JSON = 'summary.json';
    const UNRESOLVED_JSON = 'unresolved.json';
    const UPCOMING_JSON = 'upcoming.json';
    let Incidents;
    (function (Incidents) {
        function all() {
            return `/${API_V2_BASE}/${INCIDENTS_JSON}`;
        }
        Incidents.all = all;
        function unresolved() {
            return `/${API_V2_BASE}/${INCIDENTS}/${UNRESOLVED_JSON}`;
        }
        Incidents.unresolved = unresolved;
    })(Incidents = Endpoint.Incidents || (Endpoint.Incidents = {}));
    let ScheduledMaintenances;
    (function (ScheduledMaintenances) {
        function active() {
            return `/${API_V2_BASE}/${SCHEDULED_MAINTENANCES}/${ACTIVE_JSON}`;
        }
        ScheduledMaintenances.active = active;
        function all() {
            return `/${API_V2_BASE}/${SCHEDULED_MAINTENANCES_JSON}`;
        }
        ScheduledMaintenances.all = all;
        function upcoming() {
            return `/${API_V2_BASE}/${SCHEDULED_MAINTENANCES}/${UPCOMING_JSON}`;
        }
        ScheduledMaintenances.upcoming = upcoming;
    })(ScheduledMaintenances = Endpoint.ScheduledMaintenances || (Endpoint.ScheduledMaintenances = {}));
    function components() {
        return `/${API_V2_BASE}/${COMPONENTS_JSON}`;
    }
    Endpoint.components = components;
    function summary() {
        return `/${API_V2_BASE}/${SUMMARY_JSON}`;
    }
    Endpoint.summary = summary;
    function status() {
        return `/${API_V2_BASE}/${STATUS_JSON}`;
    }
    Endpoint.status = status;
    function subscribers() {
        return `/${API_V2_BASE}/${SUBSCRIBERS_JSON}`;
    }
    Endpoint.subscribers = subscribers;
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
//# sourceMappingURL=Endpoints.js.map