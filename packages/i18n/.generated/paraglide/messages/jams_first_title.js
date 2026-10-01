/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_TitleInputs */

const en_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The first Mod Jam is on its way`)
};

const es_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El primer Mod Jam está en camino`)
};

const de_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der erste Mod Jam ist unterwegs`)
};

const fr_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le premier Mod Jam est en route`)
};

const it_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il primo Mod Jam sta arrivando`)
};

const nl_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De eerste Mod Jam is onderweg`)
};

const pl_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy Mod Jam już się zbliża`)
};

const pt_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O primeiro Mod Jam está a caminho`)
};

const ru_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый Mod Jam уже в пути`)
};

const sv_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den första Mod Jammen är på väg`)
};

const tr_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Mod Jam yolda`)
};

const zh_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首届 Mod Jam 正在路上`)
};

const ja_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の Mod Jam が近づいています`)
};

/**
* | output |
* | --- |
* | "The first Mod Jam is on its way" |
*
* @param {Jams_First_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_title = /** @type {((inputs?: Jams_First_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_title(inputs)
	if (locale === "de") return de_jams_first_title(inputs)
	if (locale === "fr") return fr_jams_first_title(inputs)
	if (locale === "it") return it_jams_first_title(inputs)
	if (locale === "nl") return nl_jams_first_title(inputs)
	if (locale === "pl") return pl_jams_first_title(inputs)
	if (locale === "pt") return pt_jams_first_title(inputs)
	if (locale === "ru") return ru_jams_first_title(inputs)
	if (locale === "sv") return sv_jams_first_title(inputs)
	if (locale === "tr") return tr_jams_first_title(inputs)
	if (locale === "zh") return zh_jams_first_title(inputs)
	if (locale === "ja") return ja_jams_first_title(inputs)
	return en_jams_first_title(inputs)
});
