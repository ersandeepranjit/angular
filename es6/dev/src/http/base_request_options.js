var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { isPresent, isString } from 'angular2/src/facade/lang';
import { Headers } from './headers';
import { RequestMethod } from './enums';
import { Injectable } from 'angular2/core';
import { URLSearchParams } from './url_search_params';
import { normalizeMethodName } from './http_utils';
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from 'angular2/http';
 *
 * var options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * var req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 */
export class RequestOptions {
    constructor({ method, headers, body, url, search } = {}) {
        this.method = isPresent(method) ? normalizeMethodName(method) : null;
        this.headers = isPresent(headers) ? headers : null;
        this.body = isPresent(body) ? body : null;
        this.url = isPresent(url) ? url : null;
        this.search = isPresent(search) ?
            (isString(search) ? new URLSearchParams((search)) : (search)) :
            null;
    }
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from 'angular2/http';
     *
     * var options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * var req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    merge(options) {
        return new RequestOptions({
            method: isPresent(options) && isPresent(options.method) ? options.method : this.method,
            headers: isPresent(options) && isPresent(options.headers) ? options.headers : this.headers,
            body: isPresent(options) && isPresent(options.body) ? options.body : this.body,
            url: isPresent(options) && isPresent(options.url) ? options.url : this.url,
            search: isPresent(options) && isPresent(options.search) ?
                (isString(options.search) ? new URLSearchParams((options.search)) :
                    (options.search).clone()) :
                this.search
        });
    }
}
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
 *
 * ```typescript
 * import {provide} from 'angular2/core';
 * import {bootstrap} from 'angular2/platform/browser';
 * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from 'angular2/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from 'angular2/http';
 *
 * var options = new BaseRequestOptions();
 * var req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 */
export let BaseRequestOptions = class extends RequestOptions {
    constructor() {
        super({ method: RequestMethod.Get, headers: new Headers() });
    }
};
BaseRequestOptions = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], BaseRequestOptions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9yZXF1ZXN0X29wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXczRFJsWEppLnRtcC9hbmd1bGFyMi9zcmMvaHR0cC9iYXNlX3JlcXVlc3Rfb3B0aW9ucy50cyJdLCJuYW1lcyI6WyJSZXF1ZXN0T3B0aW9ucyIsIlJlcXVlc3RPcHRpb25zLmNvbnN0cnVjdG9yIiwiUmVxdWVzdE9wdGlvbnMubWVyZ2UiLCJCYXNlUmVxdWVzdE9wdGlvbnMiLCJCYXNlUmVxdWVzdE9wdGlvbnMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLDBCQUEwQjtPQUNyRCxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVc7T0FDMUIsRUFBQyxhQUFhLEVBQUMsTUFBTSxTQUFTO09BRTlCLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZTtPQUNqQyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQjtPQUM1QyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sY0FBYztBQUVoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFDSDtJQXVCRUEsWUFBWUEsRUFBQ0EsTUFBTUEsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsTUFBTUEsRUFBQ0EsR0FBdUJBLEVBQUVBO1FBQ3ZFQyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxtQkFBbUJBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3JFQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNuREEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3ZDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQTtZQUMzQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsZUFBZUEsQ0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBb0JBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ3RGQSxJQUFJQSxDQUFDQTtJQUNYQSxDQUFDQTtJQUVERDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bd0JHQTtJQUNIQSxLQUFLQSxDQUFDQSxPQUE0QkE7UUFDaENFLE1BQU1BLENBQUNBLElBQUlBLGNBQWNBLENBQUNBO1lBQ3hCQSxNQUFNQSxFQUFFQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQTtZQUN0RkEsT0FBT0EsRUFBRUEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsT0FBT0EsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0E7WUFDMUZBLElBQUlBLEVBQUVBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBO1lBQzlFQSxHQUFHQSxFQUFFQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxPQUFPQSxDQUFDQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQTtZQUMxRUEsTUFBTUEsRUFBRUEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQ25EQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxJQUFJQSxlQUFlQSxDQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtvQkFDM0JBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUVBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO2dCQUN4RUEsSUFBSUEsQ0FBQ0EsTUFBTUE7U0FDaEJBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0FBQ0hGLENBQUNBO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ0c7QUFDSCw4Q0FDd0MsY0FBYztJQUNwREc7UUFBZ0JDLE1BQU1BLEVBQUNBLE1BQU1BLEVBQUVBLGFBQWFBLENBQUNBLEdBQUdBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLE9BQU9BLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO0lBQUNBLENBQUNBO0FBQy9FRCxDQUFDQTtBQUhEO0lBQUMsVUFBVSxFQUFFOzt1QkFHWjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGlzU3RyaW5nfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtSZXF1ZXN0TWV0aG9kfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7UmVxdWVzdE9wdGlvbnNBcmdzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICcuL3VybF9zZWFyY2hfcGFyYW1zJztcbmltcG9ydCB7bm9ybWFsaXplTWV0aG9kTmFtZX0gZnJvbSAnLi9odHRwX3V0aWxzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVxdWVzdCBvcHRpb25zIG9iamVjdCB0byBiZSBvcHRpb25hbGx5IHByb3ZpZGVkIHdoZW4gaW5zdGFudGlhdGluZyBhXG4gKiB7QGxpbmsgUmVxdWVzdH0uXG4gKlxuICogVGhpcyBjbGFzcyBpcyBiYXNlZCBvbiB0aGUgYFJlcXVlc3RJbml0YCBkZXNjcmlwdGlvbiBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdGluaXQpLlxuICpcbiAqIEFsbCB2YWx1ZXMgYXJlIG51bGwgYnkgZGVmYXVsdC4gVHlwaWNhbCBkZWZhdWx0cyBjYW4gYmUgZm91bmQgaW4gdGhlIHtAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9XG4gKiBjbGFzcywgd2hpY2ggc3ViLWNsYXNzZXMgYFJlcXVlc3RPcHRpb25zYC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvN1d2aTNsZkxxNDFhUVBLbHhCNE8/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge1JlcXVlc3RPcHRpb25zLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiB2YXIgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gKiAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0LFxuICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gKiB9KTtcbiAqIHZhciByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zKTtcbiAqIGNvbnNvbGUubG9nKCdyZXEubWV0aG9kOicsIFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0pOyAvLyBQb3N0XG4gKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogSHR0cCBtZXRob2Qgd2l0aCB3aGljaCB0byBleGVjdXRlIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKiBBY2NlcHRhYmxlIG1ldGhvZHMgYXJlIGRlZmluZWQgaW4gdGhlIHtAbGluayBSZXF1ZXN0TWV0aG9kfSBlbnVtLlxuICAgKi9cbiAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kfHN0cmluZztcbiAgLyoqXG4gICAqIHtAbGluayBIZWFkZXJzfSB0byBiZSBhdHRhY2hlZCB0byBhIHtAbGluayBSZXF1ZXN0fS5cbiAgICovXG4gIGhlYWRlcnM6IEhlYWRlcnM7XG4gIC8qKlxuICAgKiBCb2R5IHRvIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBhIHtAbGluayBSZXF1ZXN0fS5cbiAgICovXG4gIC8vIFRPRE86IHN1cHBvcnQgRm9ybURhdGEsIEJsb2IsIFVSTFNlYXJjaFBhcmFtc1xuICBib2R5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVcmwgd2l0aCB3aGljaCB0byBwZXJmb3JtIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZWFyY2ggcGFyYW1ldGVycyB0byBiZSBpbmNsdWRlZCBpbiBhIHtAbGluayBSZXF1ZXN0fS5cbiAgICovXG4gIHNlYXJjaDogVVJMU2VhcmNoUGFyYW1zO1xuICBjb25zdHJ1Y3Rvcih7bWV0aG9kLCBoZWFkZXJzLCBib2R5LCB1cmwsIHNlYXJjaH06IFJlcXVlc3RPcHRpb25zQXJncyA9IHt9KSB7XG4gICAgdGhpcy5tZXRob2QgPSBpc1ByZXNlbnQobWV0aG9kKSA/IG5vcm1hbGl6ZU1ldGhvZE5hbWUobWV0aG9kKSA6IG51bGw7XG4gICAgdGhpcy5oZWFkZXJzID0gaXNQcmVzZW50KGhlYWRlcnMpID8gaGVhZGVycyA6IG51bGw7XG4gICAgdGhpcy5ib2R5ID0gaXNQcmVzZW50KGJvZHkpID8gYm9keSA6IG51bGw7XG4gICAgdGhpcy51cmwgPSBpc1ByZXNlbnQodXJsKSA/IHVybCA6IG51bGw7XG4gICAgdGhpcy5zZWFyY2ggPSBpc1ByZXNlbnQoc2VhcmNoKSA/XG4gICAgICAgIChpc1N0cmluZyhzZWFyY2gpID8gbmV3IFVSTFNlYXJjaFBhcmFtcyg8c3RyaW5nPihzZWFyY2gpKSA6IDxVUkxTZWFyY2hQYXJhbXM+KHNlYXJjaCkpIDpcbiAgICAgICAgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgYFJlcXVlc3RPcHRpb25zYCBpbnN0YW5jZSwgdXNpbmcgdGhlIG9wdGlvbmFsIGlucHV0IGFzIHZhbHVlcyB0byBvdmVycmlkZVxuICAgKiBleGlzdGluZyB2YWx1ZXMuIFRoaXMgbWV0aG9kIHdpbGwgbm90IGNoYW5nZSB0aGUgdmFsdWVzIG9mIHRoZSBpbnN0YW5jZSBvbiB3aGljaCBpdCBpcyBiZWluZ1xuICAgKiBjYWxsZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgaGVhZGVyc2AgYW5kIGBzZWFyY2hgIHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgdmFsdWVzIGNvbXBsZXRlbHkgaWYgcHJlc2VudCBpblxuICAgKiB0aGUgYG9wdGlvbnNgIG9iamVjdC4gSWYgdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBtZXJnZWQsIGl0IHNob3VsZCBiZSBkb25lIHByaW9yIHRvIGNhbGxpbmdcbiAgICogYG1lcmdlYCBvbiB0aGUgYFJlcXVlc3RPcHRpb25zYCBpbnN0YW5jZS5cbiAgICpcbiAgICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0LzZ3OFhBOFlUa0RSY1BZcGRCOWRrP3A9cHJldmlldykpXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogaW1wb3J0IHtSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdCwgUmVxdWVzdE1ldGhvZH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gICAqXG4gICAqIHZhciBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICogICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdFxuICAgKiB9KTtcbiAgICogdmFyIHJlcSA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMubWVyZ2Uoe1xuICAgKiAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAgICogfSkpO1xuICAgKiBjb25zb2xlLmxvZygncmVxLm1ldGhvZDonLCBSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2RdKTsgLy8gUG9zdFxuICAgKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBudWxsXG4gICAqIGNvbnNvbGUubG9nKCdyZXEudXJsOicsIHJlcS51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAgICogYGBgXG4gICAqL1xuICBtZXJnZShvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogUmVxdWVzdE9wdGlvbnMge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgbWV0aG9kOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMubWV0aG9kKSA/IG9wdGlvbnMubWV0aG9kIDogdGhpcy5tZXRob2QsXG4gICAgICBoZWFkZXJzOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMuaGVhZGVycykgPyBvcHRpb25zLmhlYWRlcnMgOiB0aGlzLmhlYWRlcnMsXG4gICAgICBib2R5OiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMuYm9keSkgPyBvcHRpb25zLmJvZHkgOiB0aGlzLmJvZHksXG4gICAgICB1cmw6IGlzUHJlc2VudChvcHRpb25zKSAmJiBpc1ByZXNlbnQob3B0aW9ucy51cmwpID8gb3B0aW9ucy51cmwgOiB0aGlzLnVybCxcbiAgICAgIHNlYXJjaDogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLnNlYXJjaCkgP1xuICAgICAgICAgIChpc1N0cmluZyhvcHRpb25zLnNlYXJjaCkgPyBuZXcgVVJMU2VhcmNoUGFyYW1zKDxzdHJpbmc+KG9wdGlvbnMuc2VhcmNoKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPFVSTFNlYXJjaFBhcmFtcz4ob3B0aW9ucy5zZWFyY2gpKS5jbG9uZSgpKSA6XG4gICAgICAgICAgdGhpcy5zZWFyY2hcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8qKlxuICogU3ViY2xhc3Mgb2Yge0BsaW5rIFJlcXVlc3RPcHRpb25zfSwgd2l0aCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBEZWZhdWx0IHZhbHVlczpcbiAqICAqIG1ldGhvZDoge0BsaW5rIFJlcXVlc3RNZXRob2QgUmVxdWVzdE1ldGhvZC5HZXR9XG4gKiAgKiBoZWFkZXJzOiBlbXB0eSB7QGxpbmsgSGVhZGVyc30gb2JqZWN0XG4gKlxuICogVGhpcyBjbGFzcyBjb3VsZCBiZSBleHRlbmRlZCBhbmQgYm91bmQgdG8gdGhlIHtAbGluayBSZXF1ZXN0T3B0aW9uc30gY2xhc3NcbiAqIHdoZW4gY29uZmlndXJpbmcgYW4ge0BsaW5rIEluamVjdG9yfSwgaW4gb3JkZXIgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb3B0aW9uc1xuICogdXNlZCBieSB7QGxpbmsgSHR0cH0gdG8gY3JlYXRlIGFuZCBzZW5kIHtAbGluayBSZXF1ZXN0IFJlcXVlc3RzfS5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvTEVLVlN4P3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbiAqIGltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEh0dHAsIEJhc2VSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICogaW1wb3J0IHtBcHB9IGZyb20gJy4vbXlhcHAnO1xuICpcbiAqIGNsYXNzIE15T3B0aW9ucyBleHRlbmRzIEJhc2VSZXF1ZXN0T3B0aW9ucyB7XG4gKiAgIHNlYXJjaDogc3RyaW5nID0gJ2NvcmVUZWFtPXRydWUnO1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHAsIFtIVFRQX1BST1ZJREVSUywgcHJvdmlkZShSZXF1ZXN0T3B0aW9ucywge3VzZUNsYXNzOiBNeU9wdGlvbnN9KV0pO1xuICogYGBgXG4gKlxuICogVGhlIG9wdGlvbnMgY291bGQgYWxzbyBiZSBleHRlbmRlZCB3aGVuIG1hbnVhbGx5IGNyZWF0aW5nIGEge0BsaW5rIFJlcXVlc3R9XG4gKiBvYmplY3QuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L295Qm9Fdk50RGhPU2ZpOVl4YVZiP3A9cHJldmlldykpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0Jhc2VSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdCwgUmVxdWVzdE1ldGhvZH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKlxuICogdmFyIG9wdGlvbnMgPSBuZXcgQmFzZVJlcXVlc3RPcHRpb25zKCk7XG4gKiB2YXIgcmVxID0gbmV3IFJlcXVlc3Qob3B0aW9ucy5tZXJnZSh7XG4gKiAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0LFxuICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gKiB9KSk7XG4gKiBjb25zb2xlLmxvZygncmVxLm1ldGhvZDonLCBSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2RdKTsgLy8gUG9zdFxuICogY29uc29sZS5sb2coJ29wdGlvbnMudXJsOicsIG9wdGlvbnMudXJsKTsgLy8gbnVsbFxuICogY29uc29sZS5sb2coJ3JlcS51cmw6JywgcmVxLnVybCk7IC8vIGh0dHBzOi8vZ29vZ2xlLmNvbVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlUmVxdWVzdE9wdGlvbnMgZXh0ZW5kcyBSZXF1ZXN0T3B0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkgeyBzdXBlcih7bWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkdldCwgaGVhZGVyczogbmV3IEhlYWRlcnMoKX0pOyB9XG59XG4iXX0=