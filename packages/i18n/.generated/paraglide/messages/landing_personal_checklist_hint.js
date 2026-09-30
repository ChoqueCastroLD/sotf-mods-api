/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Checklist_HintInputs */

const en_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finish the checklist to earn the “Survived Day 1” badge.`)
};

const es_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la lista para ganar la insignia «Sobreviviste al día 1».`)
};

const de_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließe die Checkliste ab und verdiene das Abzeichen „Tag 1 überlebt“.`)
};

const fr_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminez la liste pour obtenir le badge « A survécu au jour 1 ».`)
};

const it_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la lista per ottenere il distintivo «Sopravvissuto al giorno 1».`)
};

const nl_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rond de checklist af en verdien de badge ‘Dag 1 overleefd’.`)
};

const pl_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukończ listę, aby zdobyć odznakę „Przetrwał dzień 1”.`)
};

const pt_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conclua a lista para ganhar a insígnia “Sobreviveu ao dia 1”.`)
};

const ru_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выполните список, чтобы получить значок «Пережил первый день».`)
};

const sv_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slutför checklistan och få märket ”Överlevde dag 1”.`)
};

const tr_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listeyi tamamla ve “1. günü atlattı” rozetini kazan.`)
};

const zh_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成清单即可获得“熬过第一天”徽章。`)
};

const ja_landing_personal_checklist_hint = /** @type {(inputs: Landing_Personal_Checklist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェックリストを完了すると「1日目を生き延びた」バッジがもらえます。`)
};

/**
* | output |
* | --- |
* | "Finish the checklist to earn the “Survived Day 1” badge." |
*
* @param {Landing_Personal_Checklist_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_checklist_hint = /** @type {((inputs?: Landing_Personal_Checklist_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Checklist_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_checklist_hint(inputs)
	if (locale === "de") return de_landing_personal_checklist_hint(inputs)
	if (locale === "fr") return fr_landing_personal_checklist_hint(inputs)
	if (locale === "it") return it_landing_personal_checklist_hint(inputs)
	if (locale === "nl") return nl_landing_personal_checklist_hint(inputs)
	if (locale === "pl") return pl_landing_personal_checklist_hint(inputs)
	if (locale === "pt") return pt_landing_personal_checklist_hint(inputs)
	if (locale === "ru") return ru_landing_personal_checklist_hint(inputs)
	if (locale === "sv") return sv_landing_personal_checklist_hint(inputs)
	if (locale === "tr") return tr_landing_personal_checklist_hint(inputs)
	if (locale === "zh") return zh_landing_personal_checklist_hint(inputs)
	if (locale === "ja") return ja_landing_personal_checklist_hint(inputs)
	return en_landing_personal_checklist_hint(inputs)
});
