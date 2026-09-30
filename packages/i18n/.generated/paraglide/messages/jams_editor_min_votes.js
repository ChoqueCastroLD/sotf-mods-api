/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Min_VotesInputs */

const en_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimum votes to be ranked`)
};

const es_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos mínimos para clasificarse`)
};

const de_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindeststimmen für eine Platzierung`)
};

const fr_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votes minimum pour être classé`)
};

const it_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voti minimi per essere classificati`)
};

const nl_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimale stemmen om te worden gerangschikt`)
};

const pl_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimalna liczba głosów do rankingu`)
};

const pt_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos mínimos para ser classificado`)
};

const ru_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Минимум голосов для попадания в рейтинг`)
};

const sv_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minsta antal röster för att rankas`)
};

const tr_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralamaya girmek için asgari oy`)
};

const zh_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进入排名所需的最少票数`)
};

const ja_jams_editor_min_votes = /** @type {(inputs: Jams_Editor_Min_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`順位対象になる最低票数`)
};

/**
* | output |
* | --- |
* | "Minimum votes to be ranked" |
*
* @param {Jams_Editor_Min_VotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_min_votes = /** @type {((inputs?: Jams_Editor_Min_VotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Min_VotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_min_votes(inputs)
	if (locale === "de") return de_jams_editor_min_votes(inputs)
	if (locale === "fr") return fr_jams_editor_min_votes(inputs)
	if (locale === "it") return it_jams_editor_min_votes(inputs)
	if (locale === "nl") return nl_jams_editor_min_votes(inputs)
	if (locale === "pl") return pl_jams_editor_min_votes(inputs)
	if (locale === "pt") return pt_jams_editor_min_votes(inputs)
	if (locale === "ru") return ru_jams_editor_min_votes(inputs)
	if (locale === "sv") return sv_jams_editor_min_votes(inputs)
	if (locale === "tr") return tr_jams_editor_min_votes(inputs)
	if (locale === "zh") return zh_jams_editor_min_votes(inputs)
	if (locale === "ja") return ja_jams_editor_min_votes(inputs)
	return en_jams_editor_min_votes(inputs)
});
