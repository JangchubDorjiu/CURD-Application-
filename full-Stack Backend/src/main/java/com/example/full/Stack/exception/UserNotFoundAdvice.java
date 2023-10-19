package com.example.full.Stack.exception;

import com.example.full.Stack.controller.UserNotFoundExpception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Map;
import java.util.HashMap;

@ControllerAdvice

public class UserNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(UserNotFoundExpception.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
     public Map<String,String> exceptionHandler(UserNotFoundExpception exception){
         Map<String,String> errorMap=new HashMap<>();
         errorMap.put("errorMessage",exception.getMessage());

         return errorMap;
     }
}
