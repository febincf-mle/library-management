from django.db import models


class Book(models.Model):
    
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    published_date = models.DateField(null=True, blank=True)
    isbn = models.CharField(max_length=20, unique=True)
    summary = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} — {self.author}"