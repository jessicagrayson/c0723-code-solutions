select
"actors"."firstName",
"actors"."lastName",
"films"."title"
from "actors"
join "castMembers"
on "actors"."actorId" = "castMembers"."actorId"
join "films"
on "films"."filmId" = "castMembers"."filmId"
where "films"."title" = 'Jersey Sassy';
