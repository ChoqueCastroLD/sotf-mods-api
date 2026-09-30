/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Timeline_Voting_OpenInputs */

const en_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voting opens`)
};

const es_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abre la votación`)
};

const de_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmung startet`)
};

const fr_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouverture du vote`)
};

const it_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apertura votazione`)
};

const nl_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen opent`)
};

const pl_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start głosowania`)
};

const pt_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abertura da votação`)
};

const ru_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Начало голосования`)
};

const sv_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstningen öppnar`)
};

const tr_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama açılır`)
};

const zh_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始投票`)
};

const ja_jams_timeline_voting_open = /** @type {(inputs: Jams_Timeline_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票開始`)
};

/**
* | output |
* | --- |
* | "Voting opens" |
*
* @param {Jams_Timeline_Voting_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_timeline_voting_open = /** @type {((inputs?: Jams_Timeline_Voting_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Timeline_Voting_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_timeline_voting_open(inputs)
	if (locale === "de") return de_jams_timeline_voting_open(inputs)
	if (locale === "fr") return fr_jams_timeline_voting_open(inputs)
	if (locale === "it") return it_jams_timeline_voting_open(inputs)
	if (locale === "nl") return nl_jams_timeline_voting_open(inputs)
	if (locale === "pl") return pl_jams_timeline_voting_open(inputs)
	if (locale === "pt") return pt_jams_timeline_voting_open(inputs)
	if (locale === "ru") return ru_jams_timeline_voting_open(inputs)
	if (locale === "sv") return sv_jams_timeline_voting_open(inputs)
	if (locale === "tr") return tr_jams_timeline_voting_open(inputs)
	if (locale === "zh") return zh_jams_timeline_voting_open(inputs)
	if (locale === "ja") return ja_jams_timeline_voting_open(inputs)
	return en_jams_timeline_voting_open(inputs)
});
