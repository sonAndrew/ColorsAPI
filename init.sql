
CREATE TABLE colors(
id SERIAL PRIMARY KEY,
name VARCHAR(128) NOT NULL,
hex VARCHAR(128) NOT NULL,
rgb JSONB NOT NULL,
web_safe BOOLEAN NOT NULL,
hsl JSONB NOT NULL,
cmyk JSONB NOT NULL
);

INSERT INTO colors (name, hex, rgb, web_safe, hsl, cmyk) VALUES('AliceBlue', 'F0F8FF', '{ "red": 240, "green": 248, "blue": 255}', TRUE, '{"hue": 208, "saturation": 100.0, "light": 97.1}', '{"cyan": 6, "magenta": 3, "yellow": 0, "key": 0}');