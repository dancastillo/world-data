from graphene_django import DjangoObjectType
import graphene

from .models import CityModel, CountryModel, CountrylanguageModel


class City(DjangoObjectType):
    class Meta:
        model = CityModel


class Country(DjangoObjectType):
    class Meta:
        model = CountryModel


class Countrylanguage(DjangoObjectType):
    class Meta:
        model = CountrylanguageModel


class Query(graphene.ObjectType):
    cities = graphene.List(City)
    countries = graphene.List(Country)
    country_languages = graphene.List(Countrylanguage)

    def resolve_cities(self, info):
        return CityModel.objects.all()

    def resolve_countries(self, info):
        return CountryModel.objects.all()

    def resolve_country_languages(self, info):
        return CountrylanguageModel.objects.all()


class CreateCity(graphene.Mutation):
    id = graphene.Int()
    name = graphene.String()
    countrycode = graphene.String()
    district = graphene.String()
    population = graphene.Int()

    class Arguments:
        name = graphene.String()
        countrycode = graphene.String()
        district = graphene.String()
        population = graphene.Int()

    def mutate(self, info, name, countrycode, district, population):
        city = CityModel(
            name=name,
            countrycode=countrycode,
            district=district,
            population=population
        )

        city.save()

        return CreateCity(
            name=city.name,
            countrycode=city.countrycode,
            district=city.district,
            population=city.population
        )


class CreateCountry(graphene.Mutation):
    code = graphene.String()
    name = graphene.String()
    continent = graphene.String()
    region = graphene.String()
    surfacearea = graphene.Float()
    indepyear = graphene.Int()
    population = graphene.Int()
    lifeexpectancy = graphene.Float()
    gnp = graphene.Float()
    gnpold = graphene.Float()
    localname = graphene.String()
    governmentform = graphene.String()
    headofstate = graphene.String()
    capital = graphene.Int()
    code2 = graphene.String()

    class Arguments:
        code = graphene.String()
        name = graphene.String()
        continent = graphene.String()
        region = graphene.String()
        surfacearea = graphene.Float()
        indepyear = graphene.Int()
        population = graphene.Int()
        lifeexpectancy = graphene.Float()
        gnp = graphene.Float()
        gnpold = graphene.Float()
        localname = graphene.String()
        governmentform = graphene.String()
        headofstate = graphene.String()
        capital = graphene.Int()
        code2 = graphene.String()

    def mutate(
            self,
            info,
            code,
            name,
            continent,
            region,
            surfacearea,
            indepyear,
            population,
            lifeexpectancy,
            gnp,
            gnpold,
            localname,
            governmentform,
            headofstate,
            capital,
            code2
    ):
        country = CountryModel(
            code=code,
            name=name,
            continent=continent,
            region=region,
            surfacearea=surfacearea,
            indepyear=indepyear,
            population=population,
            lifeexpectancy=lifeexpectancy,
            gnp=gnp,
            gnpold=gnpold,
            localname=localname,
            governmentform=governmentform,
            headofstate=headofstate,
            capital=capital,
            code2=code2
        )

        country.save()

        return CreateCountry(
            code=country.code,
            name=country.name,
            continent=country.continent,
            region=country.region,
            surfacearea=country.surfacearea,
            indepyear=country.indepyear,
            population=country.population,
            lifeexpectancy=country.lifeexpectancy,
            gnp=country.gnp,
            gnpold=country.gnpold,
            localname=country.localname,
            governmentform=country.governmentform,
            headofstate=country.headofstate,
            capital=country.capital,
            code2=country.code2
        )


class CreateCountryLanguage(graphene.Mutation):
    countrycode = graphene.String()
    language = graphene.String()
    isofficial = graphene.Boolean()
    percentage = graphene.Float()

    class Arguments:
        countrycode = graphene.String()
        language = graphene.String()
        isofficial = graphene.Boolean()
        percentage = graphene.Float()

    def mutate(self, info, countrycode, language, isofficial, percentage):
        country_language = CountrylanguageModel(
            countrycode=countrycode,
            language=language,
            isofficial=isofficial,
            percentage=percentage
        )

        country_language.save()

        return CreateCountryLanguage(
            countrycode=city.countrycode,
            language=city.language,
            isofficial=city.isofficial,
            percentage=city.percentage
        )


class Mutation(graphene.ObjectType):
    create_city = CreateCity.Field()
    create_country = CreateCountry.Field()
    create_country_language = CreateCountryLanguage.Field()


schema = graphene.Schema(
    query=Query,
    mutation=Mutation
)
