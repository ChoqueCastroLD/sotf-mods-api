/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Creators_LegendsInputs */

const en_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legends`)
};

const es_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyendas`)
};

const de_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legenden`)
};

const fr_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Légendes`)
};

const it_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggende`)
};

const nl_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legendes`)
};

const pl_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legendy`)
};

const pt_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lendas`)
};

const ru_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Легенды`)
};

const sv_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legender`)
};

const tr_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Efsaneler`)
};

const zh_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`传奇`)
};

const ja_landing_creators_legends = /** @type {(inputs: Landing_Creators_LegendsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レジェンド`)
};

/**
* | output |
* | --- |
* | "Legends" |
*
* @param {Landing_Creators_LegendsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_legends = /** @type {((inputs?: Landing_Creators_LegendsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_LegendsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_legends(inputs)
	if (locale === "de") return de_landing_creators_legends(inputs)
	if (locale === "fr") return fr_landing_creators_legends(inputs)
	if (locale === "it") return it_landing_creators_legends(inputs)
	if (locale === "nl") return nl_landing_creators_legends(inputs)
	if (locale === "pl") return pl_landing_creators_legends(inputs)
	if (locale === "pt") return pt_landing_creators_legends(inputs)
	if (locale === "ru") return ru_landing_creators_legends(inputs)
	if (locale === "sv") return sv_landing_creators_legends(inputs)
	if (locale === "tr") return tr_landing_creators_legends(inputs)
	if (locale === "zh") return zh_landing_creators_legends(inputs)
	if (locale === "ja") return ja_landing_creators_legends(inputs)
	return en_landing_creators_legends(inputs)
});
