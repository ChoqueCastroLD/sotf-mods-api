/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Channel_Beta_HintInputs */

const en_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For testers who want the newest changes.`)
};

const es_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para quienes quieren probar lo más nuevo.`)
};

const de_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für Tester, die die neuesten Änderungen wollen.`)
};

const fr_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour les testeurs qui veulent les dernières nouveautés.`)
};

const it_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per i tester che vogliono le ultime novità.`)
};

const nl_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor testers die de nieuwste wijzigingen willen.`)
};

const pl_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla testerów, którzy chcą najnowszych zmian.`)
};

const pt_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para quem quer testar as novidades.`)
};

const ru_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для тестировщиков, которым нужно самое новое.`)
};

const sv_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För testare som vill ha de senaste ändringarna.`)
};

const tr_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni değişiklikleri isteyen test edenler için.`)
};

const zh_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`面向想尝鲜的测试者。`)
};

const ja_upload_channel_beta_hint = /** @type {(inputs: Upload_Channel_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新の変更を試したいテスター向け。`)
};

/**
* | output |
* | --- |
* | "For testers who want the newest changes." |
*
* @param {Upload_Channel_Beta_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_channel_beta_hint = /** @type {((inputs?: Upload_Channel_Beta_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Channel_Beta_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_channel_beta_hint(inputs)
	if (locale === "de") return de_upload_channel_beta_hint(inputs)
	if (locale === "fr") return fr_upload_channel_beta_hint(inputs)
	if (locale === "it") return it_upload_channel_beta_hint(inputs)
	if (locale === "nl") return nl_upload_channel_beta_hint(inputs)
	if (locale === "pl") return pl_upload_channel_beta_hint(inputs)
	if (locale === "pt") return pt_upload_channel_beta_hint(inputs)
	if (locale === "ru") return ru_upload_channel_beta_hint(inputs)
	if (locale === "sv") return sv_upload_channel_beta_hint(inputs)
	if (locale === "tr") return tr_upload_channel_beta_hint(inputs)
	if (locale === "zh") return zh_upload_channel_beta_hint(inputs)
	if (locale === "ja") return ja_upload_channel_beta_hint(inputs)
	return en_upload_channel_beta_hint(inputs)
});
