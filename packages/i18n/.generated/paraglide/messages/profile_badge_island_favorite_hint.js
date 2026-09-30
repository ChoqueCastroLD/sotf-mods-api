/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Island_Favorite_HintInputs */

const en_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Have a mod rated 4.5 or higher with at least 20 reviews.`)
};

const es_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten un mod con una valoración de 4,5 o más y al menos 20 reseñas.`)
};

const de_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Habe einen Mod mit mindestens 4,5 Sternen und mindestens 20 Bewertungen.`)
};

const fr_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayez un mod noté 4,5 ou plus avec au moins 20 avis.`)
};

const it_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbi una mod con voto di almeno 4,5 e almeno 20 recensioni.`)
};

const nl_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heb een mod met een score van 4,5 of hoger en minstens 20 reviews.`)
};

const pl_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miej mod z oceną 4,5 lub wyższą i co najmniej 20 recenzjami.`)
};

const pt_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenha um mod com nota 4,5 ou mais e pelo menos 20 avaliações.`)
};

const ru_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Получите для мода оценку 4,5 или выше при минимум 20 отзывах.`)
};

const sv_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha en modd med betyget 4,5 eller högre och minst 20 recensioner.`)
};

const tr_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az 20 incelemesi olan ve puanı 4,5 veya üzeri bir modun olsun.`)
};

const zh_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拥有一个评分 4.5 以上且至少 20 条评价的模组。`)
};

const ja_profile_badge_island_favorite_hint = /** @type {(inputs: Profile_Badge_Island_Favorite_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価 4.5 以上・レビュー 20 件以上の MOD を持つ。`)
};

/**
* | output |
* | --- |
* | "Have a mod rated 4.5 or higher with at least 20 reviews." |
*
* @param {Profile_Badge_Island_Favorite_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_island_favorite_hint = /** @type {((inputs?: Profile_Badge_Island_Favorite_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Island_Favorite_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_island_favorite_hint(inputs)
	if (locale === "de") return de_profile_badge_island_favorite_hint(inputs)
	if (locale === "fr") return fr_profile_badge_island_favorite_hint(inputs)
	if (locale === "it") return it_profile_badge_island_favorite_hint(inputs)
	if (locale === "nl") return nl_profile_badge_island_favorite_hint(inputs)
	if (locale === "pl") return pl_profile_badge_island_favorite_hint(inputs)
	if (locale === "pt") return pt_profile_badge_island_favorite_hint(inputs)
	if (locale === "ru") return ru_profile_badge_island_favorite_hint(inputs)
	if (locale === "sv") return sv_profile_badge_island_favorite_hint(inputs)
	if (locale === "tr") return tr_profile_badge_island_favorite_hint(inputs)
	if (locale === "zh") return zh_profile_badge_island_favorite_hint(inputs)
	if (locale === "ja") return ja_profile_badge_island_favorite_hint(inputs)
	return en_profile_badge_island_favorite_hint(inputs)
});
