package com.wipro.ProductManagement.controller;

import com.wipro.ProductManagement.entity.Product;
import com.wipro.ProductManagement.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/search")
    public List<Product> searchProducts(
            @RequestParam String productName,
            @RequestParam String productMake
    ) {
        return productService.searchByNameAndMake(productName, productMake);
    }
}
