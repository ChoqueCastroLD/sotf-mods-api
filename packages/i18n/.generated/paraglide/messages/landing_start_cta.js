/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_CtaInputs */

const en_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the install guide`)
};

const es_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer la guía de instalación`)
};

const de_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationsanleitung lesen`)
};

const fr_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire le guide d’installation`)
};

const it_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggi la guida all’installazione`)
};

const nl_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lees de installatiegids`)
};

const pl_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeczytaj poradnik instalacji`)
};

const pt_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler o guia de instalação`)
};

const ru_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Читать руководство по установке`)
};

const sv_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs installationsguiden`)
};

const tr_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum rehberini oku`)
};

const zh_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`阅读安装指南`)
};

const ja_landing_start_cta = /** @type {(inputs: Landing_Start_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストールガイドを読む`)
};

/**
* | output |
* | --- |
* | "Read the install guide" |
*
* @param {Landing_Start_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_cta = /** @type {((inputs?: Landing_Start_CtaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_CtaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_cta(inputs)
	if (locale === "de") return de_landing_start_cta(inputs)
	if (locale === "fr") return fr_landing_start_cta(inputs)
	if (locale === "it") return it_landing_start_cta(inputs)
	if (locale === "nl") return nl_landing_start_cta(inputs)
	if (locale === "pl") return pl_landing_start_cta(inputs)
	if (locale === "pt") return pt_landing_start_cta(inputs)
	if (locale === "ru") return ru_landing_start_cta(inputs)
	if (locale === "sv") return sv_landing_start_cta(inputs)
	if (locale === "tr") return tr_landing_start_cta(inputs)
	if (locale === "zh") return zh_landing_start_cta(inputs)
	if (locale === "ja") return ja_landing_start_cta(inputs)
	return en_landing_start_cta(inputs)
});
