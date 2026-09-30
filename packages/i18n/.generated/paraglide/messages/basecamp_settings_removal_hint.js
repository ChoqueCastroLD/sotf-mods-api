/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Removal_HintInputs */

const en_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask the rangers to take it down. The request is reviewed like a report.`)
};

const es_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pide a los guardabosques que lo retiren. La petición se revisa como un reporte.`)
};

const de_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ranger bitten, ihn zu entfernen. Der Antrag wird wie eine Meldung geprüft.`)
};

const fr_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander aux rangers de le retirer. La demande est examinée comme un signalement.`)
};

const it_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi ai ranger di rimuoverla. La richiesta viene esaminata come una segnalazione.`)
};

const nl_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vraag de rangers hem te verwijderen. Het verzoek wordt als een melding beoordeeld.`)
};

const pl_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproś strażników o usunięcie. Prośba jest rozpatrywana jak zgłoszenie.`)
};

const pt_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir aos guardas que o removam. O pedido é analisado como uma denúncia.`)
};

const ru_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попросить рейнджеров удалить мод. Запрос рассматривается как жалоба.`)
};

const sv_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Be rangers ta bort den. Begäran granskas som en anmälan.`)
};

const tr_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucuların kaldırmasını iste. Talep bir şikâyet gibi incelenir.`)
};

const zh_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请护林员下架此模组。申请会按举报流程处理。`)
};

const ja_basecamp_settings_removal_hint = /** @type {(inputs: Basecamp_Settings_Removal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーに削除を依頼します。依頼は通報と同じように審査されます。`)
};

/**
* | output |
* | --- |
* | "Ask the rangers to take it down. The request is reviewed like a report." |
*
* @param {Basecamp_Settings_Removal_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_removal_hint = /** @type {((inputs?: Basecamp_Settings_Removal_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_removal_hint(inputs)
	if (locale === "de") return de_basecamp_settings_removal_hint(inputs)
	if (locale === "fr") return fr_basecamp_settings_removal_hint(inputs)
	if (locale === "it") return it_basecamp_settings_removal_hint(inputs)
	if (locale === "nl") return nl_basecamp_settings_removal_hint(inputs)
	if (locale === "pl") return pl_basecamp_settings_removal_hint(inputs)
	if (locale === "pt") return pt_basecamp_settings_removal_hint(inputs)
	if (locale === "ru") return ru_basecamp_settings_removal_hint(inputs)
	if (locale === "sv") return sv_basecamp_settings_removal_hint(inputs)
	if (locale === "tr") return tr_basecamp_settings_removal_hint(inputs)
	if (locale === "zh") return zh_basecamp_settings_removal_hint(inputs)
	if (locale === "ja") return ja_basecamp_settings_removal_hint(inputs)
	return en_basecamp_settings_removal_hint(inputs)
});
