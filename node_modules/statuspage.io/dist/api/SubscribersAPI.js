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
exports.SubscribersAPI = void 0;
const Endpoints_1 = require("../Endpoints");
class SubscribersAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    createComponentSubscription(subscriberData) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.subscribers();
            const { data } = yield this.apiClient.get(endpoint, { params: { subscriber: subscriberData } });
            return data;
        });
    }
    createIncidentSubscription(subscriberData) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.subscribers();
            const { data } = yield this.apiClient.get(endpoint, { params: { subscriber: subscriberData } });
            return data;
        });
    }
    createPageSubscription(subscriptionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.subscribers();
            const { data } = yield this.apiClient.get(endpoint, { params: { subscriber: subscriptionData } });
            return data;
        });
    }
    /**
     * @param options Subscriber options.
     */
    getSubscription(subscriberId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.subscribers();
            const { data } = yield this.apiClient.get(endpoint, { params: { subscriber: { id: subscriberId } } });
            return data;
        });
    }
    /**
     * To cancel a subscription, you need to submit a 'DELETE' request with the the subscription id.
     */
    removeSubscription(subscriberId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = Endpoints_1.Endpoint.Incidents.all();
            const { data } = yield this.apiClient.delete(endpoint, { params: { subscriber: { id: subscriberId } } });
            return data;
        });
    }
}
exports.SubscribersAPI = SubscribersAPI;
//# sourceMappingURL=SubscribersAPI.js.map