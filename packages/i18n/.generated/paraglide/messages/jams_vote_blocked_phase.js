/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_Blocked_PhaseInputs */

const en_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voting is not open right now.`)
};

const es_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La votación no está abierta ahora mismo.`)
};

const de_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Abstimmung ist gerade nicht geöffnet.`)
};

const fr_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le vote n'est pas ouvert pour le moment.`)
};

const it_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La votazione non è aperta al momento.`)
};

const nl_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen is op dit moment niet open.`)
};

const pl_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosowanie nie jest teraz otwarte.`)
};

const pt_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A votação não está aberta no momento.`)
};

const ru_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голосование сейчас закрыто.`)
};

const sv_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstningen är inte öppen just nu.`)
};

const tr_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama şu anda açık değil.`)
};

const zh_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前未开放投票。`)
};

const ja_jams_vote_blocked_phase = /** @type {(inputs: Jams_Vote_Blocked_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在は投票を受け付けていません。`)
};

/**
* | output |
* | --- |
* | "Voting is not open right now." |
*
* @param {Jams_Vote_Blocked_PhaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_blocked_phase = /** @type {((inputs?: Jams_Vote_Blocked_PhaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Blocked_PhaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_blocked_phase(inputs)
	if (locale === "de") return de_jams_vote_blocked_phase(inputs)
	if (locale === "fr") return fr_jams_vote_blocked_phase(inputs)
	if (locale === "it") return it_jams_vote_blocked_phase(inputs)
	if (locale === "nl") return nl_jams_vote_blocked_phase(inputs)
	if (locale === "pl") return pl_jams_vote_blocked_phase(inputs)
	if (locale === "pt") return pt_jams_vote_blocked_phase(inputs)
	if (locale === "ru") return ru_jams_vote_blocked_phase(inputs)
	if (locale === "sv") return sv_jams_vote_blocked_phase(inputs)
	if (locale === "tr") return tr_jams_vote_blocked_phase(inputs)
	if (locale === "zh") return zh_jams_vote_blocked_phase(inputs)
	if (locale === "ja") return ja_jams_vote_blocked_phase(inputs)
	return en_jams_vote_blocked_phase(inputs)
});
