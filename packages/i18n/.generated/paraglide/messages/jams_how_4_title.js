/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_4_TitleInputs */

const en_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Results`)
};

const es_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados`)
};

const de_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse`)
};

const fr_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résultats`)
};

const it_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risultati`)
};

const nl_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten`)
};

const pl_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki`)
};

const pt_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados`)
};

const ru_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Результаты`)
};

const sv_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultat`)
};

const tr_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar`)
};

const zh_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果`)
};

const ja_jams_how_4_title = /** @type {(inputs: Jams_How_4_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果`)
};

/**
* | output |
* | --- |
* | "Results" |
*
* @param {Jams_How_4_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_4_title = /** @type {((inputs?: Jams_How_4_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_4_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_4_title(inputs)
	if (locale === "de") return de_jams_how_4_title(inputs)
	if (locale === "fr") return fr_jams_how_4_title(inputs)
	if (locale === "it") return it_jams_how_4_title(inputs)
	if (locale === "nl") return nl_jams_how_4_title(inputs)
	if (locale === "pl") return pl_jams_how_4_title(inputs)
	if (locale === "pt") return pt_jams_how_4_title(inputs)
	if (locale === "ru") return ru_jams_how_4_title(inputs)
	if (locale === "sv") return sv_jams_how_4_title(inputs)
	if (locale === "tr") return tr_jams_how_4_title(inputs)
	if (locale === "zh") return zh_jams_how_4_title(inputs)
	if (locale === "ja") return ja_jams_how_4_title(inputs)
	return en_jams_how_4_title(inputs)
});
