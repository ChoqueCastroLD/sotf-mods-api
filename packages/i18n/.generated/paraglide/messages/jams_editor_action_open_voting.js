/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Action_Open_VotingInputs */

const en_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open voting now`)
};

const es_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir la votación ahora`)
};

const de_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmung jetzt öffnen`)
};

const fr_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le vote maintenant`)
};

const it_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri subito il voto`)
};

const nl_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen nu openen`)
};

const pl_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz głosowanie teraz`)
};

const pt_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir a votação agora`)
};

const ru_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть голосование сейчас`)
};

const sv_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna röstning nu`)
};

const tr_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylamayı şimdi aç`)
};

const zh_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即开放投票`)
};

const ja_jams_editor_action_open_voting = /** @type {(inputs: Jams_Editor_Action_Open_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今すぐ投票を開始する`)
};

/**
* | output |
* | --- |
* | "Open voting now" |
*
* @param {Jams_Editor_Action_Open_VotingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_action_open_voting = /** @type {((inputs?: Jams_Editor_Action_Open_VotingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Action_Open_VotingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_action_open_voting(inputs)
	if (locale === "de") return de_jams_editor_action_open_voting(inputs)
	if (locale === "fr") return fr_jams_editor_action_open_voting(inputs)
	if (locale === "it") return it_jams_editor_action_open_voting(inputs)
	if (locale === "nl") return nl_jams_editor_action_open_voting(inputs)
	if (locale === "pl") return pl_jams_editor_action_open_voting(inputs)
	if (locale === "pt") return pt_jams_editor_action_open_voting(inputs)
	if (locale === "ru") return ru_jams_editor_action_open_voting(inputs)
	if (locale === "sv") return sv_jams_editor_action_open_voting(inputs)
	if (locale === "tr") return tr_jams_editor_action_open_voting(inputs)
	if (locale === "zh") return zh_jams_editor_action_open_voting(inputs)
	if (locale === "ja") return ja_jams_editor_action_open_voting(inputs)
	return en_jams_editor_action_open_voting(inputs)
});
