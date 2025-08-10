package com.wipro.ProductManagement.service;

import com.wipro.ProductManagement.entity.Product;
import com.wipro.ProductManagement.repo.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> searchByNameAndMake(String productName, String productMake) {
        return productRepository.findByProductNameAndProductMakeOrderByProductNameDesc(productName, productMake);
    }
}
