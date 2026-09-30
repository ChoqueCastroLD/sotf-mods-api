/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_LabelInputs */

const en_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner`)
};

const es_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner`)
};

const de_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner`)
};

const fr_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bannière`)
};

const it_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner`)
};

const nl_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner`)
};

const pl_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baner`)
};

const pt_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner`)
};

const ru_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Баннер`)
};

const sv_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner`)
};

const tr_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afiş`)
};

const zh_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`横幅`)
};

const ja_settings_banner_label = /** @type {(inputs: Settings_Banner_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バナー`)
};

/**
* | output |
* | --- |
* | "Banner" |
*
* @param {Settings_Banner_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_label = /** @type {((inputs?: Settings_Banner_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_label(inputs)
	if (locale === "de") return de_settings_banner_label(inputs)
	if (locale === "fr") return fr_settings_banner_label(inputs)
	if (locale === "it") return it_settings_banner_label(inputs)
	if (locale === "nl") return nl_settings_banner_label(inputs)
	if (locale === "pl") return pl_settings_banner_label(inputs)
	if (locale === "pt") return pt_settings_banner_label(inputs)
	if (locale === "ru") return ru_settings_banner_label(inputs)
	if (locale === "sv") return sv_settings_banner_label(inputs)
	if (locale === "tr") return tr_settings_banner_label(inputs)
	if (locale === "zh") return zh_settings_banner_label(inputs)
	if (locale === "ja") return ja_settings_banner_label(inputs)
	return en_settings_banner_label(inputs)
});
