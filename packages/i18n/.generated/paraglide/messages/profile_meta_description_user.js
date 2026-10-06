/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, reviews: NonNullable<unknown> }} Profile_Meta_Description_UserInputs */

const en_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("en", i?.reviews, {});
	const reviews__number = registry.number("en", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} on SOTF Mods, the Sons of the Forest modding community: ${reviews__number} review.`);
	return /** @type {LocalizedString} */ (`${i?.name} on SOTF Mods, the Sons of the Forest modding community: ${reviews__number} reviews.`)
	
};

const es_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("es", i?.reviews, {});
	const reviews__number = registry.number("es", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} en SOTF Mods, la comunidad de mods de Sons of the Forest: ${reviews__number} reseña.`);
	return /** @type {LocalizedString} */ (`${i?.name} en SOTF Mods, la comunidad de mods de Sons of the Forest: ${reviews__number} reseñas.`)
	
};

const de_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("de", i?.reviews, {});
	const reviews__number = registry.number("de", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} auf SOTF Mods, der Modding-Community für Sons of the Forest: ${reviews__number} Bewertung.`);
	return /** @type {LocalizedString} */ (`${i?.name} auf SOTF Mods, der Modding-Community für Sons of the Forest: ${reviews__number} Bewertungen.`)
	
};

const fr_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("fr", i?.reviews, {});
	const reviews__number = registry.number("fr", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} sur SOTF Mods, la communauté de modding de Sons of the Forest : ${reviews__number} avis.`);
	return /** @type {LocalizedString} */ (`${i?.name} sur SOTF Mods, la communauté de modding de Sons of the Forest : ${reviews__number} avis.`)
	
};

const it_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("it", i?.reviews, {});
	const reviews__number = registry.number("it", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} su SOTF Mods, la community di modding di Sons of the Forest: ${reviews__number} recensione.`);
	return /** @type {LocalizedString} */ (`${i?.name} su SOTF Mods, la community di modding di Sons of the Forest: ${reviews__number} recensioni.`)
	
};

const nl_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("nl", i?.reviews, {});
	const reviews__number = registry.number("nl", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} op SOTF Mods, de moddingcommunity van Sons of the Forest: ${reviews__number} review.`);
	return /** @type {LocalizedString} */ (`${i?.name} op SOTF Mods, de moddingcommunity van Sons of the Forest: ${reviews__number} reviews.`)
	
};

const pl_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("pl", i?.reviews, {});
	const reviews__number = registry.number("pl", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzja.`);
	if (reviews__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzje.`);
	if (reviews__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji.`);
	return /** @type {LocalizedString} */ (`${i?.name} na SOTF Mods, w społeczności moderskiej Sons of the Forest: ${reviews__number} recenzji.`)
	
};

const pt_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("pt", i?.reviews, {});
	const reviews__number = registry.number("pt", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} no SOTF Mods, a comunidade de mods de Sons of the Forest: ${reviews__number} avaliação.`);
	return /** @type {LocalizedString} */ (`${i?.name} no SOTF Mods, a comunidade de mods de Sons of the Forest: ${reviews__number} avaliações.`)
	
};

const ru_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("ru", i?.reviews, {});
	const reviews__number = registry.number("ru", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыв.`);
	if (reviews__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва.`);
	if (reviews__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзывов.`);
	return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods, в сообществе моддинга Sons of the Forest: ${reviews__number} отзыва.`)
	
};

const sv_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("sv", i?.reviews, {});
	const reviews__number = registry.number("sv", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} på SOTF Mods, moddinggemenskapen för Sons of the Forest: ${reviews__number} recension.`);
	return /** @type {LocalizedString} */ (`${i?.name} på SOTF Mods, moddinggemenskapen för Sons of the Forest: ${reviews__number} recensioner.`)
	
};

const tr_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {const reviews__plural = registry.plural("tr", i?.reviews, {});
	const reviews__number = registry.number("tr", i?.reviews, {});
	if (reviews__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest mod topluluğu SOTF Mods’ta: ${reviews__number} inceleme.`);
	return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest mod topluluğu SOTF Mods’ta: ${reviews__number} inceleme.`)
	
};

const zh_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {
	const reviews__plural = registry.plural("zh", i?.reviews, {});
	const reviews__number = registry.number("zh", i?.reviews, {});return /** @type {LocalizedString} */ (`${i?.name} 在 SOTF Mods（Sons of the Forest 模组社区）：${reviews__number} 条评价。`)
};

const ja_profile_meta_description_user = /** @type {(inputs: Profile_Meta_Description_UserInputs) => LocalizedString} */ (i) => {
	const reviews__plural = registry.plural("ja", i?.reviews, {});
	const reviews__number = registry.number("ja", i?.reviews, {});return /** @type {LocalizedString} */ (`Sons of the Forest の MOD コミュニティ SOTF Mods の ${i?.name}：レビュー ${reviews__number} 件。`)
};

/**
* | reviews__plural | output |
* | --- | --- |
* | "one" | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} review." |
* | * | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} reviews." |
*
* @param {Profile_Meta_Description_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_meta_description_user = /** @type {((inputs: Profile_Meta_Description_UserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Description_UserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_meta_description_user(inputs)
	if (locale === "de") return de_profile_meta_description_user(inputs)
	if (locale === "fr") return fr_profile_meta_description_user(inputs)
	if (locale === "it") return it_profile_meta_description_user(inputs)
	if (locale === "nl") return nl_profile_meta_description_user(inputs)
	if (locale === "pl") return pl_profile_meta_description_user(inputs)
	if (locale === "pt") return pt_profile_meta_description_user(inputs)
	if (locale === "ru") return ru_profile_meta_description_user(inputs)
	if (locale === "sv") return sv_profile_meta_description_user(inputs)
	if (locale === "tr") return tr_profile_meta_description_user(inputs)
	if (locale === "zh") return zh_profile_meta_description_user(inputs)
	if (locale === "ja") return ja_profile_meta_description_user(inputs)
	return en_profile_meta_description_user(inputs)
});
