/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Link_OtherInputs */

const en_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
};

const es_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro`)
};

const de_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonstiges`)
};

const fr_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre`)
};

const it_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anders`)
};

const pl_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne`)
};

const pt_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro`)
};

const ru_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другое`)
};

const sv_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annat`)
};

const tr_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer`)
};

const zh_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他`)
};

const ja_settings_link_other = /** @type {(inputs: Settings_Link_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "Other" |
*
* @param {Settings_Link_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_link_other = /** @type {((inputs?: Settings_Link_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Link_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_link_other(inputs)
	if (locale === "de") return de_settings_link_other(inputs)
	if (locale === "fr") return fr_settings_link_other(inputs)
	if (locale === "it") return it_settings_link_other(inputs)
	if (locale === "nl") return nl_settings_link_other(inputs)
	if (locale === "pl") return pl_settings_link_other(inputs)
	if (locale === "pt") return pt_settings_link_other(inputs)
	if (locale === "ru") return ru_settings_link_other(inputs)
	if (locale === "sv") return sv_settings_link_other(inputs)
	if (locale === "tr") return tr_settings_link_other(inputs)
	if (locale === "zh") return zh_settings_link_other(inputs)
	if (locale === "ja") return ja_settings_link_other(inputs)
	return en_settings_link_other(inputs)
});
