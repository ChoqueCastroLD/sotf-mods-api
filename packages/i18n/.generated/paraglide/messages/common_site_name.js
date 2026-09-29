/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Site_NameInputs */

const en_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const es_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const de_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const fr_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const it_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const nl_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const pl_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const pt_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const ru_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const sv_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const tr_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const zh_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const ja_common_site_name = /** @type {(inputs: Common_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

/**
* | output |
* | --- |
* | "SOTF Mods" |
*
* @param {Common_Site_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_site_name = /** @type {((inputs?: Common_Site_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Site_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_site_name(inputs)
	if (locale === "de") return de_common_site_name(inputs)
	if (locale === "fr") return fr_common_site_name(inputs)
	if (locale === "it") return it_common_site_name(inputs)
	if (locale === "nl") return nl_common_site_name(inputs)
	if (locale === "pl") return pl_common_site_name(inputs)
	if (locale === "pt") return pt_common_site_name(inputs)
	if (locale === "ru") return ru_common_site_name(inputs)
	if (locale === "sv") return sv_common_site_name(inputs)
	if (locale === "tr") return tr_common_site_name(inputs)
	if (locale === "zh") return zh_common_site_name(inputs)
	if (locale === "ja") return ja_common_site_name(inputs)
	return en_common_site_name(inputs)
});
