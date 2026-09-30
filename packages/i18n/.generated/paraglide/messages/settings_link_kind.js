/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Link_KindInputs */

const en_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const es_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const de_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Art`)
};

const fr_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const it_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const nl_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soort`)
};

const pl_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rodzaj`)
};

const pt_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const ru_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип`)
};

const sv_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const tr_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tür`)
};

const zh_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型`)
};

const ja_settings_link_kind = /** @type {(inputs: Settings_Link_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類`)
};

/**
* | output |
* | --- |
* | "Type" |
*
* @param {Settings_Link_KindInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_link_kind = /** @type {((inputs?: Settings_Link_KindInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Link_KindInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_link_kind(inputs)
	if (locale === "de") return de_settings_link_kind(inputs)
	if (locale === "fr") return fr_settings_link_kind(inputs)
	if (locale === "it") return it_settings_link_kind(inputs)
	if (locale === "nl") return nl_settings_link_kind(inputs)
	if (locale === "pl") return pl_settings_link_kind(inputs)
	if (locale === "pt") return pt_settings_link_kind(inputs)
	if (locale === "ru") return ru_settings_link_kind(inputs)
	if (locale === "sv") return sv_settings_link_kind(inputs)
	if (locale === "tr") return tr_settings_link_kind(inputs)
	if (locale === "zh") return zh_settings_link_kind(inputs)
	if (locale === "ja") return ja_settings_link_kind(inputs)
	return en_settings_link_kind(inputs)
});
