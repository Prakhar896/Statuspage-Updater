"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentStatus = exports.IncidentImpact = exports.MaintenanceStatus = void 0;
var MaintenanceStatus;
(function (MaintenanceStatus) {
    MaintenanceStatus["Completed"] = "completed";
    MaintenanceStatus["InProgress"] = "in_progress";
    MaintenanceStatus["Scheduled"] = "scheduled";
    MaintenanceStatus["Verifying"] = "verifying";
})(MaintenanceStatus = exports.MaintenanceStatus || (exports.MaintenanceStatus = {}));
var IncidentImpact;
(function (IncidentImpact) {
    IncidentImpact["Critical"] = "critical";
    IncidentImpact["Major"] = "major";
    IncidentImpact["Minor"] = "minor";
    IncidentImpact["None"] = "none";
})(IncidentImpact = exports.IncidentImpact || (exports.IncidentImpact = {}));
var IncidentStatus;
(function (IncidentStatus) {
    IncidentStatus["Identified"] = "identified";
    IncidentStatus["Investigating"] = "investigating";
    IncidentStatus["Monitoring"] = "monitoring";
    IncidentStatus["Postmortem"] = "postmortem";
    IncidentStatus["Resolved"] = "resolved";
})(IncidentStatus = exports.IncidentStatus || (exports.IncidentStatus = {}));
//# sourceMappingURL=Result.js.map