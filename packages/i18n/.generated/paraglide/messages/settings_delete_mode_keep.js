/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Mode_KeepInputs */

const en_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep them published`)
};

const es_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantenerlos publicados`)
};

const de_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht lassen`)
};

const fr_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les garder publiés`)
};

const it_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lasciarle pubblicate`)
};

const nl_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerd laten`)
};

const pl_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zostaw je opublikowane`)
};

const pt_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantê-los publicados`)
};

const ru_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оставить опубликованными`)
};

const sv_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behåll dem publicerade`)
};

const tr_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayında bırak`)
};

const zh_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保持发布`)
};

const ja_settings_delete_mode_keep = /** @type {(inputs: Settings_Delete_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開したままにする`)
};

/**
* | output |
* | --- |
* | "Keep them published" |
*
* @param {Settings_Delete_Mode_KeepInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_mode_keep = /** @type {((inputs?: Settings_Delete_Mode_KeepInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Mode_KeepInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_mode_keep(inputs)
	if (locale === "de") return de_settings_delete_mode_keep(inputs)
	if (locale === "fr") return fr_settings_delete_mode_keep(inputs)
	if (locale === "it") return it_settings_delete_mode_keep(inputs)
	if (locale === "nl") return nl_settings_delete_mode_keep(inputs)
	if (locale === "pl") return pl_settings_delete_mode_keep(inputs)
	if (locale === "pt") return pt_settings_delete_mode_keep(inputs)
	if (locale === "ru") return ru_settings_delete_mode_keep(inputs)
	if (locale === "sv") return sv_settings_delete_mode_keep(inputs)
	if (locale === "tr") return tr_settings_delete_mode_keep(inputs)
	if (locale === "zh") return zh_settings_delete_mode_keep(inputs)
	if (locale === "ja") return ja_settings_delete_mode_keep(inputs)
	return en_settings_delete_mode_keep(inputs)
});
