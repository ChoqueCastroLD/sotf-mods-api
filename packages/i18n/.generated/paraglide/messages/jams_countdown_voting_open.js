/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Countdown_Voting_OpenInputs */

const en_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voting opens in`)
};

const es_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La votación abre en`)
};

const de_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmung startet in`)
};

const fr_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le vote ouvre dans`)
};

const it_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La votazione apre tra`)
};

const nl_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen opent over`)
};

const pl_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosowanie rusza za`)
};

const pt_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A votação abre em`)
};

const ru_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голосование начнётся через`)
};

const sv_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstningen öppnar om`)
};

const tr_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama şu süre sonra açılır`)
};

const zh_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`距离开始投票`)
};

const ja_jams_countdown_voting_open = /** @type {(inputs: Jams_Countdown_Voting_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票開始まで`)
};

/**
* | output |
* | --- |
* | "Voting opens in" |
*
* @param {Jams_Countdown_Voting_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_countdown_voting_open = /** @type {((inputs?: Jams_Countdown_Voting_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Countdown_Voting_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_countdown_voting_open(inputs)
	if (locale === "de") return de_jams_countdown_voting_open(inputs)
	if (locale === "fr") return fr_jams_countdown_voting_open(inputs)
	if (locale === "it") return it_jams_countdown_voting_open(inputs)
	if (locale === "nl") return nl_jams_countdown_voting_open(inputs)
	if (locale === "pl") return pl_jams_countdown_voting_open(inputs)
	if (locale === "pt") return pt_jams_countdown_voting_open(inputs)
	if (locale === "ru") return ru_jams_countdown_voting_open(inputs)
	if (locale === "sv") return sv_jams_countdown_voting_open(inputs)
	if (locale === "tr") return tr_jams_countdown_voting_open(inputs)
	if (locale === "zh") return zh_jams_countdown_voting_open(inputs)
	if (locale === "ja") return ja_jams_countdown_voting_open(inputs)
	return en_jams_countdown_voting_open(inputs)
});
