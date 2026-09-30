/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ builds: NonNullable<unknown> }} Basecamp_Versions_TestedInputs */

const en_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tested on: ${i?.builds}`)
};

const es_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Probado en: ${i?.builds}`)
};

const de_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Getestet mit: ${i?.builds}`)
};

const fr_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testé sur : ${i?.builds}`)
};

const it_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testata su: ${i?.builds}`)
};

const nl_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Getest op: ${i?.builds}`)
};

const pl_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testowano na: ${i?.builds}`)
};

const pt_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testado em: ${i?.builds}`)
};

const ru_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Проверено на: ${i?.builds}`)
};

const sv_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testad på: ${i?.builds}`)
};

const tr_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Test edildiği yapılar: ${i?.builds}`)
};

const zh_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已测试：${i?.builds}`)
};

const ja_basecamp_versions_tested = /** @type {(inputs: Basecamp_Versions_TestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`動作確認済み：${i?.builds}`)
};

/**
* | output |
* | --- |
* | "Tested on: {builds}" |
*
* @param {Basecamp_Versions_TestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_tested = /** @type {((inputs: Basecamp_Versions_TestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_TestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_tested(inputs)
	if (locale === "de") return de_basecamp_versions_tested(inputs)
	if (locale === "fr") return fr_basecamp_versions_tested(inputs)
	if (locale === "it") return it_basecamp_versions_tested(inputs)
	if (locale === "nl") return nl_basecamp_versions_tested(inputs)
	if (locale === "pl") return pl_basecamp_versions_tested(inputs)
	if (locale === "pt") return pt_basecamp_versions_tested(inputs)
	if (locale === "ru") return ru_basecamp_versions_tested(inputs)
	if (locale === "sv") return sv_basecamp_versions_tested(inputs)
	if (locale === "tr") return tr_basecamp_versions_tested(inputs)
	if (locale === "zh") return zh_basecamp_versions_tested(inputs)
	if (locale === "ja") return ja_basecamp_versions_tested(inputs)
	return en_basecamp_versions_tested(inputs)
});
