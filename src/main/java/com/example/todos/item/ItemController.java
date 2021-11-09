package com.example.todos.item;

import java.util.UUID;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

  private final ItemRepository repository;

  public ItemController(ItemRepository itemRepository) {
    this.repository = itemRepository;
  }

  @GetMapping(path = "/api/items", produces = MediaType.APPLICATION_JSON_VALUE)
  public ItemResponse getAllItems() {
    return new ItemResponse(repository.findAll());
  }

  @PostMapping(path = "/api/item")
  public ResponseEntity<String> createItem(@RequestBody ItemEntity newItem) {
    repository.save(newItem);
    return ResponseEntity.ok().build();
  }

  @PutMapping(path = "api/item/{id}")
  ResponseEntity<ItemEntity> updateItem(@RequestBody ItemEntity item) {
    ItemEntity result = repository.save(item);
    return ResponseEntity.ok().body(result);
  }

  @DeleteMapping(path = "api/item/{id}")
  public ResponseEntity<?> deleteItem(@PathVariable UUID id) {
    repository.deleteById(id);
    return ResponseEntity.ok().build();
  }
}
