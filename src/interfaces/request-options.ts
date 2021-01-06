// -----------------------------------------------------------------------------------------
// #region Interface
// -----------------------------------------------------------------------------------------

interface RequestOptions {
    /**
     * `headers` The HTTP headers that the client is requesting, such as `HttpHeader.ContentType`
     *
     * @example
     * { [HttpHeader.ContentType]: "application/json" }
     * @type {*}
     * @memberof RequestOptions
     */
    headers?: any;

    /**
     * `timeout` specifies the number of milliseconds before the request times out.
     * If the request takes longer than `timeout`, the request will be aborted.
     *
     * @default `0` (no timeout)
     * @type {number}
     * @memberof RequestOptions
     */
    timeout?: number;
}

// #endregion Interface

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { RequestOptions };

// #endregion Exports
