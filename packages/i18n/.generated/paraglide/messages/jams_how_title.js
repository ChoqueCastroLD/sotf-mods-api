/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_TitleInputs */

const en_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How a jam works`)
};

const es_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo funciona un jam`)
};

const de_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So funktioniert ein Jam`)
};

const fr_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment fonctionne un jam`)
};

const it_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come funziona un jam`)
};

const nl_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe een jam werkt`)
};

const pl_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak działa jam`)
};

const pt_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como funciona um jam`)
};

const ru_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как проходит джем`)
};

const sv_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så fungerar en jam`)
};

const tr_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam nasıl işler`)
};

const zh_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 如何进行`)
};

const ja_jams_how_title = /** @type {(inputs: Jams_How_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムの流れ`)
};

/**
* | output |
* | --- |
* | "How a jam works" |
*
* @param {Jams_How_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_title = /** @type {((inputs?: Jams_How_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_title(inputs)
	if (locale === "de") return de_jams_how_title(inputs)
	if (locale === "fr") return fr_jams_how_title(inputs)
	if (locale === "it") return it_jams_how_title(inputs)
	if (locale === "nl") return nl_jams_how_title(inputs)
	if (locale === "pl") return pl_jams_how_title(inputs)
	if (locale === "pt") return pt_jams_how_title(inputs)
	if (locale === "ru") return ru_jams_how_title(inputs)
	if (locale === "sv") return sv_jams_how_title(inputs)
	if (locale === "tr") return tr_jams_how_title(inputs)
	if (locale === "zh") return zh_jams_how_title(inputs)
	if (locale === "ja") return ja_jams_how_title(inputs)
	return en_jams_how_title(inputs)
});
