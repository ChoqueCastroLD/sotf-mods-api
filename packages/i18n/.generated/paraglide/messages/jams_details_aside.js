/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Details_AsideInputs */

const en_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam details`)
};

const es_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles del jam`)
};

const de_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam-Details`)
};

const fr_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails du jam`)
};

const it_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli del jam`)
};

const nl_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam-details`)
};

const pl_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły jamu`)
};

const pt_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes do jam`)
};

const ru_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сведения о джеме`)
};

const sv_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam-detaljer`)
};

const tr_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam ayrıntıları`)
};

const zh_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 详情`)
};

const ja_jams_details_aside = /** @type {(inputs: Jams_Details_AsideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムの詳細`)
};

/**
* | output |
* | --- |
* | "Jam details" |
*
* @param {Jams_Details_AsideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_details_aside = /** @type {((inputs?: Jams_Details_AsideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Details_AsideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_details_aside(inputs)
	if (locale === "de") return de_jams_details_aside(inputs)
	if (locale === "fr") return fr_jams_details_aside(inputs)
	if (locale === "it") return it_jams_details_aside(inputs)
	if (locale === "nl") return nl_jams_details_aside(inputs)
	if (locale === "pl") return pl_jams_details_aside(inputs)
	if (locale === "pt") return pt_jams_details_aside(inputs)
	if (locale === "ru") return ru_jams_details_aside(inputs)
	if (locale === "sv") return sv_jams_details_aside(inputs)
	if (locale === "tr") return tr_jams_details_aside(inputs)
	if (locale === "zh") return zh_jams_details_aside(inputs)
	if (locale === "ja") return ja_jams_details_aside(inputs)
	return en_jams_details_aside(inputs)
});
