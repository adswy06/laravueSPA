<template>
    <main>
        <div class="container-fluid">
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Products</li>
            </ol>

            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-12">
                        <div class="card-header d-flex">
                            <span>
                                <i class="fas fa-chart-area mr-1"></i>
                                Product Management
                            </span>
                            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                                <div class="input-group">
                                    <input class="form-control" type="text" v-model="search.keywords" @keyup="searchit" placeholder="Search product" aria-label="Search" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" @click="search" type="button"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                            <button class="btn btn-info btn-sm ml-auto" v-on:click="showProductModal"><span class="fa fa-plus"></span> Create</button>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered" id="datatable">
                                <thead>
                                    <tr>
                                        <td><b>No</b></td>
                                        <td style="width:20%"><b>Name</b></td>
                                        <td style="width:20%"><b>Category</b></td>
                                        <td style="width:30%"><b>Descriptions</b></td>
                                        <td style="width:20%"><b>Image</b></td>
                                        <td style="width:25%"><b>Actions</b></td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="(Product, index) in products.data" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{Product.name}}</td>
                                        <td>{{findCategory(Product.category_id)}}</td>
                                        <td>{{Product.description}}</td>
                                        <td>
                                            <img class="table-image" :src="`${$store.state.serverPath}/storage/${Product.image}`" :alt="Product.name"/>
                                        </td>
                                        <td>
                                            <button class="btn btn-info btn-sm" v-on:click="editProduct(Product)"><span class="fa fa-edit"></span> Edit</button>
                                            <button class="btn btn-warning btn-sm" v-on:click="deleteProduct(Product)"><span class="fa fa-trash"></span> Hapus</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="col-md-8">  
                                <pagination :data="products" @pagination-change-page="getResults">
                                    <span slot="prev-nav">&lt; Sebelumnya</span>
                                    <span slot="next-nav">Selanjutnya &gt;</span>
                                </pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <b-modal ref="newProductModal" hide-footer title="Add New Product"> 
                <div class="d-block">
                    <form v-on:submit.prevent="createProduct">
                        <div class="form-group">
                            <label for="category_id">Category</label>
                                <select id="category_id" v-model="productData.category_id" class="form-control">
                                    <option value="">Choose Category</option>
                                    <option v-for="(category, index) in categories" :value="category.id" :key="index">{{category.name}}</option>
                                </select>
                            <div class="invalid-feedback" v-if="errors.category_id">{{errors.category_id[0]}}</div>
                        </div>

                        <div class="form-group">
                            <label for="name">Enter Name</label>
                                <input type="text" v-model="productData.name" class="form-control" id="name" placeholder="Enter Product Name">
                            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>

                        <div class="form-group">
                            <label for="description">Enter Description Product</label>
                                <textarea class="form-control" id="description" v-model="productData.description"></textarea>
                            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>

                        <div class="form-group">
                            <label for="name">Choose Image</label>
                            <div v-if="productData.image.name" class="imageShow">
                                <img src="" ref="newProductImageDisplay" class="w-150px"/>
                            </div>
                            <input type="file" v-on:change="attachImage" ref="newProductImage" class="form-control" id="image">
                            <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                        </div>

                        <hr>
                        <div class="text-right">
                            <button type="button" class="btn btn-warning" v-on:click="hideNewProductModal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </b-modal>

            <b-modal ref="editProductModal" hide-footer title="Edit Product"> 
                <div class="d-block">
                    <form v-on:submit.prevent="updateProduct">
                        <div class="form-group">
                            <label for="category_id">Category</label>
                                <select id="category_id" v-model="editproductData.category_id" class="form-control">
                                    <option value="">Choose Category</option>
                                    <option v-for="(category, index) in categories" :value="category.id" :key="index">{{category.name}}</option>
                                </select>
                            <div class="invalid-feedback" v-if="errors.category_id">{{errors.category_id[0]}}</div>
                        </div>

                        <div class="form-group">
                            <label for="name">Enter Name</label>
                            <input type="text" v-model="editproductData.name" class="form-control" id="name" placeholder="Enter Product Name">
                            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>

                        <div class="form-group">
                            <label for="name">Choose Image</label>
                            <div>
                                <img :src="`${$store.state.serverPath}/storage/${editproductData.image}`" ref="editProductImageDisplay" class="w-150px"/>
                            </div>
                            <input type="file" v-on:change="editAttachImage" ref="editProductImage" class="form-control" id="image">
                            <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                        </div>

                        <hr>
                        <div class="text-right">
                            <button type="button" class="btn btn-warning" v-on:click="hideEditProductModal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </b-modal>
        </div>
    </main>
</template>

