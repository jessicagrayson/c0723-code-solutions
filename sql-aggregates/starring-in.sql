SELECT "genres"."genreId", "genres"."name" as "genreName", COUNT(*) AS "filmCount"
FROM "genres"
JOIN "filmGenre" ON "genres"."genreId" = "filmGenre"."genreId"
JOIN "castMembers" ON "filmGenre"."filmId" = "castMembers"."filmId"
WHERE "castMembers"."actorId" = 178
GROUP BY "genres"."genreId", "genres"."name";
