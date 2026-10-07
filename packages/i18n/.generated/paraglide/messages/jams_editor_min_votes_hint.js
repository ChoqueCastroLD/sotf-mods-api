/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Min_Votes_HintInputs */

const en_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An entry needs this many valid votes to be ranked.`)
};

const es_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una participación necesita tantos votos válidos para entrar en la clasificación.`)
};

const de_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So viele gültige Stimmen braucht ein Beitrag, um gewertet zu werden.`)
};

const fr_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une participation a besoin de ce nombre de votes valides pour être classée.`)
};

const it_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una partecipazione ha bisogno di questi voti validi per entrare in classifica.`)
};

const nl_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een inzending heeft zoveel geldige stemmen nodig om te worden gerangschikt.`)
};

const pl_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tyle ważnych głosów potrzebuje zgłoszenie, aby trafić do rankingu.`)
};

const pt_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma inscrição precisa desse número de votos válidos para entrar no ranking.`)
};

const ru_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Столько действительных голосов нужно работе, чтобы попасть в рейтинг.`)
};

const sv_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett bidrag behöver så här många giltiga röster för att rankas.`)
};

const tr_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir katılımın sıralanması için gereken geçerli oy sayısı.`)
};

const zh_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品需要达到这个有效票数才会进入排名。`)
};

const ja_jams_editor_min_votes_hint = /** @type {(inputs: Jams_Editor_Min_Votes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`順位に入るために必要な有効票数です。`)
};

/**
* | output |
* | --- |
* | "An entry needs this many valid votes to be ranked." |
*
* @param {Jams_Editor_Min_Votes_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_min_votes_hint = /** @type {((inputs?: Jams_Editor_Min_Votes_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Min_Votes_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_min_votes_hint(inputs)
	if (locale === "de") return de_jams_editor_min_votes_hint(inputs)
	if (locale === "fr") return fr_jams_editor_min_votes_hint(inputs)
	if (locale === "it") return it_jams_editor_min_votes_hint(inputs)
	if (locale === "nl") return nl_jams_editor_min_votes_hint(inputs)
	if (locale === "pl") return pl_jams_editor_min_votes_hint(inputs)
	if (locale === "pt") return pt_jams_editor_min_votes_hint(inputs)
	if (locale === "ru") return ru_jams_editor_min_votes_hint(inputs)
	if (locale === "sv") return sv_jams_editor_min_votes_hint(inputs)
	if (locale === "tr") return tr_jams_editor_min_votes_hint(inputs)
	if (locale === "zh") return zh_jams_editor_min_votes_hint(inputs)
	if (locale === "ja") return ja_jams_editor_min_votes_hint(inputs)
	return en_jams_editor_min_votes_hint(inputs)
});
