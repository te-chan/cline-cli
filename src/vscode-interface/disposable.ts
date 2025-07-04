/**
 * Represents a type which can release resources, such
 * as event listening or a timer.
 */
export class Disposable {

    /**
     * Combine many disposable-likes into one. You can use this method when having objects with
     * a dispose function which aren't instances of `Disposable`.
     *
     * @param disposableLikes Objects that have at least a `dispose`-function member. Note that asynchronous
     * dispose-functions aren't awaited.
     * @returns Returns a new disposable which, upon dispose, will
     * dispose all provided disposables.
     */
    static from(...disposableLikes: {
        /**
         * Function to clean up resources.
         */
        dispose: () => any;
    }[]): Disposable {
        return new Disposable(() => {
            for (const disposableLike of disposableLikes) {
                disposableLike.dispose();
            }
        });
    }

    /**
     * Creates a new disposable that calls the provided function
     * on dispose.
     *
     * *Note* that an asynchronous function is not awaited.
     *
     * @param callOnDispose Function that disposes something.
     */
    constructor(private _callOnDispose: () => any) {
    }

    /**
     * Dispose this object.
     */
    dispose(): any {
        this._callOnDispose();
    }
}
