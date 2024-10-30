from rest_framework.pagination import PageNumberPagination

class CoursePagination(PageNumberPagination):
    page_size = 10  # Items per page
    page_size_query_param = 'page_size'  # Allow the client to set the page size with a query parameter
    max_page_size = 100  # Maximum items per page if specified by the client
