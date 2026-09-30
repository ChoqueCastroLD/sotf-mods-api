/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Field_UrlInputs */

const en_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release page`)
};

const es_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página de la versión`)
};

const de_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionsseite`)
};

const fr_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page de la version`)
};

const it_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina della versione`)
};

const nl_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releasepagina`)
};

const pl_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona wydania`)
};

const pt_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página da versão`)
};

const ru_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница версии`)
};

const sv_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionssida`)
};

const tr_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm sayfası`)
};

const zh_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布页面`)
};

const ja_admin_eco_field_url = /** @type {(inputs: Admin_Eco_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリースページ`)
};

/**
* | output |
* | --- |
* | "Release page" |
*
* @param {Admin_Eco_Field_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_field_url = /** @type {((inputs?: Admin_Eco_Field_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Field_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_field_url(inputs)
	if (locale === "de") return de_admin_eco_field_url(inputs)
	if (locale === "fr") return fr_admin_eco_field_url(inputs)
	if (locale === "it") return it_admin_eco_field_url(inputs)
	if (locale === "nl") return nl_admin_eco_field_url(inputs)
	if (locale === "pl") return pl_admin_eco_field_url(inputs)
	if (locale === "pt") return pt_admin_eco_field_url(inputs)
	if (locale === "ru") return ru_admin_eco_field_url(inputs)
	if (locale === "sv") return sv_admin_eco_field_url(inputs)
	if (locale === "tr") return tr_admin_eco_field_url(inputs)
	if (locale === "zh") return zh_admin_eco_field_url(inputs)
	if (locale === "ja") return ja_admin_eco_field_url(inputs)
	return en_admin_eco_field_url(inputs)
});
