
import { useQuery, useQueryClient } from 'react-query';
import { Http, handleError } from '../axios';
import { useEffect, useState } from 'react';
import { generateUrlFromQuerys } from '../utils';




export const useProduct = () => {
    const queryClient = useQueryClient()

    const [queryParams, setQueryParams] = useState<ProductsQueryParams>({
        page: 1,
        size: 10,
        reverse_sort: false,
    });

    const [productUrl, setProductsUrl] = useState('')
    useEffect(() => {
        const url = generateUrlFromQuerys('', queryParams as Record<string, string | number | boolean>)
        setProductsUrl(url)

        queryClient.invalidateQueries('products')
    }, [queryParams, queryClient]);




    const products = useQuery({
        queryKey: ["products", productUrl],
        queryFn: () => Http.get<IProductsRes>(productUrl),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        initialData: undefined,
        retry: false,
        staleTime: Infinity,
        onError: (error) => {
            handleError(error);
        }
    });



    return {
        products,
        setQueryParams,
        queryParams,
        productUrl,
    }
}

export interface ProductsQueryParams {
    all?: boolean;
    page?: number;
    size?: number;
    reverse_sort?: boolean,
}
interface IProductsRes {
    page: number;
    size: number;
    total: number;
    debug: any;
    previous_page: any;
    next_page: any;
    items: Item[];
}

export interface Item {
    name: string;
    description: any;
    unique_id: string;
    url_slug: string;
    is_available: boolean;
    is_service: boolean;
    previous_url_slugs: any;
    unavailable: boolean;
    unavailable_start: any;
    unavailable_end: any;
    id: string;
    parent_product_id: any;
    parent: any;
    organization_id: string;
    product_image: any[];
    categories: any[];
    date_created: string;
    last_updated: string;
    user_id: string;
    photos: Photo[];
    current_price: CurrentPrice[];
    is_deleted: boolean;
    model_name: string;
    available_quantity: number;
    selling_price: any;
    discounted_price: any;
    buying_price: any;
    extra_infos: any;
}

export interface Photo {
    model_id: string;
    organization_id: string;
    filename: string;
    url: string;
    is_featured: boolean;
    save_as_jpg: boolean;
    is_public: boolean;
    file_rename: boolean;
    position: number;
}

export interface CurrentPrice {
    NGN?: [number, any, any[]];
    [key: string]: [number, any, any[]] | undefined;
}