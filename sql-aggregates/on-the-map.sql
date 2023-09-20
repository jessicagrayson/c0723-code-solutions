SELECT "countries"."name", COUNT("cities"."countryId") AS "cityCount"
FROM "countries"
JOIN "cities" ON "countries"."countryId" = "cities"."countryId"
GROUP BY "countries"."name";
