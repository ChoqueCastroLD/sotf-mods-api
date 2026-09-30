/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Number_Compact_HintInputs */

const en_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1.2K downloads`)
};

const es_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 mil descargas`)
};

const de_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 Tsd. Downloads`)
};

const fr_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 k téléchargements`)
};

const it_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 mila download`)
};

const nl_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2K downloads`)
};

const pl_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 tys. pobrań`)
};

const pt_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 mil downloads`)
};

const ru_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 тыс. загрузок`)
};

const sv_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 tn nedladdningar`)
};

const tr_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1,2 B indirme`)
};

const zh_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1.2千 次下载`)
};

const ja_settings_number_compact_hint = /** @type {(inputs: Settings_Number_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1.2千 ダウンロード`)
};

/**
* | output |
* | --- |
* | "1.2K downloads" |
*
* @param {Settings_Number_Compact_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_number_compact_hint = /** @type {((inputs?: Settings_Number_Compact_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Number_Compact_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_number_compact_hint(inputs)
	if (locale === "de") return de_settings_number_compact_hint(inputs)
	if (locale === "fr") return fr_settings_number_compact_hint(inputs)
	if (locale === "it") return it_settings_number_compact_hint(inputs)
	if (locale === "nl") return nl_settings_number_compact_hint(inputs)
	if (locale === "pl") return pl_settings_number_compact_hint(inputs)
	if (locale === "pt") return pt_settings_number_compact_hint(inputs)
	if (locale === "ru") return ru_settings_number_compact_hint(inputs)
	if (locale === "sv") return sv_settings_number_compact_hint(inputs)
	if (locale === "tr") return tr_settings_number_compact_hint(inputs)
	if (locale === "zh") return zh_settings_number_compact_hint(inputs)
	if (locale === "ja") return ja_settings_number_compact_hint(inputs)
	return en_settings_number_compact_hint(inputs)
});
