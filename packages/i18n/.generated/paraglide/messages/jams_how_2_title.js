/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_2_TitleInputs */

const en_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea`)
};

const de_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bauen`)
};

const fr_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez`)
};

const it_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea`)
};

const nl_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouw`)
};

const pl_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórz`)
};

const pt_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie`)
};

const ru_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создавайте`)
};

const sv_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygg`)
};

const tr_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yap`)
};

const zh_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制作`)
};

const ja_jams_how_2_title = /** @type {(inputs: Jams_How_2_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制作`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Jams_How_2_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_2_title = /** @type {((inputs?: Jams_How_2_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_2_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_2_title(inputs)
	if (locale === "de") return de_jams_how_2_title(inputs)
	if (locale === "fr") return fr_jams_how_2_title(inputs)
	if (locale === "it") return it_jams_how_2_title(inputs)
	if (locale === "nl") return nl_jams_how_2_title(inputs)
	if (locale === "pl") return pl_jams_how_2_title(inputs)
	if (locale === "pt") return pt_jams_how_2_title(inputs)
	if (locale === "ru") return ru_jams_how_2_title(inputs)
	if (locale === "sv") return sv_jams_how_2_title(inputs)
	if (locale === "tr") return tr_jams_how_2_title(inputs)
	if (locale === "zh") return zh_jams_how_2_title(inputs)
	if (locale === "ja") return ja_jams_how_2_title(inputs)
	return en_jams_how_2_title(inputs)
});
