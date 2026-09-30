/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Art_TaglineInputs */

const en_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day 1 on the island starts here.`)
};

const es_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El día 1 en la isla empieza aquí.`)
};

const de_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag 1 auf der Insel beginnt hier.`)
};

const fr_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le jour 1 sur l’île commence ici.`)
};

const it_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il giorno 1 sull’isola inizia qui.`)
};

const nl_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 op het eiland begint hier.`)
};

const pl_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień 1 na wyspie zaczyna się tutaj.`)
};

const pt_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O dia 1 na ilha começa aqui.`)
};

const ru_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День 1 на острове начинается здесь.`)
};

const sv_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 på ön börjar här.`)
};

const tr_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adada 1. gün burada başlıyor.`)
};

const zh_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登岛第 1 天，从这里开始。`)
};

const ja_auth_art_tagline = /** @type {(inputs: Auth_Art_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島での 1 日目はここから。`)
};

/**
* | output |
* | --- |
* | "Day 1 on the island starts here." |
*
* @param {Auth_Art_TaglineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_art_tagline = /** @type {((inputs?: Auth_Art_TaglineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Art_TaglineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_art_tagline(inputs)
	if (locale === "de") return de_auth_art_tagline(inputs)
	if (locale === "fr") return fr_auth_art_tagline(inputs)
	if (locale === "it") return it_auth_art_tagline(inputs)
	if (locale === "nl") return nl_auth_art_tagline(inputs)
	if (locale === "pl") return pl_auth_art_tagline(inputs)
	if (locale === "pt") return pt_auth_art_tagline(inputs)
	if (locale === "ru") return ru_auth_art_tagline(inputs)
	if (locale === "sv") return sv_auth_art_tagline(inputs)
	if (locale === "tr") return tr_auth_art_tagline(inputs)
	if (locale === "zh") return zh_auth_art_tagline(inputs)
	if (locale === "ja") return ja_auth_art_tagline(inputs)
	return en_auth_art_tagline(inputs)
});
