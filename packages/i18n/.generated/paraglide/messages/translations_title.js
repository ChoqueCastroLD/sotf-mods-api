/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_TitleInputs */

const en_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translations`)
};

const es_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducciones`)
};

const de_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzungen`)
};

const fr_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traductions`)
};

const it_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduzioni`)
};

const nl_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertalingen`)
};

const pl_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tłumaczenia`)
};

const pt_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduções`)
};

const ru_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переводы`)
};

const sv_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättningar`)
};

const tr_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviriler`)
};

const zh_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻译`)
};

const ja_translations_title = /** @type {(inputs: Translations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳`)
};

/**
* | output |
* | --- |
* | "Translations" |
*
* @param {Translations_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_title = /** @type {((inputs?: Translations_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_title(inputs)
	if (locale === "de") return de_translations_title(inputs)
	if (locale === "fr") return fr_translations_title(inputs)
	if (locale === "it") return it_translations_title(inputs)
	if (locale === "nl") return nl_translations_title(inputs)
	if (locale === "pl") return pl_translations_title(inputs)
	if (locale === "pt") return pt_translations_title(inputs)
	if (locale === "ru") return ru_translations_title(inputs)
	if (locale === "sv") return sv_translations_title(inputs)
	if (locale === "tr") return tr_translations_title(inputs)
	if (locale === "zh") return zh_translations_title(inputs)
	if (locale === "ja") return ja_translations_title(inputs)
	return en_translations_title(inputs)
});
