from django.db import models


class CityModel(models.Model):
    name = models.TextField(null=False)
    countrycode = models.CharField(max_length=3, null=False)
    district = models.TextField(null=False)
    population = models.IntegerField(null=False)

    class Meta:
        db_table = "city"


class CountryModel(models.Model):
    code = models.CharField(max_length=3, null=False, primary_key=True)
    name = models.CharField(max_length=100, null=False)
    continent = models.CharField(max_length=100, null=False)
    region = models.CharField(max_length=100, null=False)
    surfacearea = models.FloatField(null=False)
    indepyear = models.IntegerField(null=True)
    population = models.IntegerField(null=False)
    lifeexpectancy = models.FloatField(null=True)
    gnp = models.FloatField(max_length=10, null=True)
    gnpold = models.FloatField(max_length=10, null=True)
    localname = models.CharField(max_length=100, null=False)
    governmentform = models.CharField(max_length=100, null=False)
    headofstate = models.CharField(max_length=100, null=True)
    capital = models.IntegerField(null=True)
    code2 = models.CharField(max_length=2, null=False)

    class Meta:
        db_table = "country"


class CountrylanguageModel(models.Model):
    countrycode = models.CharField(max_length=3, null=False, primary_key=True)
    language = models.CharField(max_length=100, null=False)
    isofficial = models.BooleanField(null=False)
    percentage = models.FloatField(null=False)

    class Meta:
        unique_together = (('countrycode', 'language'),)
        db_table = "countrylanguage"
