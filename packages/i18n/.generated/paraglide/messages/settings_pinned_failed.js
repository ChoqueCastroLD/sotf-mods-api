/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Pinned_FailedInputs */

const en_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mods didn’t load.`)
};

const es_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus mods no se han cargado.`)
};

const de_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mods konnten nicht geladen werden.`)
};

const fr_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mods n’ont pas pu être chargés.`)
};

const it_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare le tue mod.`)
};

const nl_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mods konden niet worden geladen.`)
};

const pl_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać twoich modów.`)
};

const pt_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar seus mods.`)
};

const ru_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить ваши моды.`)
};

const sv_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina moddar kunde inte laddas.`)
};

const tr_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modların yüklenemedi.`)
};

const zh_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载你的模组。`)
};

const ja_settings_pinned_failed = /** @type {(inputs: Settings_Pinned_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Your mods didn’t load." |
*
* @param {Settings_Pinned_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_pinned_failed = /** @type {((inputs?: Settings_Pinned_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Pinned_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_pinned_failed(inputs)
	if (locale === "de") return de_settings_pinned_failed(inputs)
	if (locale === "fr") return fr_settings_pinned_failed(inputs)
	if (locale === "it") return it_settings_pinned_failed(inputs)
	if (locale === "nl") return nl_settings_pinned_failed(inputs)
	if (locale === "pl") return pl_settings_pinned_failed(inputs)
	if (locale === "pt") return pt_settings_pinned_failed(inputs)
	if (locale === "ru") return ru_settings_pinned_failed(inputs)
	if (locale === "sv") return sv_settings_pinned_failed(inputs)
	if (locale === "tr") return tr_settings_pinned_failed(inputs)
	if (locale === "zh") return zh_settings_pinned_failed(inputs)
	if (locale === "ja") return ja_settings_pinned_failed(inputs)
	return en_settings_pinned_failed(inputs)
});
