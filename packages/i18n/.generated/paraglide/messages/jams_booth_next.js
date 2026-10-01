/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_NextInputs */

const en_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

const es_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente`)
};

const de_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter`)
};

const fr_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivant`)
};

const it_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Successiva`)
};

const nl_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende`)
};

const pl_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następne`)
};

const pt_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próxima`)
};

const ru_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Далее`)
};

const sv_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa`)
};

const tr_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki`)
};

const zh_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一个`)
};

const ja_jams_booth_next = /** @type {(inputs: Jams_Booth_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次へ`)
};

/**
* | output |
* | --- |
* | "Next" |
*
* @param {Jams_Booth_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_next = /** @type {((inputs?: Jams_Booth_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_next(inputs)
	if (locale === "de") return de_jams_booth_next(inputs)
	if (locale === "fr") return fr_jams_booth_next(inputs)
	if (locale === "it") return it_jams_booth_next(inputs)
	if (locale === "nl") return nl_jams_booth_next(inputs)
	if (locale === "pl") return pl_jams_booth_next(inputs)
	if (locale === "pt") return pt_jams_booth_next(inputs)
	if (locale === "ru") return ru_jams_booth_next(inputs)
	if (locale === "sv") return sv_jams_booth_next(inputs)
	if (locale === "tr") return tr_jams_booth_next(inputs)
	if (locale === "zh") return zh_jams_booth_next(inputs)
	if (locale === "ja") return ja_jams_booth_next(inputs)
	return en_jams_booth_next(inputs)
});
