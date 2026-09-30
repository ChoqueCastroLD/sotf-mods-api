/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_TitleInputs */

const en_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate this entry`)
};

const es_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valora esta participación`)
};

const de_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Beitrag bewerten`)
};

const fr_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noter cette participation`)
};

const it_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valuta questa iscrizione`)
};

const nl_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeel deze inzending`)
};

const pl_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oceń to zgłoszenie`)
};

const pt_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avalie esta inscrição`)
};

const ru_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оцените эту работу`)
};

const sv_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betygsätt det här bidraget`)
};

const tr_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu başvuruyu puanlayın`)
};

const zh_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为该作品评分`)
};

const ja_jams_vote_title = /** @type {(inputs: Jams_Vote_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この作品を評価`)
};

/**
* | output |
* | --- |
* | "Rate this entry" |
*
* @param {Jams_Vote_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_title = /** @type {((inputs?: Jams_Vote_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_title(inputs)
	if (locale === "de") return de_jams_vote_title(inputs)
	if (locale === "fr") return fr_jams_vote_title(inputs)
	if (locale === "it") return it_jams_vote_title(inputs)
	if (locale === "nl") return nl_jams_vote_title(inputs)
	if (locale === "pl") return pl_jams_vote_title(inputs)
	if (locale === "pt") return pt_jams_vote_title(inputs)
	if (locale === "ru") return ru_jams_vote_title(inputs)
	if (locale === "sv") return sv_jams_vote_title(inputs)
	if (locale === "tr") return tr_jams_vote_title(inputs)
	if (locale === "zh") return zh_jams_vote_title(inputs)
	if (locale === "ja") return ja_jams_vote_title(inputs)
	return en_jams_vote_title(inputs)
});
