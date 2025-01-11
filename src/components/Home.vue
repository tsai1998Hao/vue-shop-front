<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue';

const products=ref([]);

      function load_products(){
        const formData_product={
          action: "select_product",
        }
        fetch('http://127.0.0.1/vue-shop-back/test-api.php',{
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData_product)
        })
        .then(res=> res.json())
        .then(data=>{
          console.log(data);
          products.value = data;
        })
        .catch(error=>{
          console.error(error)
        })

        const formData_customer={
          action: "select_customer",
        }
        fetch('http://127.0.0.1/vue-shop-back/test-api.php',{
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData_customer)
        })
        .then(res=> res.json())
        .then(data=>{
        })
        .catch(error=>{
          console.error(error)
        })

      }

      load_products();


      function purchance_A(){

        console.log(document.getElementById('product_amount_1_Alice').value)
        if (confirm("是否確定購買？")) {
          const formData1 = {
            action: "buy",
            customer_ID: document.getElementById('customer_ID_Alice').value,
            product_ID_1: document.getElementById('product_ID_1_Alice').value,
            product_ID_2: document.getElementById('product_ID_2_Alice').value,
            product_amount_1: document.getElementById('product_amount_1_Alice').value,
            product_amount_2: document.getElementById('product_amount_2_Alice').value ||0
          };
            console.log(
            "顧客的id:",document.getElementById('customer_ID_Alice').value,
            "產品的id:",document.getElementById('product_ID_1_Alice').value,
            "數量:",document.getElementById('product_amount_1_Alice').value,
            "產品2的id:", document.getElementById('product_ID_2_Alice').value,
            "數量:", document.getElementById('product_amount_2_Alice').value ||0
            )

          fetch('http://127.0.0.1/vue-shop-back/test-api.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData1)    
          })
          .then(response =>response.json())
          .then(data => {
              console.log(data);
              alert("購買成功！");
              window.location.reload();
          })
          .catch(error => {
              console.error('Error:', error);
          });

        }
        else{
          alert("已取消購買");
        }
      }

      function purchance2(){
        const formData2 = {
          action: "buy",
          customer_ID: document.getElementById('customer_ID_Bob').value,
          product_ID_1: document.getElementById('product_ID_1_Bob').value,
          // productID2: document.getElementById('productID2').value,
          product_amount_1: document.getElementById('product_amount_1_Bob').value
        };
          fetch('http://127.0.0.1/vue-shop-back/test-api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData2)    
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            // window.location.reload();

        })
        .catch(error => {
            console.error('Error:', error);
        });

      }

      function purchance3(){
        const formData3 = {
            action: "buy",
            customer_ID: document.getElementById('customer_ID_Charlie').value,
            product_ID_1: document.getElementById('product_ID_1_Charlie').value,
            // productID2: document.getElementById('productID2').value,
            product_amount_1: document.getElementById('product_amount_1_Charlie').value
        };

          fetch('http://127.0.0.1/vue-shop-back/test-api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData3)    
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            window.location.reload();

        })
        .catch(error => {
            console.error('Error:', error);
        });

      }


</script>


