<script setup>
import {ref} from 'vue';

// 定義一個反應式變數來存放訂單數據
const orders = ref([]);

      function load_products(){

        const formData_customer={
          action: "select_orders",
        }
        fetch('http://192.168.0.158/%e6%b8%ac%e8%a9%a6%e7%ab%99/%e7%b7%b4%e5%a6%96%e5%a3%ba/vue-shop-back/test-api.php',{
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData_customer)
        })
        .then(res=> res.json())
        .then(data=>{
          console.log(data);
          orders.value = data;
        })
        .catch(error=>{
          console.error(error)
        })

      }

      load_products();


</script>

<template>
  <div>
    <h1>這裡是購物車</h1>

    <div class="mx-5 my-2" v-for="(order) in orders" :key="order.OrderID">
      <b-card :title="`${ order.ProductName }`" sub-title="Card subtitle">
        <b-container class="bv-example-row">
          <b-row cols="1" cols-sm="2" cols-md="0" cols-lg="4">
            <b-col>價格: $ {{ order.OrderID }}</b-col>
            <b-col>數量: {{ order.TotalAmount }}個</b-col>
            <b-col>總價: $ </b-col>
            <b-col><b-button variant="danger" class="mx-auto">待結帳</b-button></b-col>
          </b-row>   
        </b-container>
      </b-card>
    </div>




  </div>
  <div>

  </div>
</template>

<script>
  export default {
    name: 'shop_cart'
  };
</script>
