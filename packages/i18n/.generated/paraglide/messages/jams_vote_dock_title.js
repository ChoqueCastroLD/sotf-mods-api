/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_Dock_TitleInputs */

const en_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your ballot`)
};

const es_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu papeleta`)
};

const de_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Stimmzettel`)
};

const fr_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre bulletin`)
};

const it_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua scheda`)
};

const nl_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw stembiljet`)
};

const pl_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja karta do głosowania`)
};

const pt_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua cédula`)
};

const ru_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш бюллетень`)
};

const sv_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din röstsedel`)
};

const tr_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy pusulan`)
};

const zh_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的选票`)
};

const ja_jams_vote_dock_title = /** @type {(inputs: Jams_Vote_Dock_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの投票`)
};

/**
* | output |
* | --- |
* | "Your ballot" |
*
* @param {Jams_Vote_Dock_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_dock_title = /** @type {((inputs?: Jams_Vote_Dock_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Dock_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_dock_title(inputs)
	if (locale === "de") return de_jams_vote_dock_title(inputs)
	if (locale === "fr") return fr_jams_vote_dock_title(inputs)
	if (locale === "it") return it_jams_vote_dock_title(inputs)
	if (locale === "nl") return nl_jams_vote_dock_title(inputs)
	if (locale === "pl") return pl_jams_vote_dock_title(inputs)
	if (locale === "pt") return pt_jams_vote_dock_title(inputs)
	if (locale === "ru") return ru_jams_vote_dock_title(inputs)
	if (locale === "sv") return sv_jams_vote_dock_title(inputs)
	if (locale === "tr") return tr_jams_vote_dock_title(inputs)
	if (locale === "zh") return zh_jams_vote_dock_title(inputs)
	if (locale === "ja") return ja_jams_vote_dock_title(inputs)
	return en_jams_vote_dock_title(inputs)
});
