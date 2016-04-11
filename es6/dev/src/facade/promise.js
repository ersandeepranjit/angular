export class PromiseCompleter {
    constructor() {
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
    }
}
export class PromiseWrapper {
    static resolve(obj) { return Promise.resolve(obj); }
    static reject(obj, _) { return Promise.reject(obj); }
    // Note: We can't rename this method into `catch`, as this is not a valid
    // method name in Dart.
    static catchError(promise, onError) {
        return promise.catch(onError);
    }
    static all(promises) {
        if (promises.length == 0)
            return Promise.resolve([]);
        return Promise.all(promises);
    }
    static then(promise, success, rejection) {
        return promise.then(success, rejection);
    }
    static wrap(computation) {
        return new Promise((res, rej) => {
            try {
                res(computation());
            }
            catch (e) {
                rej(e);
            }
        });
    }
    static scheduleMicrotask(computation) {
        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, (_) => { });
    }
    static isPromise(obj) { return obj instanceof Promise; }
    static completer() { return new PromiseCompleter(); }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdzNEUmxYSmkudG1wL2FuZ3VsYXIyL3NyYy9mYWNhZGUvcHJvbWlzZS50cyJdLCJuYW1lcyI6WyJQcm9taXNlQ29tcGxldGVyIiwiUHJvbWlzZUNvbXBsZXRlci5jb25zdHJ1Y3RvciIsIlByb21pc2VXcmFwcGVyIiwiUHJvbWlzZVdyYXBwZXIucmVzb2x2ZSIsIlByb21pc2VXcmFwcGVyLnJlamVjdCIsIlByb21pc2VXcmFwcGVyLmNhdGNoRXJyb3IiLCJQcm9taXNlV3JhcHBlci5hbGwiLCJQcm9taXNlV3JhcHBlci50aGVuIiwiUHJvbWlzZVdyYXBwZXIud3JhcCIsIlByb21pc2VXcmFwcGVyLnNjaGVkdWxlTWljcm90YXNrIiwiUHJvbWlzZVdyYXBwZXIuaXNQcm9taXNlIiwiUHJvbWlzZVdyYXBwZXIuY29tcGxldGVyIl0sIm1hcHBpbmdzIjoiQUFDQTtJQUtFQTtRQUNFQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxPQUFPQSxDQUFDQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQTtZQUNsQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsR0FBR0EsQ0FBQ0E7WUFDbkJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO1FBQ3BCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtBQUNIRCxDQUFDQTtBQUVEO0lBQ0VFLE9BQU9BLE9BQU9BLENBQUlBLEdBQU1BLElBQWdCQyxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUV0RUQsT0FBT0EsTUFBTUEsQ0FBQ0EsR0FBUUEsRUFBRUEsQ0FBQ0EsSUFBa0JFLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRXhFRix5RUFBeUVBO0lBQ3pFQSx1QkFBdUJBO0lBQ3ZCQSxPQUFPQSxVQUFVQSxDQUFJQSxPQUFtQkEsRUFBRUEsT0FBMkNBO1FBRW5GRyxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFREgsT0FBT0EsR0FBR0EsQ0FBSUEsUUFBMEJBO1FBQ3RDSSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNyREEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBRURKLE9BQU9BLElBQUlBLENBQ1BBLE9BQW1CQSxFQUFFQSxPQUF5Q0EsRUFDOURBLFNBQTJEQTtRQUM3REssTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFDMUNBLENBQUNBO0lBRURMLE9BQU9BLElBQUlBLENBQUlBLFdBQW9CQTtRQUNqQ00sTUFBTUEsQ0FBQ0EsSUFBSUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0E7WUFDMUJBLElBQUlBLENBQUNBO2dCQUNIQSxHQUFHQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNyQkEsQ0FBRUE7WUFBQUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1hBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ1RBLENBQUNBO1FBQ0hBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBRUROLE9BQU9BLGlCQUFpQkEsQ0FBQ0EsV0FBc0JBO1FBQzdDTyxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM1RUEsQ0FBQ0E7SUFFRFAsT0FBT0EsU0FBU0EsQ0FBQ0EsR0FBUUEsSUFBYVEsTUFBTUEsQ0FBQ0EsR0FBR0EsWUFBWUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFdEVSLE9BQU9BLFNBQVNBLEtBQTZCUyxNQUFNQSxDQUFDQSxJQUFJQSxnQkFBZ0JBLEVBQUtBLENBQUNBLENBQUNBLENBQUNBO0FBQ2xGVCxDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgUHJvbWlzZUNvbXBsZXRlcjxSPiB7XG4gIHByb21pc2U6IFByb21pc2U8Uj47XG4gIHJlc29sdmU6ICh2YWx1ZT86IFJ8UHJvbWlzZUxpa2U8Uj4pID0+IHZvaWQ7XG4gIHJlamVjdDogKGVycm9yPzogYW55LCBzdGFja1RyYWNlPzogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlID0gcmVzO1xuICAgICAgdGhpcy5yZWplY3QgPSByZWo7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb21pc2VXcmFwcGVyIHtcbiAgc3RhdGljIHJlc29sdmU8VD4ob2JqOiBUKTogUHJvbWlzZTxUPiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUob2JqKTsgfVxuXG4gIHN0YXRpYyByZWplY3Qob2JqOiBhbnksIF8pOiBQcm9taXNlPGFueT4geyByZXR1cm4gUHJvbWlzZS5yZWplY3Qob2JqKTsgfVxuXG4gIC8vIE5vdGU6IFdlIGNhbid0IHJlbmFtZSB0aGlzIG1ldGhvZCBpbnRvIGBjYXRjaGAsIGFzIHRoaXMgaXMgbm90IGEgdmFsaWRcbiAgLy8gbWV0aG9kIG5hbWUgaW4gRGFydC5cbiAgc3RhdGljIGNhdGNoRXJyb3I8VD4ocHJvbWlzZTogUHJvbWlzZTxUPiwgb25FcnJvcjogKGVycm9yOiBhbnkpID0+IFQgfCBQcm9taXNlTGlrZTxUPik6XG4gICAgICBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gcHJvbWlzZS5jYXRjaChvbkVycm9yKTtcbiAgfVxuXG4gIHN0YXRpYyBhbGw8VD4ocHJvbWlzZXM6IChUfFByb21pc2U8VD4pW10pOiBQcm9taXNlPFRbXT4ge1xuICAgIGlmIChwcm9taXNlcy5sZW5ndGggPT0gMCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgfVxuXG4gIHN0YXRpYyB0aGVuPFQsIFU+KFxuICAgICAgcHJvbWlzZTogUHJvbWlzZTxUPiwgc3VjY2VzczogKHZhbHVlOiBUKSA9PiBVIHwgUHJvbWlzZUxpa2U8VT4sXG4gICAgICByZWplY3Rpb24/OiAoZXJyb3I6IGFueSwgc3RhY2s/OiBhbnkpID0+IFUgfCBQcm9taXNlTGlrZTxVPik6IFByb21pc2U8VT4ge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oc3VjY2VzcywgcmVqZWN0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyB3cmFwPFQ+KGNvbXB1dGF0aW9uOiAoKSA9PiBUKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzKGNvbXB1dGF0aW9uKCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWooZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2NoZWR1bGVNaWNyb3Rhc2soY29tcHV0YXRpb246ICgpID0+IGFueSk6IHZvaWQge1xuICAgIFByb21pc2VXcmFwcGVyLnRoZW4oUHJvbWlzZVdyYXBwZXIucmVzb2x2ZShudWxsKSwgY29tcHV0YXRpb24sIChfKSA9PiB7fSk7XG4gIH1cblxuICBzdGF0aWMgaXNQcm9taXNlKG9iajogYW55KTogYm9vbGVhbiB7IHJldHVybiBvYmogaW5zdGFuY2VvZiBQcm9taXNlOyB9XG5cbiAgc3RhdGljIGNvbXBsZXRlcjxUPigpOiBQcm9taXNlQ29tcGxldGVyPFQ+IHsgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGxldGVyPFQ+KCk7IH1cbn1cbiJdfQ==