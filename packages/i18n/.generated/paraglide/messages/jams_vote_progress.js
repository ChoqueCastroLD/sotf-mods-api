/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ done: NonNullable<unknown>, total: NonNullable<unknown> }} Jams_Vote_ProgressInputs */

const en_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} of ${i?.total} voted`)
};

const es_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} de ${i?.total} votadas`)
};

const de_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} von ${i?.total} bewertet`)
};

const fr_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} sur ${i?.total} notées`)
};

const it_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} di ${i?.total} votate`)
};

const nl_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} van ${i?.total} beoordeeld`)
};

const pl_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oceniono ${i?.done} z ${i?.total}`)
};

const pt_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} de ${i?.total} votadas`)
};

const ru_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Оценено ${i?.done} из ${i?.total}`)
};

const sv_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} av ${i?.total} röstade`)
};

const tr_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} / ${i?.total} oylandı`)
};

const zh_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已投 ${i?.done}/${i?.total}`)
};

const ja_jams_vote_progress = /** @type {(inputs: Jams_Vote_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 件中 ${i?.done} 件に投票済み`)
};

/**
* | output |
* | --- |
* | "{done} of {total} voted" |
*
* @param {Jams_Vote_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_progress = /** @type {((inputs: Jams_Vote_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_progress(inputs)
	if (locale === "de") return de_jams_vote_progress(inputs)
	if (locale === "fr") return fr_jams_vote_progress(inputs)
	if (locale === "it") return it_jams_vote_progress(inputs)
	if (locale === "nl") return nl_jams_vote_progress(inputs)
	if (locale === "pl") return pl_jams_vote_progress(inputs)
	if (locale === "pt") return pt_jams_vote_progress(inputs)
	if (locale === "ru") return ru_jams_vote_progress(inputs)
	if (locale === "sv") return sv_jams_vote_progress(inputs)
	if (locale === "tr") return tr_jams_vote_progress(inputs)
	if (locale === "zh") return zh_jams_vote_progress(inputs)
	if (locale === "ja") return ja_jams_vote_progress(inputs)
	return en_jams_vote_progress(inputs)
});
