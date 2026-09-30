/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Profile_Stat_Helpful_LineInputs */

const en_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} helpful vote on their reviews`);
	return /** @type {LocalizedString} */ (`${count__number} helpful votes on their reviews`)
	
};

const es_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} voto útil en sus reseñas`);
	return /** @type {LocalizedString} */ (`${count__number} votos útiles en sus reseñas`)
	
};

const de_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Hilfreich-Stimme für die eigenen Bewertungen`);
	return /** @type {LocalizedString} */ (`${count__number} Hilfreich-Stimmen für die eigenen Bewertungen`)
	
};

const fr_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} vote utile sur ses avis`);
	return /** @type {LocalizedString} */ (`${count__number} votes utiles sur ses avis`)
	
};

const it_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} voto utile sulle sue recensioni`);
	return /** @type {LocalizedString} */ (`${count__number} voti utili sulle sue recensioni`)
	
};

const nl_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuttig-stem op de eigen reviews`);
	return /** @type {LocalizedString} */ (`${count__number} nuttig-stemmen op de eigen reviews`)
	
};

const pl_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} głos „pomocne” przy recenzjach`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} głosy „pomocne” przy recenzjach`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} głosów „pomocne” przy recenzjach`);
	return /** @type {LocalizedString} */ (`${count__number} głosu „pomocne” przy recenzjach`)
	
};

const pt_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} voto útil nas suas avaliações`);
	return /** @type {LocalizedString} */ (`${count__number} votos úteis nas suas avaliações`)
	
};

const ru_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} голос «полезно» за отзывы`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} голоса «полезно» за отзывы`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} голосов «полезно» за отзывы`);
	return /** @type {LocalizedString} */ (`${count__number} голоса «полезно» за отзывы`)
	
};

const sv_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} hjälpsam-röst på sina recensioner`);
	return /** @type {LocalizedString} */ (`${count__number} hjälpsam-röster på sina recensioner`)
	
};

const tr_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`İncelemelerinde ${count__number} faydalı oy`);
	return /** @type {LocalizedString} */ (`İncelemelerinde ${count__number} faydalı oy`)
	
};

const zh_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`其评价获得 ${count__number} 张“有帮助”票`)
};

const ja_profile_stat_helpful_line = /** @type {(inputs: Profile_Stat_Helpful_LineInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`レビューへの「役に立った」票 ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} helpful vote on their reviews" |
* | * | "{count__number} helpful votes on their reviews" |
*
* @param {Profile_Stat_Helpful_LineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stat_helpful_line = /** @type {((inputs: Profile_Stat_Helpful_LineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Helpful_LineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stat_helpful_line(inputs)
	if (locale === "de") return de_profile_stat_helpful_line(inputs)
	if (locale === "fr") return fr_profile_stat_helpful_line(inputs)
	if (locale === "it") return it_profile_stat_helpful_line(inputs)
	if (locale === "nl") return nl_profile_stat_helpful_line(inputs)
	if (locale === "pl") return pl_profile_stat_helpful_line(inputs)
	if (locale === "pt") return pt_profile_stat_helpful_line(inputs)
	if (locale === "ru") return ru_profile_stat_helpful_line(inputs)
	if (locale === "sv") return sv_profile_stat_helpful_line(inputs)
	if (locale === "tr") return tr_profile_stat_helpful_line(inputs)
	if (locale === "zh") return zh_profile_stat_helpful_line(inputs)
	if (locale === "ja") return ja_profile_stat_helpful_line(inputs)
	return en_profile_stat_helpful_line(inputs)
});
