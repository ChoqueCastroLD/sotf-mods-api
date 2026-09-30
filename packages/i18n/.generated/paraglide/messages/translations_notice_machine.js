/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Translations_Notice_MachineInputs */

const en_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Translated from ${i?.language}`)
};

const es_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traducido del ${i?.language}`)
};

const de_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Übersetzt aus dem Original (${i?.language})`)
};

const fr_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traduit de : ${i?.language}`)
};

const it_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tradotto da: ${i?.language}`)
};

const nl_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vertaald uit het origineel (${i?.language})`)
};

const pl_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przetłumaczono z języka: ${i?.language}`)
};

const pt_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traduzido do ${i?.language}`)
};

const ru_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переведено с языка: ${i?.language}`)
};

const sv_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Översatt från originalet (${i?.language})`)
};

const tr_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Şu dilden çevrildi: ${i?.language}`)
};

const zh_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`译自${i?.language}`)
};

const ja_translations_notice_machine = /** @type {(inputs: Translations_Notice_MachineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.language}から翻訳`)
};

/**
* | output |
* | --- |
* | "Translated from {language}" |
*
* @param {Translations_Notice_MachineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_notice_machine = /** @type {((inputs: Translations_Notice_MachineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Notice_MachineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_notice_machine(inputs)
	if (locale === "de") return de_translations_notice_machine(inputs)
	if (locale === "fr") return fr_translations_notice_machine(inputs)
	if (locale === "it") return it_translations_notice_machine(inputs)
	if (locale === "nl") return nl_translations_notice_machine(inputs)
	if (locale === "pl") return pl_translations_notice_machine(inputs)
	if (locale === "pt") return pt_translations_notice_machine(inputs)
	if (locale === "ru") return ru_translations_notice_machine(inputs)
	if (locale === "sv") return sv_translations_notice_machine(inputs)
	if (locale === "tr") return tr_translations_notice_machine(inputs)
	if (locale === "zh") return zh_translations_notice_machine(inputs)
	if (locale === "ja") return ja_translations_notice_machine(inputs)
	return en_translations_notice_machine(inputs)
});
