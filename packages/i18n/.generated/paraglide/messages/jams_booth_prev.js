/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_PrevInputs */

const en_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous`)
};

const es_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anterior`)
};

const de_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück`)
};

const fr_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Précédent`)
};

const it_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precedente`)
};

const nl_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorige`)
};

const pl_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzednie`)
};

const pt_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anterior`)
};

const ru_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад`)
};

const sv_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående`)
};

const tr_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki`)
};

const zh_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一个`)
};

const ja_jams_booth_prev = /** @type {(inputs: Jams_Booth_PrevInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前へ`)
};

/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Jams_Booth_PrevInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_prev = /** @type {((inputs?: Jams_Booth_PrevInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_PrevInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_prev(inputs)
	if (locale === "de") return de_jams_booth_prev(inputs)
	if (locale === "fr") return fr_jams_booth_prev(inputs)
	if (locale === "it") return it_jams_booth_prev(inputs)
	if (locale === "nl") return nl_jams_booth_prev(inputs)
	if (locale === "pl") return pl_jams_booth_prev(inputs)
	if (locale === "pt") return pt_jams_booth_prev(inputs)
	if (locale === "ru") return ru_jams_booth_prev(inputs)
	if (locale === "sv") return sv_jams_booth_prev(inputs)
	if (locale === "tr") return tr_jams_booth_prev(inputs)
	if (locale === "zh") return zh_jams_booth_prev(inputs)
	if (locale === "ja") return ja_jams_booth_prev(inputs)
	return en_jams_booth_prev(inputs)
});
