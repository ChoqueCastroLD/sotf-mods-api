/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_CommunityInputs */

const en_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const es_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidad`)
};

const de_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const fr_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Communauté`)
};

const it_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const nl_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const pl_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Społeczność`)
};

const pt_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidade`)
};

const ru_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщество`)
};

const sv_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemenskap`)
};

const tr_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluk`)
};

const zh_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社区`)
};

const ja_common_footer_community = /** @type {(inputs: Common_Footer_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティ`)
};

/**
* | output |
* | --- |
* | "Community" |
*
* @param {Common_Footer_CommunityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_community = /** @type {((inputs?: Common_Footer_CommunityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_CommunityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_community(inputs)
	if (locale === "de") return de_common_footer_community(inputs)
	if (locale === "fr") return fr_common_footer_community(inputs)
	if (locale === "it") return it_common_footer_community(inputs)
	if (locale === "nl") return nl_common_footer_community(inputs)
	if (locale === "pl") return pl_common_footer_community(inputs)
	if (locale === "pt") return pt_common_footer_community(inputs)
	if (locale === "ru") return ru_common_footer_community(inputs)
	if (locale === "sv") return sv_common_footer_community(inputs)
	if (locale === "tr") return tr_common_footer_community(inputs)
	if (locale === "zh") return zh_common_footer_community(inputs)
	if (locale === "ja") return ja_common_footer_community(inputs)
	return en_common_footer_community(inputs)
});
