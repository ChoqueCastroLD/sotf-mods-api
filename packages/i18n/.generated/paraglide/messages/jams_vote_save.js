/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_SaveInputs */

const en_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save votes`)
};

const es_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar votos`)
};

const de_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimmen speichern`)
};

const fr_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer les votes`)
};

const it_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva i voti`)
};

const nl_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen opslaan`)
};

const pl_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz głosy`)
};

const pt_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar votos`)
};

const ru_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить голоса`)
};

const sv_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara röster`)
};

const tr_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyları kaydet`)
};

const zh_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存投票`)
};

const ja_jams_vote_save = /** @type {(inputs: Jams_Vote_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票を保存`)
};

/**
* | output |
* | --- |
* | "Save votes" |
*
* @param {Jams_Vote_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_save = /** @type {((inputs?: Jams_Vote_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_save(inputs)
	if (locale === "de") return de_jams_vote_save(inputs)
	if (locale === "fr") return fr_jams_vote_save(inputs)
	if (locale === "it") return it_jams_vote_save(inputs)
	if (locale === "nl") return nl_jams_vote_save(inputs)
	if (locale === "pl") return pl_jams_vote_save(inputs)
	if (locale === "pt") return pt_jams_vote_save(inputs)
	if (locale === "ru") return ru_jams_vote_save(inputs)
	if (locale === "sv") return sv_jams_vote_save(inputs)
	if (locale === "tr") return tr_jams_vote_save(inputs)
	if (locale === "zh") return zh_jams_vote_save(inputs)
	if (locale === "ja") return ja_jams_vote_save(inputs)
	return en_jams_vote_save(inputs)
});
