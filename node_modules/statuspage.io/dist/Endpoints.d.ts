export declare namespace Endpoint {
    namespace Incidents {
        function all(): string;
        function unresolved(): string;
    }
    namespace ScheduledMaintenances {
        function active(): string;
        function all(): string;
        function upcoming(): string;
    }
    function components(): string;
    function summary(): string;
    function status(): string;
    function subscribers(): string;
}
