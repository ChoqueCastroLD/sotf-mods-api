/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_WelcomeInputs */

const en_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day 1 on the island. Welcome, survivor.`)
};

const es_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día 1 en la isla. Bienvenido, superviviente.`)
};

const de_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag 1 auf der Insel. Willkommen, Überlebender.`)
};

const fr_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour 1 sur l’île. Bienvenue, survivant.`)
};

const it_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno 1 sull’isola. Benvenuto, sopravvissuto.`)
};

const nl_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 op het eiland. Welkom, overlevende.`)
};

const pl_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień 1 na wyspie. Witaj, ocalały.`)
};

const pt_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia 1 na ilha. Boas-vindas, sobrevivente.`)
};

const ru_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День 1 на острове. Добро пожаловать, выживший.`)
};

const sv_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 på ön. Välkommen, överlevare.`)
};

const tr_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adada 1. gün. Hoş geldin, hayatta kalan.`)
};

const zh_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登岛第 1 天。欢迎你，幸存者。`)
};

const ja_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島で 1 日目。ようこそ、サバイバー。`)
};

/**
* | output |
* | --- |
* | "Day 1 on the island. Welcome, survivor." |
*
* @param {Common_WelcomeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_welcome = /** @type {((inputs?: Common_WelcomeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_WelcomeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_welcome(inputs)
	if (locale === "de") return de_common_welcome(inputs)
	if (locale === "fr") return fr_common_welcome(inputs)
	if (locale === "it") return it_common_welcome(inputs)
	if (locale === "nl") return nl_common_welcome(inputs)
	if (locale === "pl") return pl_common_welcome(inputs)
	if (locale === "pt") return pt_common_welcome(inputs)
	if (locale === "ru") return ru_common_welcome(inputs)
	if (locale === "sv") return sv_common_welcome(inputs)
	if (locale === "tr") return tr_common_welcome(inputs)
	if (locale === "zh") return zh_common_welcome(inputs)
	if (locale === "ja") return ja_common_welcome(inputs)
	return en_common_welcome(inputs)
});
