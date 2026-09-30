/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Builds_HintInputs */

const en_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds waiting for approval or a look after publishing.`)
};

const es_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds pendientes de aprobación o de revisión tras publicarse.`)
};

const de_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds, die auf Freigabe oder eine Prüfung nach der Veröffentlichung warten.`)
};

const fr_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds en attente d’approbation ou d’une revue après publication.`)
};

const it_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build in attesa di approvazione o di una revisione dopo la pubblicazione.`)
};

const nl_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds die wachten op goedkeuring of een controle na publicatie.`)
};

const pl_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy czekające na zatwierdzenie lub przegląd po publikacji.`)
};

const pt_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds aguardando aprovação ou revisão após a publicação.`)
};

const ru_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройки, ожидающие одобрения или проверки после публикации.`)
};

const sv_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggen som väntar på godkännande eller granskning efter publicering.`)
};

const tr_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onay veya yayın sonrası inceleme bekleyen yapılar.`)
};

const zh_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待批准或发布后审核的建筑。`)
};

const ja_ranger_lane_builds_hint = /** @type {(inputs: Ranger_Lane_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認待ち、または公開後のレビュー待ちの建築。`)
};

/**
* | output |
* | --- |
* | "Builds waiting for approval or a look after publishing." |
*
* @param {Ranger_Lane_Builds_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_builds_hint = /** @type {((inputs?: Ranger_Lane_Builds_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Builds_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_builds_hint(inputs)
	if (locale === "de") return de_ranger_lane_builds_hint(inputs)
	if (locale === "fr") return fr_ranger_lane_builds_hint(inputs)
	if (locale === "it") return it_ranger_lane_builds_hint(inputs)
	if (locale === "nl") return nl_ranger_lane_builds_hint(inputs)
	if (locale === "pl") return pl_ranger_lane_builds_hint(inputs)
	if (locale === "pt") return pt_ranger_lane_builds_hint(inputs)
	if (locale === "ru") return ru_ranger_lane_builds_hint(inputs)
	if (locale === "sv") return sv_ranger_lane_builds_hint(inputs)
	if (locale === "tr") return tr_ranger_lane_builds_hint(inputs)
	if (locale === "zh") return zh_ranger_lane_builds_hint(inputs)
	if (locale === "ja") return ja_ranger_lane_builds_hint(inputs)
	return en_ranger_lane_builds_hint(inputs)
});
