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
exports.IncidentsAPI = void 0;
const Endpoints_1 = require("../Endpoints");
class IncidentsAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * Get a list of the 50 most recent incidents. This includes all unresolved
     * incidents as described above, as well as those in the *Resolved* and *Postmortem* state.
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.Incidents.all();
            const { data } = yield this.apiClient.get(endpoint);
            return data;
        });
    }
    /**
     * Get a list of any unresolved incidents. This endpoint will only return
     * incidents in the *Investigating*, *Identified*, or *Monitoring* state.
     */
    getUnresolved() {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.Incidents.unresolved();
            const { data } = yield this.apiClient.get(endpoint);
            return data;
        });
    }
}
exports.IncidentsAPI = IncidentsAPI;
//# sourceMappingURL=IncidentsAPI.js.map