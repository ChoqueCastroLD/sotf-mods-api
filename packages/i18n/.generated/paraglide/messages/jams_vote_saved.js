/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_SavedInputs */

const en_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votes saved.`)
};

const es_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos guardados.`)
};

const de_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimmen gespeichert.`)
};

const fr_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votes enregistrés.`)
};

const it_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voti salvati.`)
};

const nl_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen opgeslagen.`)
};

const pl_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosy zapisane.`)
};

const pt_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos salvos.`)
};

const ru_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голоса сохранены.`)
};

const sv_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röster sparade.`)
};

const tr_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylar kaydedildi.`)
};

const zh_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票已保存。`)
};

const ja_jams_vote_saved = /** @type {(inputs: Jams_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票を保存しました。`)
};

/**
* | output |
* | --- |
* | "Votes saved." |
*
* @param {Jams_Vote_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_saved = /** @type {((inputs?: Jams_Vote_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_saved(inputs)
	if (locale === "de") return de_jams_vote_saved(inputs)
	if (locale === "fr") return fr_jams_vote_saved(inputs)
	if (locale === "it") return it_jams_vote_saved(inputs)
	if (locale === "nl") return nl_jams_vote_saved(inputs)
	if (locale === "pl") return pl_jams_vote_saved(inputs)
	if (locale === "pt") return pt_jams_vote_saved(inputs)
	if (locale === "ru") return ru_jams_vote_saved(inputs)
	if (locale === "sv") return sv_jams_vote_saved(inputs)
	if (locale === "tr") return tr_jams_vote_saved(inputs)
	if (locale === "zh") return zh_jams_vote_saved(inputs)
	if (locale === "ja") return ja_jams_vote_saved(inputs)
	return en_jams_vote_saved(inputs)
});