<template>


    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="card m-4" style="width: 18rem;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Alice_Hui_2022.png" class="card-img-top" style="height: 300px;" alt="...">
            <div class="card-body">
              <h5 class="card-title">Alice</h5>
              <div id="orderForm">
                <select class="form-select mt-3" aria-label="Default select example" id="customer_ID_Alice" :disabled="true">
                  <option value="1" selected>Alice</option>
                </select>

                <!-- 商品1 -->
                <div>
                  <select class="form-select mt-3" aria-label="Default select example" id="product_ID_1_Alice">
                    <option selected>--選擇商品--</option>
                    <option value="1">Keyboard</option>
                    <option value="2">Headphones</option>
                    <option value="3">Laptop</option>
                  </select>
                  <b-form-input type="number" min="1" placeholder="請輸入數量" id="product_amount_1_Alice" aria-required=""></b-form-input>
                </div>
                <!-- 商品1 -->

                <!-- 商品2 -->
                <div>
                  <select class="form-select mt-3" aria-label="Default select example" id="product_ID_2_Alice">
                    <option selected value="0">--選擇商品--</option>
                    <option value="1">Keyboard</option>
                    <option value="2">Headphones</option>
                    <option value="3">Laptop</option>
                  </select>
                  <b-form-input type="number" placeholder="請輸入數量" id="product_amount_2_Alice" value="0"></b-form-input>
                </div>
                <!-- 商品2 -->

                <!-- 商品3 -->
                <!-- <div>
                  <select class="form-select mt-3" aria-label="Default select example" id="product_ID_1_Alice">
                    <option selected>--選擇商品--</option>
                    <option value="1">Keyboard</option>
                    <option value="2">Headphones</option>
                    <option value="3">Laptop</option>
                  </select>
                  <b-form-input type="number" min="1" placeholder="請輸入數量" id="product_amount_1_Alice" aria-required=""></b-form-input>
                </div> -->
                <!-- 商品3 -->
                <a href="#" class="btn btn-primary mt-3" @click="purchance_A">立刻購買</a>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" id="customer1_purchase_his">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card m-4" style="width: 18rem;">
            <img src="https://img.cloudimg.in/uploads/shops/2303/products/37/37b50954ae835705759ccd56c4f55461.jpg" class="card-img-top" style="height: 300px;" alt="...">
            <div class="card-body">
              <h5 class="card-title">Bob</h5>
              <div id="orderForm">
                <select class="form-select mt-3" aria-label="Default select example" id="customer_ID_Bob" disabled>
                  <option value="2" selected>Bob</option>
                </select>      
                <!-- <label for="productID1">Product ID 1:</label>
                <input type="number" id="productID1" name="productID1" required><br> -->
        
                <select class="form-select mt-3" aria-label="Default select example" id="product_ID_1_Bob">
                  <option selected>--選擇商品--</option>
                  <option value="1">Keyboard</option>
                  <option value="2">Headphones</option>
                  <option value="3">Laptop</option>
                </select>
                <div>
                  <b-input-group class="mt-3">
                    <b-input-group-text><strong class="text-secondary">數量</strong></b-input-group-text>
                    <b-form-input type="number" min="1" placeholder="請輸入數量" id="product_amount_1_Bob"></b-form-input>
                  </b-input-group>
                </div>
                <a href="#" class="btn btn-primary mt-3" @click="purchance2">立刻購買</a>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" id="customer2_purchase_his">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
          </div>
        <div class="col">
          <div class="card m-4" style="width: 18rem;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Charlie_Chaplin.jpg/480px-Charlie_Chaplin.jpg" class="card-img-top" style="height: 300px;" alt="...">
            <div class="card-body">
              <h5 class="card-title">Charlie</h5>
              <div id="orderForm">
                <select class="form-select mt-3" aria-label="Default select example" id="customer_ID_Charlie" disabled>
                  <option value="3" selected>Charlie</option>
                </select>  
                <select class="form-select mt-3" aria-label="Default select example" id="product_ID_1_Charlie">
                  <option selected>--選擇商品--</option>
                  <option value="1">Keyboard</option>
                  <option value="2">Headphones</option>
                  <option value="3">Laptop</option>
                </select>
                <div>
                  <b-input-group class="mt-3">
                    <b-input-group-text><strong class="text-secondary">數量</strong></b-input-group-text>
                    <b-form-input type="number" min="1" placeholder="請輸入數量" id="product_amount_1_Charlie"></b-form-input>
                  </b-input-group>
                </div>
                <a href="#" class="btn btn-primary mt-3" @click="purchance3">立刻購買</a>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" id="customer3_purchase_his">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
          </div>
      </div>
    </div>


    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="card mt-2" style="width: 18rem;">
            <img src="https://m.media-amazon.com/images/I/61OJDCwoh8L._AC_UF1000,1000_QL80_.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <!-- <h5 class="card-title">{{ products[0]?.ProductName || 'No product available' }}</h5> -->
              <h5 class="card-title" v-if="products && products.length > 0">{{ products[0].ProductName }}</h5>
              <h5 class="card-title" v-else>資料載入中</h5>
              <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex">價錢
                    <div class="ms-auto" id="pd01_prise" v-if="products && products.length > 0">{{ products[0].Price }}</div>
                    <div class="ms-auto" v-else>資料載入中</div>
                 </li>
                  <li class="list-group-item d-flex">庫存數量
                    <div class="ms-auto" id="pd01_stock" v-if="products && products.length > 0">{{ products[0].Stock }}</div>
                    <div class="ms-auto" v-else>資料載入中</div>
                </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div class="col">
          <div class="card mt-2" style="width: 18rem;">
            <img src="https://images.stockx.com/images/Beats-by-Dr-Dre-Solo3-Wireless-Headphones-MX442LL-A-Rose-Gold.jpg?fit=fill&bg=FFFFFF&w=700&h=650&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1616448299" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" v-if="products && products.length>0 ">{{ products[1].ProductName }}</h5>
              <h5 class="card-title" v-else>資料載入中</h5>
              <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex">價錢
                    <div class="ms-auto" id="pd02_prise" v-if="products && products.length > 0">{{ products[1].Price }}</div>
                    <div class="ms-auto" v-else>資料載入中</div>
                  </li>
                  <li class="list-group-item d-flex">庫存數量
                    <div class="ms-auto" id="pd02_stock" v-if="products && products.length > 0">{{ products[1].Stock }}</div>
                    <div class="ms-auto" v-else>資料載入中</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mt-2" style="width: 18rem;">
            <img src="https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg" class="card-img-top mb-5 mt-4" alt="...">
            <div class="card-body">
              <h5 class="card-title" v-if="products && products.length>0 ">{{ products[2].ProductName }}</h5>
              <h5 class="card-title" v-else>資料載入中</h5>
              <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex">價錢
                    <div class="ms-auto" id="pd03_prise" v-if="products && products.length > 0">{{ products[2].Price }}</div>
                    <div class="ms-auto" v-else>資料載入中</div>
                  </li>
                  <li class="list-group-item d-flex">庫存數量
                    <div class="ms-auto" id="pd03_stock" v-if="products && products.length > 0">{{ products[2].Stock }}</div>
                    <div class="ms-auto" v-else>資料載入中</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mt-2" style="width: 18rem;">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae5bfa27-6e51-48ee-adab-a52d10c1dbee/W+NIKE+DUNK+LOW+PRM.png" class="card-img-top" style="height: 260px;" alt="...">
            <div class="card-body">
              <h5 class="card-title">商品4</h5>
              <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex">價錢<div class="ms-auto">123</div></li>
                  <li class="list-group-item d-flex">庫存數量<div class="ms-auto">123</div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>
</style>
