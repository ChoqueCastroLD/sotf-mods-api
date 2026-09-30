/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Show_TranslationInputs */

const en_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show translation`)
};

const es_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver traducción`)
};

const de_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzung anzeigen`)
};

const fr_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir la traduction`)
};

const it_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra traduzione`)
};

const nl_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertaling tonen`)
};

const pl_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż tłumaczenie`)
};

const pt_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver tradução`)
};

const ru_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать перевод`)
};

const sv_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa översättningen`)
};

const tr_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviriyi göster`)
};

const zh_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示译文`)
};

const ja_translations_show_translation = /** @type {(inputs: Translations_Show_TranslationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳を表示`)
};

/**
* | output |
* | --- |
* | "Show translation" |
*
* @param {Translations_Show_TranslationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_show_translation = /** @type {((inputs?: Translations_Show_TranslationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Show_TranslationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_show_translation(inputs)
	if (locale === "de") return de_translations_show_translation(inputs)
	if (locale === "fr") return fr_translations_show_translation(inputs)
	if (locale === "it") return it_translations_show_translation(inputs)
	if (locale === "nl") return nl_translations_show_translation(inputs)
	if (locale === "pl") return pl_translations_show_translation(inputs)
	if (locale === "pt") return pt_translations_show_translation(inputs)
	if (locale === "ru") return ru_translations_show_translation(inputs)
	if (locale === "sv") return sv_translations_show_translation(inputs)
	if (locale === "tr") return tr_translations_show_translation(inputs)
	if (locale === "zh") return zh_translations_show_translation(inputs)
	if (locale === "ja") return ja_translations_show_translation(inputs)
	return en_translations_show_translation(inputs)
});
