/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Action_Close_VotingInputs */

const en_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close voting and show results`)
};

const es_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar la votación y mostrar resultados`)
};

const de_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmung beenden und Ergebnisse zeigen`)
};

const fr_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clore le vote et afficher les résultats`)
};

const it_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi il voto e mostra i risultati`)
};

const nl_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen sluiten en resultaten tonen`)
};

const pl_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakończ głosowanie i pokaż wyniki`)
};

const pt_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerrar a votação e mostrar resultados`)
};

const ru_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть голосование и показать итоги`)
};

const sv_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng röstningen och visa resultat`)
};

const tr_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylamayı kapat ve sonuçları göster`)
};

const zh_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结束投票并显示结果`)
};

const ja_jams_editor_action_close_voting = /** @type {(inputs: Jams_Editor_Action_Close_VotingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票を締め切って結果を表示する`)
};

/**
* | output |
* | --- |
* | "Close voting and show results" |
*
* @param {Jams_Editor_Action_Close_VotingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_action_close_voting = /** @type {((inputs?: Jams_Editor_Action_Close_VotingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Action_Close_VotingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_action_close_voting(inputs)
	if (locale === "de") return de_jams_editor_action_close_voting(inputs)
	if (locale === "fr") return fr_jams_editor_action_close_voting(inputs)
	if (locale === "it") return it_jams_editor_action_close_voting(inputs)
	if (locale === "nl") return nl_jams_editor_action_close_voting(inputs)
	if (locale === "pl") return pl_jams_editor_action_close_voting(inputs)
	if (locale === "pt") return pt_jams_editor_action_close_voting(inputs)
	if (locale === "ru") return ru_jams_editor_action_close_voting(inputs)
	if (locale === "sv") return sv_jams_editor_action_close_voting(inputs)
	if (locale === "tr") return tr_jams_editor_action_close_voting(inputs)
	if (locale === "zh") return zh_jams_editor_action_close_voting(inputs)
	if (locale === "ja") return ja_jams_editor_action_close_voting(inputs)
	return en_jams_editor_action_close_voting(inputs)
});
