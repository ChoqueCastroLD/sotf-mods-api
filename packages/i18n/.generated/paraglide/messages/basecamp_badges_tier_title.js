/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Badges_Tier_TitleInputs */

const en_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator tier`)
};

const es_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rango de creador`)
};

const de_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator-Stufe`)
};

const fr_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rang de créateur`)
};

const it_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Livello da creatore`)
};

const nl_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makersniveau`)
};

const pl_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poziom twórcy`)
};

const pt_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nível de criador`)
};

const ru_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ранг создателя`)
};

const sv_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparnivå`)
};

const tr_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı seviyesi`)
};

const zh_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者等级`)
};

const ja_basecamp_badges_tier_title = /** @type {(inputs: Basecamp_Badges_Tier_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターティア`)
};

/**
* | output |
* | --- |
* | "Creator tier" |
*
* @param {Basecamp_Badges_Tier_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_tier_title = /** @type {((inputs?: Basecamp_Badges_Tier_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Tier_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_tier_title(inputs)
	if (locale === "de") return de_basecamp_badges_tier_title(inputs)
	if (locale === "fr") return fr_basecamp_badges_tier_title(inputs)
	if (locale === "it") return it_basecamp_badges_tier_title(inputs)
	if (locale === "nl") return nl_basecamp_badges_tier_title(inputs)
	if (locale === "pl") return pl_basecamp_badges_tier_title(inputs)
	if (locale === "pt") return pt_basecamp_badges_tier_title(inputs)
	if (locale === "ru") return ru_basecamp_badges_tier_title(inputs)
	if (locale === "sv") return sv_basecamp_badges_tier_title(inputs)
	if (locale === "tr") return tr_basecamp_badges_tier_title(inputs)
	if (locale === "zh") return zh_basecamp_badges_tier_title(inputs)
	if (locale === "ja") return ja_basecamp_badges_tier_title(inputs)
	return en_basecamp_badges_tier_title(inputs)
});
