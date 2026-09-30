/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rating: NonNullable<unknown>, count: NonNullable<unknown> }} Mod_Stat_Rating_ValueInputs */

const en_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} review)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} reviews)`)
	
};

const es_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} reseña)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} reseñas)`)
	
};

const de_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} Bewertung)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} Bewertungen)`)
	
};

const fr_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} avis)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} avis)`)
	
};

const it_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} recensione)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} recensioni)`)
	
};

const nl_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} review)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} reviews)`)
	
};

const pl_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} recenzja)`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} recenzje)`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} recenzji)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} recenzji)`)
	
};

const pt_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} avaliação)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} avaliações)`)
	
};

const ru_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} отзыв)`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} отзыва)`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} отзывов)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} отзыва)`)
	
};

const sv_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} recension)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} recensioner)`)
	
};

const tr_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} inceleme)`);
	return /** @type {LocalizedString} */ (`${i?.rating} (${count__number} inceleme)`)
	
};

const zh_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.rating}（${count__number} 条评价）`)
};

const ja_mod_stat_rating_value = /** @type {(inputs: Mod_Stat_Rating_ValueInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.rating}（${count__number} 件）`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{rating} ({count__number} review)" |
* | * | "{rating} ({count__number} reviews)" |
*
* @param {Mod_Stat_Rating_ValueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stat_rating_value = /** @type {((inputs: Mod_Stat_Rating_ValueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stat_Rating_ValueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stat_rating_value(inputs)
	if (locale === "de") return de_mod_stat_rating_value(inputs)
	if (locale === "fr") return fr_mod_stat_rating_value(inputs)
	if (locale === "it") return it_mod_stat_rating_value(inputs)
	if (locale === "nl") return nl_mod_stat_rating_value(inputs)
	if (locale === "pl") return pl_mod_stat_rating_value(inputs)
	if (locale === "pt") return pt_mod_stat_rating_value(inputs)
	if (locale === "ru") return ru_mod_stat_rating_value(inputs)
	if (locale === "sv") return sv_mod_stat_rating_value(inputs)
	if (locale === "tr") return tr_mod_stat_rating_value(inputs)
	if (locale === "zh") return zh_mod_stat_rating_value(inputs)
	if (locale === "ja") return ja_mod_stat_rating_value(inputs)
	return en_mod_stat_rating_value(inputs)
});
