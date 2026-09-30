/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Link_UrlInputs */

const en_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Address`)
};

const es_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dirección`)
};

const de_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse`)
};

const fr_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse`)
};

const it_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzo`)
};

const nl_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const pl_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const pt_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereço`)
};

const ru_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес`)
};

const sv_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adress`)
};

const tr_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const zh_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地址`)
};

const ja_settings_link_url = /** @type {(inputs: Settings_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレス`)
};

/**
* | output |
* | --- |
* | "Address" |
*
* @param {Settings_Link_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_link_url = /** @type {((inputs?: Settings_Link_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Link_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_link_url(inputs)
	if (locale === "de") return de_settings_link_url(inputs)
	if (locale === "fr") return fr_settings_link_url(inputs)
	if (locale === "it") return it_settings_link_url(inputs)
	if (locale === "nl") return nl_settings_link_url(inputs)
	if (locale === "pl") return pl_settings_link_url(inputs)
	if (locale === "pt") return pt_settings_link_url(inputs)
	if (locale === "ru") return ru_settings_link_url(inputs)
	if (locale === "sv") return sv_settings_link_url(inputs)
	if (locale === "tr") return tr_settings_link_url(inputs)
	if (locale === "zh") return zh_settings_link_url(inputs)
	if (locale === "ja") return ja_settings_link_url(inputs)
	return en_settings_link_url(inputs)
});
