import * as _zodios_core_lib_zodios_types from '@zodios/core/lib/zodios.types';
import { ZodiosAliases, ZodiosErrorByPath, Aliases, MutationMethod, ZodiosErrorByAlias } from '@zodios/core/lib/zodios.types';
import * as zod from 'zod';
import * as _zodios_core_lib_utils_types from '@zodios/core/lib/utils.types';
import { RequiredKeys, ReadonlyDeep, PathParamNames, IfEquals } from '@zodios/core/lib/utils.types';
import { QueryKey, UseQueryResult, UseInfiniteQueryResult, UseMutationResult, UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions } from 'react-query';
import { ZodiosEndpointDefinitions, ZodiosInstance, Method, ZodiosPathsByMethod, ZodiosRequestOptionsByPath, ZodiosRequestOptionsByAlias, ZodiosResponseByPath, ZodiosBodyByPath, ZodiosQueryParamsByPath, ZodiosError, ZodiosEndpointDefinition, ZodiosEndpointDefinitionByAlias, ZodiosResponseByAlias, ZodiosBodyByAlias } from '@zodios/core';
import { AxiosError } from 'axios';

type UndefinedIfNever<T> = IfEquals<T, never, undefined, T>;
type UnknownIfNever<T> = IfEquals<T, never, unknown, T>;
type Errors<T> = Error | ZodiosError | AxiosError<T>;
type MutationOptions<Api extends ZodiosEndpointDefinition[], M extends Method, Path extends ZodiosPathsByMethod<Api, M>> = Omit<UseMutationOptions<Awaited<ZodiosResponseByPath<Api, M, Path>>, Errors<UnknownIfNever<ZodiosErrorByPath<Api, M, Path, number>>>, UndefinedIfNever<ZodiosBodyByPath<Api, M, Path>>>, "mutationFn">;
type MutationOptionsByAlias<Api extends ZodiosEndpointDefinition[], Alias extends string> = Omit<UseMutationOptions<Awaited<ZodiosResponseByAlias<Api, Alias>>, Errors<UnknownIfNever<ZodiosErrorByAlias<Api, Alias, number>>>, UndefinedIfNever<ZodiosBodyByAlias<Api, Alias>>>, "mutationFn">;
type QueryOptions<TQueryFnData, TData> = Omit<UseQueryOptions<TQueryFnData, Errors<unknown>, TData>, "queryKey" | "queryFn">;
type ImmutableQueryOptions<TQueryFnData, TData> = Omit<UseQueryOptions<TQueryFnData, Errors<unknown>, TData>, "queryKey" | "queryFn">;
type InfiniteQueryOptions<TQueryFnData, TData> = Omit<UseInfiniteQueryOptions<TQueryFnData, Errors<unknown>, TData>, "queryKey" | "queryFn">;
type ImmutableInfiniteQueryOptions<TQueryFnData, TData> = Omit<UseInfiniteQueryOptions<TQueryFnData, Errors<unknown>, TData>, "queryKey" | "queryFn">;
declare class ZodiosHooksClass<Api extends ZodiosEndpointDefinitions> {
    protected readonly apiName: string;
    protected readonly zodios: ZodiosInstance<Api>;
    protected readonly options: {
        shouldAbortOnUnmount?: boolean;
    };
    constructor(apiName: string, zodios: ZodiosInstance<Api>, options?: {
        shouldAbortOnUnmount?: boolean;
    });
    private injectAliasEndpoints;
    private getEndpointByPath;
    private getEndpointByAlias;
    /**
     * compute the key for the provided endpoint
     * @param method - HTTP method of the endpoint
     * @param path - path for the endpoint
     * @param config - parameters of the api to the endpoint - when providing no parameters, will return the common key for the endpoint
     * @returns - Key
     */
    getKeyByPath<M extends Method, Path extends ZodiosPathsByMethod<Api, Method>>(method: M, path: Path extends ZodiosPathsByMethod<Api, M> ? Path : never, config?: ZodiosRequestOptionsByPath<Api, M, Path>): QueryKey;
    /**
     * compute the key for the provided endpoint alias
     * @param alias - alias of the endpoint
     * @param config - parameters of the api to the endpoint
     * @returns - QueryKey
     */
    getKeyByAlias<Alias extends keyof ZodiosAliases<Api>>(alias: Alias extends string ? Alias : never, config?: Alias extends string ? ZodiosRequestOptionsByAlias<Api, Alias> : never): QueryKey;
    useQuery<Path extends ZodiosPathsByMethod<Api, "get">, TConfig extends ZodiosRequestOptionsByPath<Api, "get", Path>, TQueryFnData = ZodiosResponseByPath<Api, "get", Path>, TData = ZodiosResponseByPath<Api, "get", Path>>(path: Path, ...[config, queryOptions]: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        queryOptions?: QueryOptions<TQueryFnData, TData>
    ] : [
        config: ReadonlyDeep<TConfig>,
        queryOptions?: QueryOptions<TQueryFnData, TData>
    ]): UseQueryResult<TData, Errors<UnknownIfNever<ZodiosErrorByPath<Api, "get", Path, number>>>> & {
        invalidate: () => Promise<void>;
        key: QueryKey;
    };
    useImmutableQuery<Path extends ZodiosPathsByMethod<Api, "post">, TConfig extends ZodiosRequestOptionsByPath<Api, "post", Path>, TQueryFnData = ZodiosResponseByPath<Api, "post", Path>, TData = ZodiosResponseByPath<Api, "post", Path>>(path: Path, body: ReadonlyDeep<UndefinedIfNever<ZodiosBodyByPath<Api, "post", Path>>>, ...[config, queryOptions]: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        queryOptions?: ImmutableQueryOptions<TQueryFnData, TData>
    ] : [
        config: ReadonlyDeep<TConfig>,
        queryOptions?: ImmutableQueryOptions<TQueryFnData, TData>
    ]): UseQueryResult<TData, Errors<UnknownIfNever<ZodiosErrorByPath<Api, "post", Path, number>>>> & {
        invalidate: () => Promise<void>;
        key: QueryKey;
    };
    useInfiniteQuery<Path extends ZodiosPathsByMethod<Api, "get">, TConfig extends ZodiosRequestOptionsByPath<Api, "get", Path>, TQueryFnData = ZodiosResponseByPath<Api, "get", Path>, TData = ZodiosResponseByPath<Api, "get", Path>>(path: Path, ...[config, queryOptions]: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        queryOptions?: InfiniteQueryOptions<TQueryFnData, TData> & {
            getPageParamList: () => ((ZodiosQueryParamsByPath<Api, "get", Path> extends never ? never : keyof ZodiosQueryParamsByPath<Api, "get", Path>) | PathParamNames<Path>)[];
        }
    ] : [
        config: ReadonlyDeep<TConfig>,
        queryOptions?: InfiniteQueryOptions<TQueryFnData, TData> & {
            getPageParamList: () => ((ZodiosQueryParamsByPath<Api, "get", Path> extends never ? never : keyof ZodiosQueryParamsByPath<Api, "get", Path>) | PathParamNames<Path>)[];
        }
    ]): UseInfiniteQueryResult<TData, Errors<UnknownIfNever<ZodiosErrorByPath<Api, "get", Path, number>>>> & {
        invalidate: () => Promise<void>;
        key: QueryKey;
    };
    useImmutableInfiniteQuery<Path extends ZodiosPathsByMethod<Api, "post">, TConfig extends ZodiosRequestOptionsByPath<Api, "post", Path>, TQueryFnData = ZodiosResponseByPath<Api, "post", Path>, TData = ZodiosResponseByPath<Api, "post", Path>>(path: Path, body: ReadonlyDeep<UndefinedIfNever<ZodiosBodyByPath<Api, "post", Path>>>, ...[config, queryOptions]: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        queryOptions?: ImmutableInfiniteQueryOptions<TQueryFnData, TData> & {
            getPageParamList: () => (keyof ZodiosBodyByPath<Api, "post", Path> | PathParamNames<Path> | (ZodiosQueryParamsByPath<Api, "post", Path> extends never ? never : keyof ZodiosQueryParamsByPath<Api, "post", Path>))[];
        }
    ] : [
        config: ReadonlyDeep<TConfig>,
        queryOptions?: ImmutableInfiniteQueryOptions<TQueryFnData, TData> & {
            getPageParamList: () => (keyof ZodiosBodyByPath<Api, "post", Path> | PathParamNames<Path> | (ZodiosQueryParamsByPath<Api, "post", Path> extends never ? never : keyof ZodiosQueryParamsByPath<Api, "post", Path>))[];
        }
    ]): UseInfiniteQueryResult<TData, Errors<UnknownIfNever<ZodiosErrorByPath<Api, "post", Path, number>>>> & {
        invalidate: () => Promise<void>;
        key: QueryKey;
    };
    useMutation<M extends Method, Path extends ZodiosPathsByMethod<Api, M>, TConfig extends ZodiosRequestOptionsByPath<Api, M, Path>>(method: M, path: Path, ...[config, mutationOptions]: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, M, Path>
    ] : [
        config: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, M, Path>
    ]): UseMutationResult<zod.output<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: M;
        path: Path;
    }, []>[number]["response"]>, Error | ZodiosError | AxiosError<IfEquals<zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: M;
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: M;
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: M;
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>, never, unknown, zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: M;
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: M;
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: M;
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>>, any>, IfEquals<zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, M, Path>>, never, undefined, zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, M, Path>>>, unknown>;
    useGet<Path extends ZodiosPathsByMethod<Api, "get">, TConfig extends ZodiosRequestOptionsByPath<Api, "get", Path>, TQueryFnData = ZodiosResponseByPath<Api, "get", Path>, TData = ZodiosResponseByPath<Api, "get", Path>>(path: Path, ...rest: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        queryOptions?: QueryOptions<TQueryFnData, TData>
    ] : [
        config: ReadonlyDeep<TConfig>,
        queryOptions?: QueryOptions<TQueryFnData, TData>
    ]): UseQueryResult<TData, Errors<UnknownIfNever<ZodiosErrorByPath<Api, "get", Path, number>>>> & {
        invalidate: () => Promise<void>;
        key: QueryKey;
    };
    usePost<Path extends ZodiosPathsByMethod<Api, "post">, TConfig extends ZodiosRequestOptionsByPath<Api, "post", Path>>(path: Path, ...rest: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, "post", Path>
    ] : [
        config: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, "post", Path>
    ]): UseMutationResult<zod.output<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "post";
        path: Path;
    }, []>[number]["response"]>, Error | ZodiosError | AxiosError<IfEquals<zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "post";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "post";
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "post";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>, never, unknown, zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "post";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "post";
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "post";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>>, any>, IfEquals<zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, "post", Path>>, never, undefined, zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, "post", Path>>>, unknown>;
    usePut<Path extends ZodiosPathsByMethod<Api, "put">, TConfig extends ZodiosRequestOptionsByPath<Api, "put", Path>>(path: Path, ...rest: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, "put", Path>
    ] : [
        config: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, "put", Path>
    ]): UseMutationResult<zod.output<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "put";
        path: Path;
    }, []>[number]["response"]>, Error | ZodiosError | AxiosError<IfEquals<zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "put";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "put";
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "put";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>, never, unknown, zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "put";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "put";
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "put";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>>, any>, IfEquals<zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, "put", Path>>, never, undefined, zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, "put", Path>>>, unknown>;
    usePatch<Path extends ZodiosPathsByMethod<Api, "patch">, TConfig extends ZodiosRequestOptionsByPath<Api, "patch", Path>>(path: Path, ...rest: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, "patch", Path>
    ] : [
        config: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, "patch", Path>
    ]): UseMutationResult<zod.output<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "patch";
        path: Path;
    }, []>[number]["response"]>, Error | ZodiosError | AxiosError<IfEquals<zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "patch";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "patch";
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "patch";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>, never, unknown, zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "patch";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "patch";
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "patch";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>>, any>, IfEquals<zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, "patch", Path>>, never, undefined, zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, "patch", Path>>>, unknown>;
    useDelete<Path extends ZodiosPathsByMethod<Api, "delete">, TConfig extends ZodiosRequestOptionsByPath<Api, "delete", Path>>(path: Path, ...rest: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, "delete", Path>
    ] : [
        config: ReadonlyDeep<TConfig>,
        mutationOptions?: MutationOptions<Api, "delete", Path>
    ]): UseMutationResult<zod.output<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "delete";
        path: Path;
    }, []>[number]["response"]>, Error | ZodiosError | AxiosError<IfEquals<zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "delete";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "delete";
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "delete";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>, never, unknown, zod.output<IfEquals<_zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "delete";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"], never, _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "delete";
        path: Path;
    }, []>[number]["errors"], {
        status: "default";
    }, []>[number]["schema"], _zodios_core_lib_utils_types.FilterArrayByValue<_zodios_core_lib_utils_types.FilterArrayByValue<Api, {
        method: "delete";
        path: Path;
    }, []>[number]["errors"], {
        status: number;
    }, []>[number]["schema"]>>>, any>, IfEquals<zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, "delete", Path>>, never, undefined, zod.input<_zodios_core_lib_zodios_types.BodySchema<Api, "delete", Path>>>, unknown>;
}
type ZodiosMutationAliasHook<Body, Config, MutationOptions, Errors, Response> = RequiredKeys<Config> extends never ? (configOptions?: ReadonlyDeep<Config>, mutationOptions?: MutationOptions) => UseMutationResult<Response, Errors, UndefinedIfNever<Body>, unknown> : (configOptions: ReadonlyDeep<Config>, mutationOptions?: MutationOptions) => UseMutationResult<Response, Errors, UndefinedIfNever<Body>, unknown>;
type ZodiosHooksAliases<Api extends ZodiosEndpointDefinition[]> = {
    [Alias in Aliases<Api> as `use${Capitalize<Alias>}`]: ZodiosEndpointDefinitionByAlias<Api, Alias>[number]["method"] extends infer AliasMethod ? AliasMethod extends MutationMethod ? {
        immutable: ZodiosEndpointDefinitionByAlias<Api, Alias>[number]["immutable"];
        method: AliasMethod;
    } extends {
        immutable: true;
        method: "post";
    } ? <TConfig extends ZodiosRequestOptionsByAlias<Api, Alias>, TQueryFnData = ZodiosResponseByAlias<Api, Alias>, TData = ZodiosResponseByAlias<Api, Alias>>(body: ReadonlyDeep<UndefinedIfNever<ZodiosBodyByAlias<Api, Alias>>>, ...[config, queryOptions]: RequiredKeys<TConfig> extends never ? [
        config?: ReadonlyDeep<TConfig>,
        queryOptions?: ImmutableQueryOptions<TQueryFnData, TData>
    ] : [
        config: ReadonlyDeep<TConfig>,
        queryOptions?: ImmutableQueryOptions<TQueryFnData, TData>
    ]) => UseQueryResult<TData, Errors<UnknownIfNever<ZodiosErrorByAlias<Api, Alias, number>>>> & {
        invalidate: () => Promise<void>;
        key: QueryKey;
    } : ZodiosMutationAliasHook<ZodiosBodyByAlias<Api, Alias>, ZodiosRequestOptionsByAlias<Api, Alias>, MutationOptionsByAlias<Api, Alias>, Errors<UnknownIfNever<ZodiosErrorByAlias<Api, Alias, number>>>, ZodiosResponseByAlias<Api, Alias>> : <Config extends ZodiosRequestOptionsByAlias<Api, Alias>, TQueryFnData = ZodiosResponseByAlias<Api, Alias>, TData = ZodiosResponseByAlias<Api, Alias>>(...rest: RequiredKeys<Config> extends never ? [
        configOptions?: ReadonlyDeep<Config>,
        queryOptions?: QueryOptions<TQueryFnData, TData>
    ] : [
        configOptions: ReadonlyDeep<Config>,
        queryOptions?: QueryOptions<TQueryFnData, TData>
    ]) => UseQueryResult<TData, Errors<UnknownIfNever<ZodiosErrorByAlias<Api, Alias, number>>>> & {
        invalidate: () => Promise<void>;
        key: QueryKey;
    } : never;
};
type ZodiosHooksInstance<Api extends ZodiosEndpointDefinitions> = ZodiosHooksClass<Api> & ZodiosHooksAliases<Api>;
type ZodiosHooksConstructor = {
    new <Api extends ZodiosEndpointDefinitions>(name: string, zodios: ZodiosInstance<Api>, options?: {
        shouldAbortOnUnmount?: boolean;
    }): ZodiosHooksInstance<Api>;
};
declare const ZodiosHooks: ZodiosHooksConstructor;

export { ZodiosHooks, ZodiosHooksClass, ZodiosHooksConstructor, ZodiosHooksInstance };
