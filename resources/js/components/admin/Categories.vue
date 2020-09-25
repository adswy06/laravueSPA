<template>
    <main>
        <div class="container-fluid">
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Categories</li>
            </ol>

            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-12">
                        <div class="card-header d-flex">
                            <span>
                                <i class="fas fa-chart-area mr-1"></i>
                                Category Management
                            </span>
                            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                                <div class="input-group">
                                    <input class="form-control" type="text" v-model="search.keywords" @keyup="searchit" placeholder="Search Category" aria-label="Search" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" @click="search" type="button"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                            <button class="btn btn-info btn-sm ml-auto" v-on:click="showCategoryModal"><span class="fa fa-plus"></span> Create</button>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <td><b>No</b></td>
                                        <td style="width:50%"><b>Name</b></td>
                                        <td style="width:20%"><b>Actions</b></td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="(category, index) in categories.data" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{category.name}}</td>
                                        <td>
                                            <button class="btn btn-info btn-sm" v-on:click="editCategory(category)"><span class="fa fa-edit"></span> Edit</button>
                                            <button class="btn btn-warning btn-sm" v-on:click="deleteCategory(category)"><span class="fa fa-trash"></span> Hapus</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="col-md-8">  
                                <pagination :data="categories" @pagination-change-page="getResults">
                                    <span slot="prev-nav">&lt; Sebelumnya</span>
                                    <span slot="next-nav">Selanjutnya &gt;</span>
                                </pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <b-modal ref="newCategoryModal" hide-footer title="Add New Category"> 
                <div class="d-block">
                    <form v-on:submit.prevent="createCategory">
                        <div class="form-group">
                            <label for="name">Enter Name</label>
                            <input type="text" v-model="categoryData.name" class="form-control" id="name" placeholder="Enter Category Name">
                            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>

                        <div class="form-group">
                            <label for="name">Choose Image</label>
                            <div v-if="categoryData.image.name" class="imageShow">
                                <img src="" ref="newCategoryImageDisplay" class="w-150px"/>
                            </div>
                            <input type="file" v-on:change="attachImage" ref="newCategoryImage" class="form-control" id="image">
                            <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                        </div>

                        <hr>
                        <div class="text-right">
                            <button type="button" class="btn btn-warning" v-on:click="hideNewCategoryModal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </b-modal>

            <b-modal ref="editCategoryModal" hide-footer title="Edit Category"> 
                <div class="d-block">
                    <form v-on:submit.prevent="updateCategory">
                        <div class="form-group">
                            <label for="name">Enter Name</label>
                            <input type="text" v-model="editCategoryData.name" class="form-control" id="name" placeholder="Enter Category Name">
                            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>

                        <div class="form-group">
                            <label for="name">Choose Image</label>
                            <div>
                                <img :src="`${$store.state.serverPath}/storage/${editCategoryData.image}`" ref="editCategoryImageDisplay" class="w-150px"/>
                            </div>
                            <input type="file" v-on:change="editAttachImage" ref="editCategoryImage" class="form-control" id="image">
                            <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                        </div>

                        <hr>
                        <div class="text-right">
                            <button type="button" class="btn btn-warning" v-on:click="hideEditCategoryModal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </b-modal>
        </div>
    </main>
</template>

