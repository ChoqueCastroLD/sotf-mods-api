/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Cta_ResultsInputs */

const en_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See the podium`)
};

const es_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver el podio`)
};

const de_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podium ansehen`)
};

const fr_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir le podium`)
};

const it_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi il podio`)
};

const nl_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijk het podium`)
};

const pl_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz podium`)
};

const pt_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver o pódio`)
};

const ru_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть пьедестал`)
};

const sv_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa prispallen`)
};

const tr_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podyumu gör`)
};

const zh_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看领奖台`)
};

const ja_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表彰台を見る`)
};

/**
* | output |
* | --- |
* | "See the podium" |
*
* @param {Jams_Cta_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_cta_results = /** @type {((inputs?: Jams_Cta_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Cta_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_cta_results(inputs)
	if (locale === "de") return de_jams_cta_results(inputs)
	if (locale === "fr") return fr_jams_cta_results(inputs)
	if (locale === "it") return it_jams_cta_results(inputs)
	if (locale === "nl") return nl_jams_cta_results(inputs)
	if (locale === "pl") return pl_jams_cta_results(inputs)
	if (locale === "pt") return pt_jams_cta_results(inputs)
	if (locale === "ru") return ru_jams_cta_results(inputs)
	if (locale === "sv") return sv_jams_cta_results(inputs)
	if (locale === "tr") return tr_jams_cta_results(inputs)
	if (locale === "zh") return zh_jams_cta_results(inputs)
	if (locale === "ja") return ja_jams_cta_results(inputs)
	return en_jams_cta_results(inputs)
});
