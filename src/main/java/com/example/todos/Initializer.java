package com.example.todos;

import com.example.todos.item.ItemEntity;
import com.example.todos.item.ItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Initializer implements CommandLineRunner {

  private final ItemRepository repository;

  public Initializer(ItemRepository itemRepository) {
    this.repository = itemRepository;
  }

  @Override
  public void run(String... strings) {
    ItemEntity newItem = ItemEntity
      .builder()
      .name("Test Item")
      .description("This is an item just so our endpoint returns something")
      .build();

    repository.save(newItem);
    repository.findAll().forEach(System.out::println);
  }
}