<script>
import * as ProductServices from '../../services/products_service';
import axios from 'axios';
export default {
    name: 'Product',
    data(){
        return {
            categories: [],
            products: {},
            productData:{
                category_id:'',
                name:'',
                image:'',
                description: '',
            },
            moreExists: true,
            nextPage: 0,
            editproductData:{},
            errors: {},
            customPagination: {},
            search: {
                keywords: ''
            },
        }
    },
    mounted() {
        this.loadCategories();
        this.loadProducts();
        this.getResults();
    },

    methods:{
        getResults(page = 1){
            ProductServices.loadMore(page)
            .then(response => {
                this.products = response.data;
            });
        },
        loadCategories: async function(){
            try {
                const response = await ProductServices.loadCategories();
                // console.log(response);
                this.categories = response.data;
                // console.log(this.categories);

            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error to get data Product, please try again',
                    time: 5000
                });
            }
        },

        loadProducts: async function(){
            try {
                const response = await ProductServices.loadProducts()
                .then(({data}) => (this.products = data))
                .then(res => {
                    this.customPagination = {
                        current_page: res.current_page,
                        from: res.from,
                        last_page: res.last_page,
                        total: res.total,
                        to: res.to
                    }
                });
                // this.products = response.data.data;
                // console.log(this.products);
                // if(response.data.current_page < response.data.last_page){
                //     this.nextPage = response.data.current_page + 1;
                // }else{
                //     this.moreExist = false;
                // }
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: 'Some error to get data Product, please try again',
                    time: 5000
                });
            }
        },

        attachImage(){
            this.productData.image = this.$refs.newProductImage.files[0];
            let reader = new FileReader();
            reader.addEventListener('load', function(){
                this.$refs.newProductImageDisplay.src = reader.result;
            }.bind(this), false);

            reader.readAsDataURL(this.productData.image);
        },
        hideNewProductModal(){
            this.$refs.newProductModal.hide();
        },
        showProductModal(){
            this.$refs.newProductModal.show();
        },
        createProduct: async function() {
            let formData = new FormData();
            formData.append('category_id', this.productData.category_id);
            formData.append('name', this.productData.name);
            formData.append('description', this.productData.description);
            formData.append('image', this.productData.image);
            try {
                const response = await ProductServices.createProduct(formData);
                // var listProduct = Array.prototype.slice.call(response.data);
                this.products.data.unshift(response.data);
                console.log(response);
                // console.log(this.products.unshift(response.data));
                // var data = this.products.data;
                // console.log(data);
                // var result = response.data;
                // var mapList = Object.keys(data)
                // .map(key=> ({id: Number(key), category_id: Number(key), name: data[key], image: data[key], description: data[key], created_at: data[key], updated_at: data[key]}));
                // console.log(mapList);
                this.hideNewProductModal();
                this.flashMessage.success({
                    message: 'Product store successfully',
                    time: 5000
                });
                this.productData = {
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
        deleteProduct(Product) {
            // if(!window.confirm(`Apakah anda yakin akan menghapus kategori ${Product.name} ?`)){
            //     return;
            // }
            this.$confirm({
                message: `Are you sure delete product ${Product.name} ?`,
                button: {
                    no: 'No',
                    yes: 'Yes',
                },
                callback: confirm => {
                    if(confirm){
                        try {
                        const response = ProductServices.deleteProduct(Product.id);
                        const ProductIndex = this.products.data.findIndex(p => p.id === Product.id);
                        this.products.data.splice(ProductIndex, 1);
                        
                            this.flashMessage.success({
                                message: 'Product delete successfully',
                                time: 5000
                            });

                        } catch (error) {
                            console.log(error);
                            this.flashMessage.error({
                                message: "error",
                                time: 5000
                            });
                        }
                    }else{
                        return;
                    }
                }
            });

          
        },
        hideEditProductModal(){
            this.$refs.editProductModal.hide();
        },
        showEditProductModal(){      
            this.$refs.editProductModal.show();
        },
        editProduct(Product){
            this.editproductData = {...Product};
            this.showEditProductModal();
        },
        editAttachImage(){
            this.editproductData.image = this.$refs.editProductImage.files[0];
            let reader = new FileReader();
            reader.addEventListener('load', function(){
                this.$refs.editProductImageDisplay.src = reader.result;
            }.bind(this), false);

            reader.readAsDataURL(this.editproductData.image);
        },
        updateProduct: async function(){
            try {
                const formData = new FormData();
                formData.append('category_id', this.editproductData.category_id);
                formData.append('name', this.editproductData.name);
                formData.append('description', this.editproductData.description);
                formData.append('image', this.editproductData.image);
                formData.append('_method', 'put');

                const response = await ProductServices.updateProduct(this.editproductData.id, formData);
                console.log(response);
                this.products.data.map(Product => {
                    if(Product.id == response.data.id){
                        for(let key in response.data){
                            Product[key] = response.data[key]
                        }
                    }
                });
                this.hideEditProductModal();
                this.flashMessage.success({
                    message: 'Product updated successfully',
                    time: 5000
                });
               
            } catch (error) {
                console.log(error);
                this.hideEditProductModal();
                this.flashMessage.error({
                    message: error.response.data.message,
                    time: 5000
                });
            }
        },
        loadMore: async function(){
            try {
                const response = await ProductServices.loadMore(this.nextPage);
                console.log(response);

                response.data.data.forEach(data => {
                    this.products.push(data);
                })
            } catch (error) {
                console.log(error);
                this.flashMessage.error({
                    message: "Some error during more Product",
                    time: 5000
                });
            }
        },
        findCategory(id){
            let category_name = '';
            this.categories.forEach(category => {
                if(category.id === id){
                    category_name = category.name; 
                }
            });
            return category_name;
        },
        searchit(){
            let query = this.search.keywords;
            ProductServices.searching(query)
            .then((data) => {
                let count = data.data.data;
                let resultCount = count.length;
                this.products = data.data;

                if(resultCount == 0){
                    this.flashMessage.info({
                        message: `Product ${query} is not found`,
                        time: 5000
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
}
</script>

<style scoped>
    .pagination {
        display: flex;
        padding-left: 0;
        margin-left: -15px;
        list-style: none;
        border-radius: 0.25rem;
    }
    .btn.btn-info.btn-sm.ml-auto{
        margin-left: 0px !important;
    }
    .d-none.d-md-inline-block.form-inline.ml-auto.mr-0.mr-md-3.my-2.my-md-0.search{
        margin-left: 0px !important;
    }
</style>