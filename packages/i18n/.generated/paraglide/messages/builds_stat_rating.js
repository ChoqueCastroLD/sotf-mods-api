/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rating: NonNullable<unknown>, count: NonNullable<unknown> }} Builds_Stat_RatingInputs */

const en_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} out of 5 · ${count__number} review`);
	return /** @type {LocalizedString} */ (`${i?.rating} out of 5 · ${count__number} reviews`)
	
};

const es_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} de 5 · ${count__number} reseña`);
	return /** @type {LocalizedString} */ (`${i?.rating} de 5 · ${count__number} reseñas`)
	
};

const de_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} von 5 · ${count__number} Bewertung`);
	return /** @type {LocalizedString} */ (`${i?.rating} von 5 · ${count__number} Bewertungen`)
	
};

const fr_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} sur 5 · ${count__number} avis`);
	return /** @type {LocalizedString} */ (`${i?.rating} sur 5 · ${count__number} avis`)
	
};

const it_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} su 5 · ${count__number} recensione`);
	return /** @type {LocalizedString} */ (`${i?.rating} su 5 · ${count__number} recensioni`)
	
};

const nl_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} van 5 · ${count__number} review`);
	return /** @type {LocalizedString} */ (`${i?.rating} van 5 · ${count__number} reviews`)
	
};

const pl_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} na 5 · ${count__number} recenzja`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.rating} na 5 · ${count__number} recenzje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.rating} na 5 · ${count__number} recenzji`);
	return /** @type {LocalizedString} */ (`${i?.rating} na 5 · ${count__number} recenzji`)
	
};

const pt_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} de 5 · ${count__number} avaliação`);
	return /** @type {LocalizedString} */ (`${i?.rating} de 5 · ${count__number} avaliações`)
	
};

const ru_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} из 5 · ${count__number} отзыв`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.rating} из 5 · ${count__number} отзыва`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.rating} из 5 · ${count__number} отзывов`);
	return /** @type {LocalizedString} */ (`${i?.rating} из 5 · ${count__number} отзыва`)
	
};

const sv_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} av 5 · ${count__number} recension`);
	return /** @type {LocalizedString} */ (`${i?.rating} av 5 · ${count__number} recensioner`)
	
};

const tr_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`5 üzerinden ${i?.rating} · ${count__number} inceleme`);
	return /** @type {LocalizedString} */ (`5 üzerinden ${i?.rating} · ${count__number} inceleme`)
	
};

const zh_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.rating} / 5 · ${count__number} 条评价`)
};

const ja_builds_stat_rating = /** @type {(inputs: Builds_Stat_RatingInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`5 点中 ${i?.rating} · レビュー ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{rating} out of 5 · {count__number} review" |
* | * | "{rating} out of 5 · {count__number} reviews" |
*
* @param {Builds_Stat_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_stat_rating = /** @type {((inputs: Builds_Stat_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Stat_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_stat_rating(inputs)
	if (locale === "de") return de_builds_stat_rating(inputs)
	if (locale === "fr") return fr_builds_stat_rating(inputs)
	if (locale === "it") return it_builds_stat_rating(inputs)
	if (locale === "nl") return nl_builds_stat_rating(inputs)
	if (locale === "pl") return pl_builds_stat_rating(inputs)
	if (locale === "pt") return pt_builds_stat_rating(inputs)
	if (locale === "ru") return ru_builds_stat_rating(inputs)
	if (locale === "sv") return sv_builds_stat_rating(inputs)
	if (locale === "tr") return tr_builds_stat_rating(inputs)
	if (locale === "zh") return zh_builds_stat_rating(inputs)
	if (locale === "ja") return ja_builds_stat_rating(inputs)
	return en_builds_stat_rating(inputs)
});
