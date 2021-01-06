import { ServiceResponse } from "andculturecode-javascript-core";
import { RequestOptions } from "../interfaces/request-options";

/**
 * Type defining the service function for listing resources by supplied type
 *
 * @param queryParams Object with query parameters to be appended to the endpoint route
 */
export type ListService<TRecord, TQueryParams> = (
    queryParams?: TQueryParams,
    requestOptions?: RequestOptions
) => Promise<ServiceResponse<TRecord>>;