<script>
import * as categoryServices from '../../services/category_services'
export default {
    name: 'category',
    data(){
        return {
            categories:{},
            categoryData:{
                name:'',
                image:''
            },
            moreExists: true,
            nextPage: 0,
            editCategoryData:{},
            errors: {},
            customPagination: {},
            search: {
                keywords: ''
            }
        }
    },
    mounted() {
        this.loadCategories();
        this.getResults();
    },

    methods:{
        getResults(page = 1){
            categoryServices.loadMore(page)
            .then(response => {
                this.categories = response.data;
            })
        },
        loadCategories: async function(){
            try {
                const response = await categoryServices.loadCategories()
                .then(({data}) => (this.categories = data))
                .then(res => {
                    this.customPagination = {
                        current_page: res.current_page,
                        from: res.from,
                        last_page: res.last_page,
                        total: res.total,
                        to: res.to
                    }
                });
                // console.log(response);
                // this.categories = response.data.data;
                // console.log(this.categories);
                // if(response.data.current_page < response.data.last_page){
                //     this.nextPage = response.data.current_page + 1;
                // }else{
                //     this.moreExist = false;
                // }
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error to get data category, please try again',
                    time: 5000
                });
            }
        },

        attachImage(){
            this.categoryData.image = this.$refs.newCategoryImage.files[0];
            let reader = new FileReader();
            reader.addEventListener('load', function(){
                this.$refs.newCategoryImageDisplay.src = reader.result;
            }.bind(this), false);

            reader.readAsDataURL(this.categoryData.image);
        },
        hideNewCategoryModal(){
            this.$refs.newCategoryModal.hide();
        },
        showCategoryModal(){
            this.$refs.newCategoryModal.show();
        },
        createCategory: async function() {
            let formData = new FormData();
            formData.append('name', this.categoryData.name);
            formData.append('image', this.categoryData.image);

            try {
                const response = await categoryServices.createCategory(formData);
                this.categories.data.unshift(response.data);
                this.hideNewCategoryModal();
                this.flashMessage.success({
                    message: 'Category store successfully',
                    time: 5000
                });
                this.categoryData = {
                    name: '',
                    image: ''
                };
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    default:
                        this.flashMessage.error({
                            message: 'Some error occured, Please try again',
                            time: 5000
                        });
                        break;
                }
            }
        },
        deleteCategory(category) {
            // if(!window.confirm(`Apakah anda yakin akan menghapus kategori ${category.name} ?`)){
            //     return;
            // }
            this.$confirm({
                message: `Are you sure to delete Category ${category.name} ?`,
                button: {
                    no: 'No',
                    yes: 'Yes'
                },
                callback: confirm => {
                    if(confirm){
                        try {
                           const response = categoryServices.deleteCategory(category.id);
                           const categoryIndex = this.categories.data.findIndex(p => p.id === category.id);
                           this.categories.data.splice(categoryIndex, 1);
                                this.flashMessage.success({
                                    message: 'Category delete successfully',
                                    time: 5000
                                });
                        } catch (error) {
                            console.log(error);
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                        }   
                    }else{
                        return;
                    }
                }
            });
        },
        hideEditCategoryModal(){
            this.$refs.editCategoryModal.hide();
        },
        showEditCategoryModal(){      
            this.$refs.editCategoryModal.show();
        },
        editCategory(category){
            this.editCategoryData = {...category};
            this.showEditCategoryModal();
        },
        editAttachImage(){
            this.editCategoryData.image = this.$refs.editCategoryImage.files[0];
            let reader = new FileReader();
            reader.addEventListener('load', function(){
                this.$refs.editCategoryImageDisplay.src = reader.result;
            }.bind(this), false);

            reader.readAsDataURL(this.editCategoryData.image);
        },
        updateCategory: async function(){
            try {
                const formData = new FormData();
                formData.append('name', this.editCategoryData.name);
                formData.append('image', this.editCategoryData.image);
                formData.append('_method', 'put');

                const response = await categoryServices.updateCategory(this.editCategoryData.id, formData);
                this.categories.data.map(category => {
                    if(category.id == response.data.id){
                        for(let key in response.data){
                            category[key] = response.data[key]
                        }
                    }
                });
                this.hideEditCategoryModal();
                this.flashMessage.success({
                    message: 'Category updated successfully',
                    time: 5000
                });
               
            } catch (error) {
                console.log(error);
                this.hideEditCategoryModal();
                this.flashMessage.error({
                    message: error.response.data.message,
                    time: 5000
                });
            }
        },
        loadMore: async function(){
            try {
                const response = await categoryServices.loadMore(this.nextPage);
                console.log(response);

                response.data.data.forEach(data => {
                    this.categories.push(data);
                })
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: "Some error during more category",
                    time: 5000
                });
            }
        },
        searchit(){
            let query = this.search.keywords;
            // ProductServices.searching(query)
            categoryServices.searching(query)
            .then((data) => {
                let count = data.data.data;
                let resultCount = count.length;
                this.products = data.data;

                if(resultCount == 0){
                    this.flashMessage.info({
                        message: `Category ${query} is not found`,
                        time: 5000
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
    .btn.btn-info.btn-sm.ml-auto{
        margin-left: 0px !important;
    }
</style>