define(['./_arrayEachRight', './_baseEachRight', './_baseIteratee', './isArray'], function(arrayEachRight, baseEachRight, baseIteratee, isArray) {

  /**
   * This method is like `_.forEach` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @alias eachRight
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEach
   * @example
   *
   * _.forEachRight([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `2` then `1`.
   */
  function forEachRight(collection, iteratee) {
    return (typeof iteratee == 'function' && isArray(collection))
      ? arrayEachRight(collection, iteratee)
      : baseEachRight(collection, baseIteratee(iteratee));
  }

  return forEachRight;
});