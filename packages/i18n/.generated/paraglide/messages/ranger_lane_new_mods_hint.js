/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_New_Mods_HintInputs */

const en_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First submissions and mods waiting for approval.`)
};

const es_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeros envíos y mods pendientes de aprobación.`)
};

const de_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erste Einreichungen und Mods, die auf Freigabe warten.`)
};

const fr_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premiers envois et mods en attente d’approbation.`)
};

const it_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primi invii e mod in attesa di approvazione.`)
};

const nl_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste inzendingen en mods die op goedkeuring wachten.`)
};

const pl_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwsze zgłoszenia i mody czekające na zatwierdzenie.`)
};

const pt_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeiros envios e mods aguardando aprovação.`)
};

const ru_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первые публикации и моды, ожидающие одобрения.`)
};

const sv_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första inskick och moddar som väntar på godkännande.`)
};

const tr_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk gönderimler ve onay bekleyen modlar.`)
};

const zh_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首次提交和等待批准的模组。`)
};

const ja_ranger_lane_new_mods_hint = /** @type {(inputs: Ranger_Lane_New_Mods_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`初回投稿と承認待ちのMOD。`)
};

/**
* | output |
* | --- |
* | "First submissions and mods waiting for approval." |
*
* @param {Ranger_Lane_New_Mods_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_new_mods_hint = /** @type {((inputs?: Ranger_Lane_New_Mods_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_New_Mods_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_new_mods_hint(inputs)
	if (locale === "de") return de_ranger_lane_new_mods_hint(inputs)
	if (locale === "fr") return fr_ranger_lane_new_mods_hint(inputs)
	if (locale === "it") return it_ranger_lane_new_mods_hint(inputs)
	if (locale === "nl") return nl_ranger_lane_new_mods_hint(inputs)
	if (locale === "pl") return pl_ranger_lane_new_mods_hint(inputs)
	if (locale === "pt") return pt_ranger_lane_new_mods_hint(inputs)
	if (locale === "ru") return ru_ranger_lane_new_mods_hint(inputs)
	if (locale === "sv") return sv_ranger_lane_new_mods_hint(inputs)
	if (locale === "tr") return tr_ranger_lane_new_mods_hint(inputs)
	if (locale === "zh") return zh_ranger_lane_new_mods_hint(inputs)
	if (locale === "ja") return ja_ranger_lane_new_mods_hint(inputs)
	return en_ranger_lane_new_mods_hint(inputs)
});
