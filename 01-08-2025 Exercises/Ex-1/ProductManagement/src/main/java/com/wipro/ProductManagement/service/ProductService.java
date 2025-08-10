package com.wipro.ProductManagement.service;

import com.wipro.ProductManagement.entity.Product;
import com.wipro.ProductManagement.repo.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Page<Product> getProductsWithPaginationAndSort(int pageNumber, int pageSize) {
        return productRepository.findAll(
            PageRequest.of(pageNumber, pageSize, Sort.by("productPrice"))
        );
    }
}
