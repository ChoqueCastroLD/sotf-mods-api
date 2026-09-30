/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tier_TreehouseInputs */

const en_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treehouse`)
};

const es_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Casa del árbol`)
};

const de_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baumhaus`)
};

const fr_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabane dans les arbres`)
};

const it_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Casa sull’albero`)
};

const nl_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boomhut`)
};

const pl_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domek na drzewie`)
};

const pt_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Casa na árvore`)
};

const ru_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дом на дереве`)
};

const sv_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trädkoja`)
};

const tr_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ağaç ev`)
};

const zh_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`树屋`)
};

const ja_profile_tier_treehouse = /** @type {(inputs: Profile_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツリーハウス`)
};

/**
* | output |
* | --- |
* | "Treehouse" |
*
* @param {Profile_Tier_TreehouseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tier_treehouse = /** @type {((inputs?: Profile_Tier_TreehouseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tier_TreehouseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tier_treehouse(inputs)
	if (locale === "de") return de_profile_tier_treehouse(inputs)
	if (locale === "fr") return fr_profile_tier_treehouse(inputs)
	if (locale === "it") return it_profile_tier_treehouse(inputs)
	if (locale === "nl") return nl_profile_tier_treehouse(inputs)
	if (locale === "pl") return pl_profile_tier_treehouse(inputs)
	if (locale === "pt") return pt_profile_tier_treehouse(inputs)
	if (locale === "ru") return ru_profile_tier_treehouse(inputs)
	if (locale === "sv") return sv_profile_tier_treehouse(inputs)
	if (locale === "tr") return tr_profile_tier_treehouse(inputs)
	if (locale === "zh") return zh_profile_tier_treehouse(inputs)
	if (locale === "ja") return ja_profile_tier_treehouse(inputs)
	return en_profile_tier_treehouse(inputs)
});
