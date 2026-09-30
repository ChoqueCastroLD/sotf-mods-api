/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Mp_YesInputs */

const en_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supports multiplayer`)
};

const es_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con multijugador`)
};

const de_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit Mehrspieler`)
};

const fr_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avec multijoueur`)
};

const it_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con multigiocatore`)
};

const nl_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met multiplayer`)
};

const pl_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z trybem wieloosobowym`)
};

const pt_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Com multijogador`)
};

const ru_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С мультиплеером`)
};

const sv_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Med flerspelare`)
};

const tr_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu destekli`)
};

const zh_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持多人`)
};

const ja_cmdk_mp_yes = /** @type {(inputs: Cmdk_Mp_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ対応`)
};

/**
* | output |
* | --- |
* | "Supports multiplayer" |
*
* @param {Cmdk_Mp_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_mp_yes = /** @type {((inputs?: Cmdk_Mp_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Mp_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_mp_yes(inputs)
	if (locale === "de") return de_cmdk_mp_yes(inputs)
	if (locale === "fr") return fr_cmdk_mp_yes(inputs)
	if (locale === "it") return it_cmdk_mp_yes(inputs)
	if (locale === "nl") return nl_cmdk_mp_yes(inputs)
	if (locale === "pl") return pl_cmdk_mp_yes(inputs)
	if (locale === "pt") return pt_cmdk_mp_yes(inputs)
	if (locale === "ru") return ru_cmdk_mp_yes(inputs)
	if (locale === "sv") return sv_cmdk_mp_yes(inputs)
	if (locale === "tr") return tr_cmdk_mp_yes(inputs)
	if (locale === "zh") return zh_cmdk_mp_yes(inputs)
	if (locale === "ja") return ja_cmdk_mp_yes(inputs)
	return en_cmdk_mp_yes(inputs)
});
