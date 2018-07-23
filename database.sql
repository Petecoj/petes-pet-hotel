CREATE TABLE hotelOwners (
    "id" SERIAL PRIMARY KEY,
    "owner_name" VARCHAR(20)
);

CREATE TABLE hotelPets (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(20),
    "breed" VARCHAR(20),
	"color" VARCHAR(15),
	"owner_id" INT REFERENCES "hotelowners",
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"checked_in" BOOLEAN DEFAULT false
	);
	