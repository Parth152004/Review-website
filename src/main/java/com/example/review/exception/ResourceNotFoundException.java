package com.example.review.exception;

public class ResourceNotFoundException extends RuntimeException{
    String resourceName;
    String fieldName;
    long findvalue;

    String findvalues;

    public ResourceNotFoundException(String resourceName, String fieldName, long findvalue) {
        super(String.format("%s not found with %s : %l",resourceName,fieldName,findvalue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.findvalue = findvalue;
    }
    public ResourceNotFoundException(String resourceName, String fieldName, String findvalues) {
        super(String.format("%s not found with %s : %l",resourceName,fieldName,findvalues));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.findvalues = findvalues;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public long getFindvalue() {
        return findvalue;
    }

    public void setFindvalue(long findvalue) {
        this.findvalue = findvalue;
    }
}
