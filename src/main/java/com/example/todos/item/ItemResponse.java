package com.example.todos.item;

import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

import lombok.Builder;
import lombok.Value;

@Value
@Builder(toBuilder = true)
@JsonDeserialize(builder = ItemResponse.ItemResponseBuilder.class)
public class ItemResponse {
    
    List<ItemEntity> items;

    @JsonPOJOBuilder(withPrefix = "")
    public static final class ItemResponseBuilder{}
}
