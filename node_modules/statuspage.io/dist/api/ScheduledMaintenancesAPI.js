"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledMaintenancesAPI = void 0;
const Endpoints_1 = require("../Endpoints");
class ScheduledMaintenancesAPI {
    constructor(requestService) {
        this.apiClient = requestService;
    }
    /**
     * Get a list of any active maintenances. This endpoint will only return
     * scheduled maintenances in the *In Progress* or *Verifying* state.
     */
    getActive() {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.ScheduledMaintenances.upcoming();
            const { data } = yield this.apiClient.get(endpoint);
            return data;
        });
    }
    /**
     * Get a list of the 50 most recent scheduled maintenances. This includes
     * scheduled maintenances as described in the above two endpoints, as well
     * as those in the *Completed* state.
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.ScheduledMaintenances.upcoming();
            const { data } = yield this.apiClient.get(endpoint);
            return data;
        });
    }
    /**
     * Get a list of any upcoming maintenances. This endpoint will only return
     * scheduled maintenances still in the *Scheduled* state.
     */
    getUpcoming() {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.ScheduledMaintenances.upcoming();
            const { data } = yield this.apiClient.get(endpoint);
            return data;
        });
    }
}
exports.ScheduledMaintenancesAPI = ScheduledMaintenancesAPI;
//# sourceMappingURL=ScheduledMaintenancesAPI.js.map