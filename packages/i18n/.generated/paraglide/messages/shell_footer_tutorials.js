/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_TutorialsInputs */

const en_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A starting guide on how to make mods using RedLoader`)
};

const es_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una guía de inicio sobre cómo hacer mods usando RedLoader`)
};

const de_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Einstiegsleitfaden zur Erstellung von Mods mit RedLoader`)
};

const fr_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide de démarrage sur la création de mods avec RedLoader`)
};

const it_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una guida di avvio su come creare mod utilizzando RedLoader`)
};

const nl_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een startgids over het maken van mods met behulp van RedLoader`)
};

const pl_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przewodnik dla początkujących w tworzeniu modów za pomocą RedLoader`)
};

const pt_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um guia inicial sobre como fazer mods usando o RedLoader`)
};

const ru_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Начальное руководство по созданию модов с использованием RedLoader`)
};

const sv_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En startguide om hur man gör mods med hjälp av RedLoader`)
};

const tr_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader kullanarak mod yapmaya başlama kılavuzu`)
};

const zh_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于如何使用 RedLoader 制作模组的入门指南`)
};

const ja_shell_footer_tutorials = /** @type {(inputs: Shell_Footer_TutorialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader を使った MOD 作成の入門ガイド`)
};

/**
* | output |
* | --- |
* | "A starting guide on how to make mods using RedLoader" |
*
* @param {Shell_Footer_TutorialsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_tutorials = /** @type {((inputs?: Shell_Footer_TutorialsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_TutorialsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_tutorials(inputs)
	if (locale === "de") return de_shell_footer_tutorials(inputs)
	if (locale === "fr") return fr_shell_footer_tutorials(inputs)
	if (locale === "it") return it_shell_footer_tutorials(inputs)
	if (locale === "nl") return nl_shell_footer_tutorials(inputs)
	if (locale === "pl") return pl_shell_footer_tutorials(inputs)
	if (locale === "pt") return pt_shell_footer_tutorials(inputs)
	if (locale === "ru") return ru_shell_footer_tutorials(inputs)
	if (locale === "sv") return sv_shell_footer_tutorials(inputs)
	if (locale === "tr") return tr_shell_footer_tutorials(inputs)
	if (locale === "zh") return zh_shell_footer_tutorials(inputs)
	if (locale === "ja") return ja_shell_footer_tutorials(inputs)
	return en_shell_footer_tutorials(inputs)
});
