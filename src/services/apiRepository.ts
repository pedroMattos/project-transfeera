import axios, { type AxiosInstance, type AxiosResponse, AxiosError } from 'axios';
import type { Operations, RequestData, ResponseData } from "@/types/operations";
import { useSnackbar } from '../stores/snackbar/snackbar.store'

export class ApiRepository implements Operations<ResponseData> {
  private _axiosInstance: AxiosInstance
  private _storeSnackInstance

  constructor(baseURL: string) {
    this._axiosInstance = axios.create({
      baseURL,
    });
    this._storeSnackInstance = useSnackbar()
  }

  private handleResponse<ResponseData>(response: AxiosResponse<ResponseData>): ResponseData {
    return response.data;
  }

  private handleError(error: AxiosError): never {
    throw error;
  }

  async getAll(page: number = 1): Promise<ResponseData[]> {
    try {
      const perPage = 5
      const response = await this._axiosInstance.get<ResponseData[]>(`/receivers?_page=${page}&_limit=${perPage}`);
      const totalPages = Math.ceil(response.headers['x-total-count'] / perPage)
      localStorage.setItem('totalPages', totalPages.toString())
      return this.handleResponse(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }

  async search(term: string): Promise<ResponseData[]> {
    try {
      const response = await this._axiosInstance.get<ResponseData[]>(`/receivers?q=${term}`);
      return this.handleResponse(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }

  async getOne(id: string): Promise<ResponseData> {
    try {
      const response = await this._axiosInstance.get<ResponseData>(`/receivers/${id}`);
      return this.handleResponse(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }

  async create(data: RequestData): Promise<ResponseData> {
    try {
      const response = await this._axiosInstance.post<ResponseData>('/receivers', data);
      this._storeSnackInstance.setSnackdata({
        text: 'Favorecido criado com sucesso!',
        variant: 'success',
        timestamp: 2000,
        open: true
      })
      return this.handleResponse(response);
    } catch (error) {
      this._storeSnackInstance.setSnackdata({
        text: 'Ocorreu um erro ao criar o favorecido.',
        variant: 'error',
        timestamp: 2000,
        open: true
      })
      this._storeSnackInstance.toggleOpen()
      if (axios.isAxiosError(error)) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }

  async update(id: string, data: RequestData): Promise<ResponseData> {
    try {
      const response = await this._axiosInstance.patch<ResponseData>(`/receivers/${id}`, data);
      this._storeSnackInstance.setSnackdata({
        text: 'Favorecido alterado com sucesso',
        variant: 'success',
        timestamp: 2000,
        open: true
      })
      return this.handleResponse(response);
    } catch (error) {
      this._storeSnackInstance.setSnackdata({
        text: 'Houve um erro ao alterar um favorecido',
        variant: 'error',
        timestamp: 2000,
        open: true
      })
      if (axios.isAxiosError(error)) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this._axiosInstance.delete(`/receivers/${id}`);
      this._storeSnackInstance.setSnackdata({
        text: 'Favorecido apagado com sucesso',
        variant: 'success',
        timestamp: 2000,
        open: true
      })
    } catch (error) {
      this._storeSnackInstance.setSnackdata({
        text: 'Houve um erro ao apagar o favorecido',
        variant: 'error',
        timestamp: 2000,
        open: true
      })
      if (axios.isAxiosError(error)) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }
}