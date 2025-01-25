/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
