/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Timeline_Voting_CloseInputs */

const en_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voting closes`)
};

const es_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cierra la votación`)
};

const de_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmung endet`)
};

const fr_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clôture du vote`)
};

const it_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiusura votazione`)
};

const nl_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen sluit`)
};

const pl_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koniec głosowania`)
};

const pt_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerramento da votação`)
};

const ru_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конец голосования`)
};

const sv_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstningen stänger`)
};

const tr_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama kapanır`)
};

const zh_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票截止`)
};

const ja_jams_timeline_voting_close = /** @type {(inputs: Jams_Timeline_Voting_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票締め切り`)
};

/**
* | output |
* | --- |
* | "Voting closes" |
*
* @param {Jams_Timeline_Voting_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_timeline_voting_close = /** @type {((inputs?: Jams_Timeline_Voting_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Timeline_Voting_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_timeline_voting_close(inputs)
	if (locale === "de") return de_jams_timeline_voting_close(inputs)
	if (locale === "fr") return fr_jams_timeline_voting_close(inputs)
	if (locale === "it") return it_jams_timeline_voting_close(inputs)
	if (locale === "nl") return nl_jams_timeline_voting_close(inputs)
	if (locale === "pl") return pl_jams_timeline_voting_close(inputs)
	if (locale === "pt") return pt_jams_timeline_voting_close(inputs)
	if (locale === "ru") return ru_jams_timeline_voting_close(inputs)
	if (locale === "sv") return sv_jams_timeline_voting_close(inputs)
	if (locale === "tr") return tr_jams_timeline_voting_close(inputs)
	if (locale === "zh") return zh_jams_timeline_voting_close(inputs)
	if (locale === "ja") return ja_jams_timeline_voting_close(inputs)
	return en_jams_timeline_voting_close(inputs)
});
