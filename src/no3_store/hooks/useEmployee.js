import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";// 연동을 위해 Client

import {
    employeeAllGetapi,
    employeePostApi,
    employeePutApi,
    employeeDeleteApi
} from "../apis/employee.api"

import { retry } from "@reduxjs/toolkit/query";
import { ImTab } from "react-icons/im";

export const useAllGetEmployee = () => {
    return useQuery({
        queryKey : ["employees"], 
        queryFn : employeeAllGetapi
    })
}

export const usePostRegisterEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : employeePostApi,
        onSuccess : (dataObj) =>{
            queryClient.setQueryData(
                ["employees"],
                (oldData=[]) =>[
                    ...oldData, dataObj
                ]
            ); //데이터 변경
        }
    })
}

export const usePutUpdateEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : employeePutApi,
        onSuccess : (dataObj) =>{
            queryClient.setQueryData(
                ["employees"],
                (oldData=[]) =>[
                    oldData.map(
                        item => item.id === dataObj.id ?
                        dataObj : item
                    )
                ]
            );
            queryClient = setQueryData(
                ["employees", dataObj.id],
                employeePutApi
            );
        }
    })
}

export const useDeleteEmployee = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : employeeDeleteApi,
        onSuccess : (id) =>{
            queryClient.setQueryData(
                ["employees"],
                (oldData=[]) =>[
                    oldData.filter(
                        item => item.id !== id
                    )
                ]
            );
            queryClient = setQueryData(
                ["employees", id],
            );
        }
    })
}

