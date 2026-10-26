import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { Category, HealthStatus, ListProductsParams, NewsletterInput, NewsletterResponse, Product, QuoteRequest, QuoteRequestInput, Storefront } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetStorefrontUrl: () => string;
/**
 * @summary Get storefront overview
 */
export declare const getStorefront: (options?: Parameters<typeof customFetch>[1]) => Promise<Storefront>;
export declare const getGetStorefrontQueryKey: () => readonly ["/api/storefront"];
export declare const getGetStorefrontQueryOptions: <TData = Awaited<ReturnType<typeof getStorefront>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStorefront>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStorefront>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStorefrontQueryResult = NonNullable<Awaited<ReturnType<typeof getStorefront>>>;
export type GetStorefrontQueryError = ErrorType<unknown>;
/**
 * @summary Get storefront overview
 */
export declare function useGetStorefront<TData = Awaited<ReturnType<typeof getStorefront>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStorefront>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListCategoriesUrl: () => string;
/**
 * @summary List product categories
 */
export declare const listCategories: (options?: Parameters<typeof customFetch>[1]) => Promise<Category[]>;
export declare const getListCategoriesQueryKey: () => readonly ["/api/categories"];
export declare const getListCategoriesQueryOptions: <TData = Awaited<ReturnType<typeof listCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof listCategories>>>;
export type ListCategoriesQueryError = ErrorType<unknown>;
/**
 * @summary List product categories
 */
export declare function useListCategories<TData = Awaited<ReturnType<typeof listCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListProductsUrl: (params?: ListProductsParams) => string;
/**
 * @summary Search and filter auto parts
 */
export declare const listProducts: (params?: ListProductsParams, options?: Parameters<typeof customFetch>[1]) => Promise<Product[]>;
export declare const getListProductsQueryKey: (params?: ListProductsParams) => readonly ["/api/products", ...ListProductsParams[]];
export declare const getListProductsQueryOptions: <TData = Awaited<ReturnType<typeof listProducts>>, TError = ErrorType<unknown>>(params?: ListProductsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listProducts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListProductsQueryResult = NonNullable<Awaited<ReturnType<typeof listProducts>>>;
export type ListProductsQueryError = ErrorType<unknown>;
/**
 * @summary Search and filter auto parts
 */
export declare function useListProducts<TData = Awaited<ReturnType<typeof listProducts>>, TError = ErrorType<unknown>>(params?: ListProductsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetProductUrl: (id: number) => string;
/**
 * @summary Get one auto part
 */
export declare const getProduct: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<Product>;
export declare const getGetProductQueryKey: (id: number) => readonly [`/api/products/${number}`];
export declare const getGetProductQueryOptions: <TData = Awaited<ReturnType<typeof getProduct>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProductQueryResult = NonNullable<Awaited<ReturnType<typeof getProduct>>>;
export type GetProductQueryError = ErrorType<void>;
/**
 * @summary Get one auto part
 */
export declare function useGetProduct<TData = Awaited<ReturnType<typeof getProduct>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateQuoteRequestUrl: () => string;
/**
 * @summary Submit a request for a product quote
 */
export declare const createQuoteRequest: (quoteRequestInput: QuoteRequestInput, options?: Parameters<typeof customFetch>[1]) => Promise<QuoteRequest>;
export declare const getCreateQuoteRequestMutationKey: () => readonly ["createQuoteRequest"];
export declare const getCreateQuoteRequestMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createQuoteRequest>>, TError, CreateQuoteRequestMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createQuoteRequest>>, TError, CreateQuoteRequestMutationVariables, TContext>;
export type CreateQuoteRequestMutationResult = NonNullable<Awaited<ReturnType<typeof createQuoteRequest>>>;
export type CreateQuoteRequestMutationBody = BodyType<QuoteRequestInput>;
export type CreateQuoteRequestMutationError = ErrorType<void>;
export type CreateQuoteRequestMutationVariables = {
    data: BodyType<QuoteRequestInput>;
};
/**
* @summary Submit a request for a product quote
*/
export declare const useCreateQuoteRequest: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createQuoteRequest>>, TError, CreateQuoteRequestMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createQuoteRequest>>, TError, CreateQuoteRequestMutationVariables, TContext>;
export declare const getSubscribeToNewsletterUrl: () => string;
/**
 * @summary Subscribe an email address to the newsletter
 */
export declare const subscribeToNewsletter: (newsletterInput: NewsletterInput, options?: Parameters<typeof customFetch>[1]) => Promise<NewsletterResponse>;
export declare const getSubscribeToNewsletterMutationKey: () => readonly ["subscribeToNewsletter"];
export declare const getSubscribeToNewsletterMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof subscribeToNewsletter>>, TError, SubscribeToNewsletterMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof subscribeToNewsletter>>, TError, SubscribeToNewsletterMutationVariables, TContext>;
export type SubscribeToNewsletterMutationResult = NonNullable<Awaited<ReturnType<typeof subscribeToNewsletter>>>;
export type SubscribeToNewsletterMutationBody = BodyType<NewsletterInput>;
export type SubscribeToNewsletterMutationError = ErrorType<unknown>;
export type SubscribeToNewsletterMutationVariables = {
    data: BodyType<NewsletterInput>;
};
/**
* @summary Subscribe an email address to the newsletter
*/
export declare const useSubscribeToNewsletter: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof subscribeToNewsletter>>, TError, SubscribeToNewsletterMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof subscribeToNewsletter>>, TError, SubscribeToNewsletterMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map