/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Releases_TitleInputs */

const en_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releases`)
};

const es_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones`)
};

const de_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen`)
};

const fr_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const it_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni`)
};

const nl_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releases`)
};

const pl_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydania`)
};

const pt_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões`)
};

const ru_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии`)
};

const sv_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner`)
};

const tr_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler`)
};

const zh_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本列表`)
};

const ja_admin_eco_releases_title = /** @type {(inputs: Admin_Eco_Releases_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリース`)
};

/**
* | output |
* | --- |
* | "Releases" |
*
* @param {Admin_Eco_Releases_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_releases_title = /** @type {((inputs?: Admin_Eco_Releases_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Releases_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_releases_title(inputs)
	if (locale === "de") return de_admin_eco_releases_title(inputs)
	if (locale === "fr") return fr_admin_eco_releases_title(inputs)
	if (locale === "it") return it_admin_eco_releases_title(inputs)
	if (locale === "nl") return nl_admin_eco_releases_title(inputs)
	if (locale === "pl") return pl_admin_eco_releases_title(inputs)
	if (locale === "pt") return pt_admin_eco_releases_title(inputs)
	if (locale === "ru") return ru_admin_eco_releases_title(inputs)
	if (locale === "sv") return sv_admin_eco_releases_title(inputs)
	if (locale === "tr") return tr_admin_eco_releases_title(inputs)
	if (locale === "zh") return zh_admin_eco_releases_title(inputs)
	if (locale === "ja") return ja_admin_eco_releases_title(inputs)
	return en_admin_eco_releases_title(inputs)
});
