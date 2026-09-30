/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Number_Full_HintInputs */

const en_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,234 downloads`)
};

const es_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1234 descargas`)
};

const de_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1.234 Downloads`)
};

const fr_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 234 téléchargements`)
};

const it_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1.234 download`)
};

const nl_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1.234 downloads`)
};

const pl_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1234 pobrania`)
};

const pt_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1.234 downloads`)
};

const ru_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1234 загрузки`)
};

const sv_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 234 nedladdningar`)
};

const tr_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1.234 indirme`)
};

const zh_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,234 次下载`)
};

const ja_settings_number_full_hint = /** @type {(inputs: Settings_Number_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,234 ダウンロード`)
};

/**
* | output |
* | --- |
* | "1,234 downloads" |
*
* @param {Settings_Number_Full_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_number_full_hint = /** @type {((inputs?: Settings_Number_Full_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Number_Full_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_number_full_hint(inputs)
	if (locale === "de") return de_settings_number_full_hint(inputs)
	if (locale === "fr") return fr_settings_number_full_hint(inputs)
	if (locale === "it") return it_settings_number_full_hint(inputs)
	if (locale === "nl") return nl_settings_number_full_hint(inputs)
	if (locale === "pl") return pl_settings_number_full_hint(inputs)
	if (locale === "pt") return pt_settings_number_full_hint(inputs)
	if (locale === "ru") return ru_settings_number_full_hint(inputs)
	if (locale === "sv") return sv_settings_number_full_hint(inputs)
	if (locale === "tr") return tr_settings_number_full_hint(inputs)
	if (locale === "zh") return zh_settings_number_full_hint(inputs)
	if (locale === "ja") return ja_settings_number_full_hint(inputs)
	return en_settings_number_full_hint(inputs)
});
