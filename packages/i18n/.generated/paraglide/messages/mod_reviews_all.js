/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Reviews_AllInputs */

const en_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Read the review`);
	return /** @type {LocalizedString} */ (`Read all ${count__number} reviews`)
	
};

const es_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Leer la reseña`);
	return /** @type {LocalizedString} */ (`Leer las ${count__number} reseñas`)
	
};

const de_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bewertung lesen`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} Bewertungen lesen`)
	
};

const fr_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Lire l’avis`);
	return /** @type {LocalizedString} */ (`Lire les ${count__number} avis`)
	
};

const it_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Leggi la recensione`);
	return /** @type {LocalizedString} */ (`Leggi tutte le ${count__number} recensioni`)
	
};

const nl_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Lees de review`);
	return /** @type {LocalizedString} */ (`Lees alle ${count__number} reviews`)
	
};

const pl_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Przeczytaj recenzję`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Przeczytaj wszystkie ${count__number} recenzje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Przeczytaj wszystkie ${count__number} recenzji`);
	return /** @type {LocalizedString} */ (`Przeczytaj wszystkie ${count__number} recenzji`)
	
};

const pt_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ler a avaliação`);
	return /** @type {LocalizedString} */ (`Ler todas as ${count__number} avaliações`)
	
};

const ru_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Читать отзыв`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Читать все ${count__number} отзыва`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Читать все ${count__number} отзывов`);
	return /** @type {LocalizedString} */ (`Читать все ${count__number} отзыва`)
	
};

const sv_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Läs recensionen`);
	return /** @type {LocalizedString} */ (`Läs alla ${count__number} recensioner`)
	
};

const tr_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`İncelemeyi oku`);
	return /** @type {LocalizedString} */ (`${count__number} incelemenin tümünü oku`)
	
};

const zh_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`查看全部 ${count__number} 条评价`)
};

const ja_mod_reviews_all = /** @type {(inputs: Mod_Reviews_AllInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`レビュー ${count__number} 件をすべて読む`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Read the review" |
* | * | "Read all {count__number} reviews" |
*
* @param {Mod_Reviews_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_all = /** @type {((inputs: Mod_Reviews_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_all(inputs)
	if (locale === "de") return de_mod_reviews_all(inputs)
	if (locale === "fr") return fr_mod_reviews_all(inputs)
	if (locale === "it") return it_mod_reviews_all(inputs)
	if (locale === "nl") return nl_mod_reviews_all(inputs)
	if (locale === "pl") return pl_mod_reviews_all(inputs)
	if (locale === "pt") return pt_mod_reviews_all(inputs)
	if (locale === "ru") return ru_mod_reviews_all(inputs)
	if (locale === "sv") return sv_mod_reviews_all(inputs)
	if (locale === "tr") return tr_mod_reviews_all(inputs)
	if (locale === "zh") return zh_mod_reviews_all(inputs)
	if (locale === "ja") return ja_mod_reviews_all(inputs)
	return en_mod_reviews_all(inputs)
});
