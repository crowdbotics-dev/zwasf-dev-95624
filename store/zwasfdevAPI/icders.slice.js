import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_icder_list = createAsyncThunk(
  "icders/api_v1_icder_list",
  async payload => {
    const response = await apiService.api_v1_icder_list(payload)
    return response.data
  }
)
export const api_v1_icder_create = createAsyncThunk(
  "icders/api_v1_icder_create",
  async payload => {
    const response = await apiService.api_v1_icder_create(payload)
    return response.data
  }
)
export const api_v1_icder_retrieve = createAsyncThunk(
  "icders/api_v1_icder_retrieve",
  async payload => {
    const response = await apiService.api_v1_icder_retrieve(payload)
    return response.data
  }
)
export const api_v1_icder_update = createAsyncThunk(
  "icders/api_v1_icder_update",
  async payload => {
    const response = await apiService.api_v1_icder_update(payload)
    return response.data
  }
)
export const api_v1_icder_partial_update = createAsyncThunk(
  "icders/api_v1_icder_partial_update",
  async payload => {
    const response = await apiService.api_v1_icder_partial_update(payload)
    return response.data
  }
)
export const api_v1_icder_destroy = createAsyncThunk(
  "icders/api_v1_icder_destroy",
  async payload => {
    const response = await apiService.api_v1_icder_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const icdersSlice = createSlice({
  name: "icders",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_icder_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_icder_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_icder_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_icder_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_icder_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_icder_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_icder_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_icder_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_icder_list,
  api_v1_icder_create,
  api_v1_icder_retrieve,
  api_v1_icder_update,
  api_v1_icder_partial_update,
  api_v1_icder_destroy,
  slice: icdersSlice
}
