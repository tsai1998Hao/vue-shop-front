<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'





      function load_products(){
        const formData_product={
          action: "select_product",
        }
        fetch('http://192.168.0.158/%e6%b8%ac%e8%a9%a6%e7%ab%99/%e7%b7%b4%e5%a6%96%e5%a3%ba/TRANSACTION_%e8%b3%87%e6%96%99%e5%ba%ab%e7%af%84%e4%be%8b/test-api.php',{
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData_product)
        })
        .then(res=> res.json())
        .then(data=>{
          // console.log(data);
          document.querySelector("#pd01_prise").innerText=data[0].Price;
          document.querySelector("#pd01_stock").innerText=data[0].Stock;

          document.querySelector("#pd02_prise").innerText=data[1].Price;
          document.querySelector("#pd02_stock").innerText=data[1].Stock;
      
          document.querySelector("#pd03_prise").innerText=data[2].Price;
          document.querySelector("#pd03_stock").innerText=data[2].Stock;

        })
        .catch(error=>{
          console.error(error)
        })






        const formData_customer={
          action: "select_customer",
        }
        fetch('http://192.168.0.158/%e6%b8%ac%e8%a9%a6%e7%ab%99/%e7%b7%b4%e5%a6%96%e5%a3%ba/TRANSACTION_%e8%b3%87%e6%96%99%e5%ba%ab%e7%af%84%e4%be%8b/test-api.php',{
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData_customer)
        })
        .then(res=> res.json())
        .then(data=>{
          // console.log(data);
          // console.log(data[0].PurchaseHistory.slice(-20))
          // console.log(data[1].PurchaseHistory.slice(-20))
          // console.log(data[2].PurchaseHistory.slice(-20))
          // console.log(data[0].PurchaseHistory.length)

          document.querySelector("#customer1_purchase_his").innerText=data[0].PurchaseHistory.slice(-20, length - 1);
          document.querySelector("#customer2_purchase_his").innerText=data[1].PurchaseHistory.slice(-20, length - 1);
          document.querySelector("#customer3_purchase_his").innerText=data[2].PurchaseHistory.slice(-20, length - 1);

        })
        .catch(error=>{
          console.error(error)
        })

      }

      load_products();






</script>

<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <svg aria-hidden="true" class="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    新品和精選
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">商品A</a></li>
                    <li><a class="dropdown-item" href="#">商品B</a></li>
                    <li><a class="dropdown-item" href="#">商品C</a></li>
                  </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    男款
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  女款
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">特惠商品</a>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

          </div>
        </div>
    </nav>


    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="card m-4" style="width: 18rem;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Alice_Hui_2022.png" class="card-img-top" style="height: 300px;" alt="...">
            <div class="card-body">
              <h5 class="card-title">Alice</h5>
              <div id="orderForm">
                <select class="form-select mt-3" aria-label="Default select example" id="customerID1" :disabled="true">
                  <option value="1" selected>Alice</option>
                </select>
                <select class="form-select mt-3" aria-label="Default select example" id="productID1">
                  <option selected>--選擇商品--</option>
                  <option value="1">Keyboard</option>
                  <option value="2">Headphones</option>
                  <option value="3">Laptop</option>
                </select>
                <a href="#" class="btn btn-primary mt-3" onclick="purchance()">立刻購買</a>
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
                <select class="form-select mt-3" aria-label="Default select example" id="customerID2" disabled>
                  <option value="2" selected>Bob</option>
                </select>      
                <!-- <label for="productID1">Product ID 1:</label>
                <input type="number" id="productID1" name="productID1" required><br> -->
        
                <select class="form-select mt-3" aria-label="Default select example" id="productID2">
                  <option selected>--選擇商品--</option>
                  <option value="1">Keyboard</option>
                  <option value="2">Headphones</option>
                  <option value="3">Laptop</option>
                </select>
                <a href="#" class="btn btn-primary mt-3" onclick="purchance2()">立刻購買</a>
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
                <select class="form-select mt-3" aria-label="Default select example" id="customerID3" disabled>
                  <option value="3" selected>Charlie</option>
                </select>  
                <select class="form-select mt-3" aria-label="Default select example" id="productID3">
                  <option selected>--選擇商品--</option>
                  <option value="1">Keyboard</option>
                  <option value="2">Headphones</option>
                  <option value="3">Laptop</option>
                </select>
                <a href="#" class="btn btn-primary mt-3" onclick="purchance3()">立刻購買</a>
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
              <h5 class="card-title">Keyboard</h5>
              <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex">價錢<div class="ms-auto" id="pd01_prise">123</div></li>
                  <li class="list-group-item d-flex">庫存數量<div class="ms-auto" id="pd01_stock">123</div></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div class="col">
          <div class="card mt-2" style="width: 18rem;">
            <img src="https://images.stockx.com/images/Beats-by-Dr-Dre-Solo3-Wireless-Headphones-MX442LL-A-Rose-Gold.jpg?fit=fill&bg=FFFFFF&w=700&h=650&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1616448299" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Headphones</h5>
              <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex">價錢<div class="ms-auto" id="pd02_prise">123</div></li>
                  <li class="list-group-item d-flex">庫存數量<div class="ms-auto" id="pd02_stock">123</div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mt-2" style="width: 18rem;">
            <img src="https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg" class="card-img-top mb-5 mt-4" alt="...">
            <div class="card-body">
              <h5 class="card-title">Laptop</h5>
              <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex">價錢<div class="ms-auto" id="pd03_prise">123</div></li>
                  <li class="list-group-item d-flex">庫存數量<div class="ms-auto" id="pd03_stock">123</div></li>
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








</div>
</template>

<style scoped>




</style>
