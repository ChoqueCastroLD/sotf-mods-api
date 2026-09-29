/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Site_NameInputs */

const en_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const es_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const de_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const fr_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const it_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const nl_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const pl_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const pt_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const ru_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const sv_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const tr_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const zh_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

const ja_meta_site_name = /** @type {(inputs: Meta_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods`)
};

/**
* | output |
* | --- |
* | "SOTF Mods" |
*
* @param {Meta_Site_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_site_name = /** @type {((inputs?: Meta_Site_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Site_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_site_name(inputs)
	if (locale === "de") return de_meta_site_name(inputs)
	if (locale === "fr") return fr_meta_site_name(inputs)
	if (locale === "it") return it_meta_site_name(inputs)
	if (locale === "nl") return nl_meta_site_name(inputs)
	if (locale === "pl") return pl_meta_site_name(inputs)
	if (locale === "pt") return pt_meta_site_name(inputs)
	if (locale === "ru") return ru_meta_site_name(inputs)
	if (locale === "sv") return sv_meta_site_name(inputs)
	if (locale === "tr") return tr_meta_site_name(inputs)
	if (locale === "zh") return zh_meta_site_name(inputs)
	if (locale === "ja") return ja_meta_site_name(inputs)
	return en_meta_site_name(inputs)
});
