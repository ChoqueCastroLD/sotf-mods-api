/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Countdown_Voting_CloseInputs */

const en_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voting closes in`)
};

const es_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La votación cierra en`)
};

const de_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmung endet in`)
};

const fr_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le vote ferme dans`)
};

const it_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La votazione chiude tra`)
};

const nl_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen sluit over`)
};

const pl_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosowanie kończy się za`)
};

const pt_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A votação encerra em`)
};

const ru_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голосование закроется через`)
};

const sv_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstningen stänger om`)
};

const tr_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama şu süre sonra kapanır`)
};

const zh_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`距离投票截止`)
};

const ja_jams_countdown_voting_close = /** @type {(inputs: Jams_Countdown_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票締め切りまで`)
};

/**
* | output |
* | --- |
* | "Voting closes in" |
*
* @param {Jams_Countdown_Voting_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_countdown_voting_close = /** @type {((inputs?: Jams_Countdown_Voting_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Countdown_Voting_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_countdown_voting_close(inputs)
	if (locale === "de") return de_jams_countdown_voting_close(inputs)
	if (locale === "fr") return fr_jams_countdown_voting_close(inputs)
	if (locale === "it") return it_jams_countdown_voting_close(inputs)
	if (locale === "nl") return nl_jams_countdown_voting_close(inputs)
	if (locale === "pl") return pl_jams_countdown_voting_close(inputs)
	if (locale === "pt") return pt_jams_countdown_voting_close(inputs)
	if (locale === "ru") return ru_jams_countdown_voting_close(inputs)
	if (locale === "sv") return sv_jams_countdown_voting_close(inputs)
	if (locale === "tr") return tr_jams_countdown_voting_close(inputs)
	if (locale === "zh") return zh_jams_countdown_voting_close(inputs)
	if (locale === "ja") return ja_jams_countdown_voting_close(inputs)
	return en_jams_countdown_voting_close(inputs)
});
