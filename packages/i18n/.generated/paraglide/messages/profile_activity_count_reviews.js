/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Profile_Activity_Count_ReviewsInputs */

const en_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} review`);
	return /** @type {LocalizedString} */ (`${count__number} reviews`)
	
};

const es_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reseña`);
	return /** @type {LocalizedString} */ (`${count__number} reseñas`)
	
};

const de_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Bewertung`);
	return /** @type {LocalizedString} */ (`${count__number} Bewertungen`)
	
};

const fr_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} avis`);
	return /** @type {LocalizedString} */ (`${count__number} avis`)
	
};

const it_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} recensione`);
	return /** @type {LocalizedString} */ (`${count__number} recensioni`)
	
};

const nl_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} review`);
	return /** @type {LocalizedString} */ (`${count__number} reviews`)
	
};

const pl_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} recenzja`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} recenzje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} recenzji`);
	return /** @type {LocalizedString} */ (`${count__number} recenzji`)
	
};

const pt_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} avaliação`);
	return /** @type {LocalizedString} */ (`${count__number} avaliações`)
	
};

const ru_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} отзыв`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} отзыва`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} отзывов`);
	return /** @type {LocalizedString} */ (`${count__number} отзыва`)
	
};

const sv_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} recension`);
	return /** @type {LocalizedString} */ (`${count__number} recensioner`)
	
};

const tr_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} inceleme`);
	return /** @type {LocalizedString} */ (`${count__number} inceleme`)
	
};

const zh_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条评价`)
};

const ja_profile_activity_count_reviews = /** @type {(inputs: Profile_Activity_Count_ReviewsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`レビュー ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} review" |
* | * | "{count__number} reviews" |
*
* @param {Profile_Activity_Count_ReviewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_count_reviews = /** @type {((inputs: Profile_Activity_Count_ReviewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Count_ReviewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_count_reviews(inputs)
	if (locale === "de") return de_profile_activity_count_reviews(inputs)
	if (locale === "fr") return fr_profile_activity_count_reviews(inputs)
	if (locale === "it") return it_profile_activity_count_reviews(inputs)
	if (locale === "nl") return nl_profile_activity_count_reviews(inputs)
	if (locale === "pl") return pl_profile_activity_count_reviews(inputs)
	if (locale === "pt") return pt_profile_activity_count_reviews(inputs)
	if (locale === "ru") return ru_profile_activity_count_reviews(inputs)
	if (locale === "sv") return sv_profile_activity_count_reviews(inputs)
	if (locale === "tr") return tr_profile_activity_count_reviews(inputs)
	if (locale === "zh") return zh_profile_activity_count_reviews(inputs)
	if (locale === "ja") return ja_profile_activity_count_reviews(inputs)
	return en_profile_activity_count_reviews(inputs)
});
