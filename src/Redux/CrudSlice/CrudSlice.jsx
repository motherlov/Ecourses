import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from "../Helper/Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  Courses: [], //courses
  Services: [], //services
  TeamMember: [], // teammember
  testimonials: [], //testimonials
  bannerdata: [], // banner
  recentPosts: [], //getRecentPosts
  blogDetails: [], // blogDetails/id
  searchResults: [], //search
  categoryData: [], // category
  data: null, // letest-post
  post: [], // comment
  redirect: null,
};

export const blogSearch = createAsyncThunk("/search", async (searchItem) => {
  const res = await AxiosInstance.get(`/search/${searchItem}`);
  const resData = res?.data;
  return resData;
});

export const CommentCreate = createAsyncThunk(
  "comment/create",
  async ({ postData, id }) => {
    let res = await AxiosInstance.post(`/blog/${id}/comment/create`, postData);
    console.log("id", id);
    let resData = res?.data;
    return resData;
  }
);

export const Comment = createAsyncThunk("comment/", async (id) => {
  let res = await AxiosInstance.get(`/comment/${id}`);
  let resData = res?.data.post.comment.comments;
  return resData;
});

export const course = createAsyncThunk("/course", async () => {
  let res = await AxiosInstance.get(`/course/`);
  let resData = res?.data;
  return resData;
});

export const AllBlog = createAsyncThunk("/allBlog", async () => {
  let res = await AxiosInstance.get(`/allBlog/`);
  let resData = res?.data;
  return resData;
});
export const getBlogDetail = createAsyncThunk(
  "/blogDetails/:id",
  async (id) => {
    const response = await AxiosInstance.get(`/blogDetails/${id}`, id);
    return response?.data.data;
  }
);

export const getRecentPosts = createAsyncThunk("/letest-post", async () => {
  const res = await AxiosInstance.get(`/letest-post`);
  const resData = res?.data;
  return resData;
});

export const service = createAsyncThunk("/service", async () => {
  let res = await AxiosInstance.get(`/service/`);
  let resData = res?.data;
  return resData;
});
export const Team = createAsyncThunk("/team", async () => {
  let res = await AxiosInstance.get(`/team/`);
  let resData = res?.data;
  return resData;
});

export const Testimonial = createAsyncThunk("/testimonial", async () => {
  let res = await AxiosInstance.get(`/testimonial/`);
  let resData = res?.data;
  return resData;
});

export const Banner = createAsyncThunk("/banner", async () => {
  let res = await AxiosInstance.get(`/banner/`);
  let resData = res?.data.bannerdata;
  return resData;
});
export const contact = createAsyncThunk("/contact/create", async (formData) => {
  let res = await AxiosInstance.post(`/contact/create`, formData);
  let resData = res?.data;
  return resData;
});

export const Category = createAsyncThunk("/showallcategory", async () => {
  let res = await AxiosInstance.get(`/showallcategory/`);
  let resData = res?.data;
  return resData;
});

export const CourseApply = createAsyncThunk(
  `course/apply`,
  async ({ postData, id }) => {
    const res = await AxiosInstance.post(`/course/apply/${id}`, postData);
    let resData = res?.data;
    return resData;
  }
);

export const CrudSlice = createSlice({
  name: "CRUD",
  initialState,
  reducers: {
    reset_redirectToUpdate: (state, { payload }) => {
      state.redirect = payload;
    },
  },

  extraReducers: (builder) => {
    builder

      ////////////////////////////////
      //search
      .addCase(blogSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(blogSearch.fulfilled, (state, { payload }, action) => {
        state.status = "succeeded";
        state.data = payload;
      })
      .addCase(blogSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      /////////////////////////////////////////////////////////////////////////////////////////////////
      .addCase(Comment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(Comment.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.post = payload;
        // console.log("payload",payload)
      })
      .addCase(Comment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      //////////////////////////////////////Comentcreate///////////////////////////////////////////////
      .addCase(CommentCreate.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(CommentCreate.fulfilled, (state, { payload }) => {
        state.status = "success";
        // state.CommentCreates = payload.data;
        toast(payload?.message);
      })
      .addCase(CommentCreate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      //////////////////////////////////////////////////////////////////////////////
      .addCase(course.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(course.fulfilled, (state, { payload }) => {
        state.status = "true";
        state.Courses = payload.Courses;
        toast(payload?.message);
      })
      .addCase(course.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      ////////////////////////////////////////////////////////////////////////////////////

      .addCase(AllBlog.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(AllBlog.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.data = payload.data;
        toast(payload?.message);
      })
      .addCase(AllBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      /////////////////////////////////////////////////////////////////
      //* BlogDetail
      .addCase(getBlogDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBlogDetail.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.blogDetails = payload; //  suppose blogDetails take here ,not api data name
        toast.success(payload?.message);
      })
      .addCase(getBlogDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.payload.message);
      })
      //////////////////////////////////////////////////////////////////////
      .addCase(getRecentPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecentPosts.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.recentPosts = payload.data;
      })
      .addCase(getRecentPosts.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      })

      /////////////////////////////////////////////////////////////////////////////////////
      .addCase(service.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(service.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.Services = payload.data;
        // console.log("payload",payload)
      })
      .addCase(service.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      ///////////////////////////////////////////////////////
      .addCase(Team.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(Team.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.TeamMember = payload.TeamMember;
        // console.log("payload",payload)
      })
      .addCase(Team.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      //////////////////////////////////////////////////////////
      .addCase(Testimonial.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(Testimonial.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.testimonials = payload.testimonials;
        // console.log("payload",payload)
      })
      .addCase(Testimonial.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      ////////////////////////////////////////////////////////////////////////
      .addCase(Banner.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(Banner.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.bannerdata = payload;
        // console.log("payload",payload)
      })
      .addCase(Banner.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      //////////////////////////////////////////////////////////////////
      .addCase(contact.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(contact.fulfilled, (state, { payload }) => {
        if (payload.success === true) {
          state.status = "idle";

          toast(payload?.message);
        }
      })
      .addCase(contact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // toast.error(action.error.message);
        toast(action.error.message);
      })

      ////////////////////////////////////////////////////////////////////////////////////////
      .addCase(Category.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(Category.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.categoryData = payload.data;
        toast(payload?.message);
      })
      .addCase(Category.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      //////////////////////////////////////////////////////////////////////
      .addCase(CourseApply.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(CourseApply.fulfilled, (state, { payload }) => {
        state.status = "idle";

        toast(payload?.message);
      })
      .addCase(CourseApply.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // toast.error(action.error.message);
        toast(action.error.message);
      });
  },
});

export const { reset_redirectToUpdate } = CrudSlice.actions;
export default CrudSlice;
