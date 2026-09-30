/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_RecategorizeInputs */

const en_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorize`)
};

const es_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorizar`)
};

const de_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu kategorisieren`)
};

const fr_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recatégoriser`)
};

const it_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricategorizza`)
};

const nl_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hercategoriseren`)
};

const pl_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiana kategorii`)
};

const pt_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorizar`)
};

const ru_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смена категорий`)
};

const sv_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorisera om`)
};

const tr_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden kategorilendir`)
};

const zh_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新分类`)
};

const ja_console_nav_recategorize = /** @type {(inputs: Console_Nav_RecategorizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリの変更`)
};

/**
* | output |
* | --- |
* | "Recategorize" |
*
* @param {Console_Nav_RecategorizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_recategorize = /** @type {((inputs?: Console_Nav_RecategorizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_RecategorizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_recategorize(inputs)
	if (locale === "de") return de_console_nav_recategorize(inputs)
	if (locale === "fr") return fr_console_nav_recategorize(inputs)
	if (locale === "it") return it_console_nav_recategorize(inputs)
	if (locale === "nl") return nl_console_nav_recategorize(inputs)
	if (locale === "pl") return pl_console_nav_recategorize(inputs)
	if (locale === "pt") return pt_console_nav_recategorize(inputs)
	if (locale === "ru") return ru_console_nav_recategorize(inputs)
	if (locale === "sv") return sv_console_nav_recategorize(inputs)
	if (locale === "tr") return tr_console_nav_recategorize(inputs)
	if (locale === "zh") return zh_console_nav_recategorize(inputs)
	if (locale === "ja") return ja_console_nav_recategorize(inputs)
	return en_console_nav_recategorize(inputs)
});
