import type { AxiosInstance } from 'axios';
import type { ComponentSubscriberData, EmailSubscriberData, IncidentSubscriberData, PhoneSubscriberData, WebhookSubscriberData } from '../interfaces/Request';
import type { CombinedSubscriber, EmailSubscriber, PhoneSubscriber, WebhookSubscriber } from '../interfaces/Result';
export declare class SubscribersAPI {
    private readonly apiClient;
    constructor(apiClient: AxiosInstance);
    /**
     * @param options Subscriber options.
     */
    createComponentSubscription(emailSubscriber: EmailSubscriberData & ComponentSubscriberData): Promise<EmailSubscriber>;
    createComponentSubscription(smsSubscriber: PhoneSubscriberData & ComponentSubscriberData): Promise<PhoneSubscriber>;
    createComponentSubscription(webhookSubscriber: WebhookSubscriberData & ComponentSubscriberData): Promise<WebhookSubscriber>;
    /**
     * When an incident is created, a subscriber can be associated
     * to that incident to receive notifications on updates until the
     * incident is resolved. The incident must be in an unresolved
     * state to subscribe to it.
     * @param options Subscriber options.
     */
    createIncidentSubscription(emailSubscriber: EmailSubscriberData & IncidentSubscriberData): Promise<EmailSubscriber>;
    createIncidentSubscription(smsSubscriber: PhoneSubscriberData & IncidentSubscriberData): Promise<PhoneSubscriber>;
    createIncidentSubscription(webhookSubscriber: WebhookSubscriberData & IncidentSubscriberData): Promise<WebhookSubscriber>;
    /**
     * A page subscriber is by default subscribed to all incidents associated with a page.
     * @param options Subscriber options.
     */
    createPageSubscription(emailSubscriber: EmailSubscriberData): Promise<EmailSubscriber>;
    createPageSubscription(smsSubscriber: PhoneSubscriberData): Promise<PhoneSubscriber>;
    createPageSubscription(webhookSubscriber: WebhookSubscriberData): Promise<WebhookSubscriber>;
    /**
     * @param options Subscriber options.
     */
    getSubscription(subscriberId: string): Promise<CombinedSubscriber>;
    /**
     * To cancel a subscription, you need to submit a 'DELETE' request with the the subscription id.
     */
    removeSubscription(subscriberId: string): Promise<boolean>;
}
