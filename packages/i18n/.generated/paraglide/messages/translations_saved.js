/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_SavedInputs */

const en_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translation saved`)
};

const es_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducción guardada`)
};

const de_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzung gespeichert`)
};

const fr_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduction enregistrée`)
};

const it_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduzione salvata`)
};

const nl_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertaling opgeslagen`)
};

const pl_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano tłumaczenie`)
};

const pt_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tradução salva`)
};

const ru_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перевод сохранён`)
};

const sv_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättningen sparades`)
};

const tr_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviri kaydedildi`)
};

const zh_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`译文已保存`)
};

const ja_translations_saved = /** @type {(inputs: Translations_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳を保存しました`)
};

/**
* | output |
* | --- |
* | "Translation saved" |
*
* @param {Translations_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_saved = /** @type {((inputs?: Translations_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_saved(inputs)
	if (locale === "de") return de_translations_saved(inputs)
	if (locale === "fr") return fr_translations_saved(inputs)
	if (locale === "it") return it_translations_saved(inputs)
	if (locale === "nl") return nl_translations_saved(inputs)
	if (locale === "pl") return pl_translations_saved(inputs)
	if (locale === "pt") return pt_translations_saved(inputs)
	if (locale === "ru") return ru_translations_saved(inputs)
	if (locale === "sv") return sv_translations_saved(inputs)
	if (locale === "tr") return tr_translations_saved(inputs)
	if (locale === "zh") return zh_translations_saved(inputs)
	if (locale === "ja") return ja_translations_saved(inputs)
	return en_translations_saved(inputs)
});
