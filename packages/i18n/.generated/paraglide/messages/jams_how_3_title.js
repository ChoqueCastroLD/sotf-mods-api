/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_3_TitleInputs */

const en_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote`)
};

const es_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vota`)
};

const de_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimme ab`)
};

const fr_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votez`)
};

const it_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vota`)
};

const nl_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem`)
};

const pl_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosuj`)
};

const pt_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote`)
};

const ru_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голосуйте`)
};

const sv_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rösta`)
};

const tr_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy ver`)
};

const zh_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票`)
};

const ja_jams_how_3_title = /** @type {(inputs: Jams_How_3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票`)
};

/**
* | output |
* | --- |
* | "Vote" |
*
* @param {Jams_How_3_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_3_title = /** @type {((inputs?: Jams_How_3_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_3_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_3_title(inputs)
	if (locale === "de") return de_jams_how_3_title(inputs)
	if (locale === "fr") return fr_jams_how_3_title(inputs)
	if (locale === "it") return it_jams_how_3_title(inputs)
	if (locale === "nl") return nl_jams_how_3_title(inputs)
	if (locale === "pl") return pl_jams_how_3_title(inputs)
	if (locale === "pt") return pt_jams_how_3_title(inputs)
	if (locale === "ru") return ru_jams_how_3_title(inputs)
	if (locale === "sv") return sv_jams_how_3_title(inputs)
	if (locale === "tr") return tr_jams_how_3_title(inputs)
	if (locale === "zh") return zh_jams_how_3_title(inputs)
	if (locale === "ja") return ja_jams_how_3_title(inputs)
	return en_jams_how_3_title(inputs)
});
