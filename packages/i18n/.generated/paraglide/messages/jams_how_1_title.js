/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_1_TitleInputs */

const en_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The theme drops`)
};

const es_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se revela el tema`)
};

const de_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Thema fällt`)
};

const fr_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le thème tombe`)
};

const it_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arriva il tema`)
};

const nl_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het thema valt`)
};

const pl_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat zostaje ujawniony`)
};

const pt_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tema é revelado`)
};

const ru_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема объявлена`)
};

const sv_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat avslöjas`)
};

const tr_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema açıklanır`)
};

const zh_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公布主题`)
};

const ja_jams_how_1_title = /** @type {(inputs: Jams_How_1_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマ発表`)
};

/**
* | output |
* | --- |
* | "The theme drops" |
*
* @param {Jams_How_1_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_1_title = /** @type {((inputs?: Jams_How_1_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_1_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_1_title(inputs)
	if (locale === "de") return de_jams_how_1_title(inputs)
	if (locale === "fr") return fr_jams_how_1_title(inputs)
	if (locale === "it") return it_jams_how_1_title(inputs)
	if (locale === "nl") return nl_jams_how_1_title(inputs)
	if (locale === "pl") return pl_jams_how_1_title(inputs)
	if (locale === "pt") return pt_jams_how_1_title(inputs)
	if (locale === "ru") return ru_jams_how_1_title(inputs)
	if (locale === "sv") return sv_jams_how_1_title(inputs)
	if (locale === "tr") return tr_jams_how_1_title(inputs)
	if (locale === "zh") return zh_jams_how_1_title(inputs)
	if (locale === "ja") return ja_jams_how_1_title(inputs)
	return en_jams_how_1_title(inputs)
});
