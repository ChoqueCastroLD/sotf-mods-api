/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Status_HintInputs */

const en_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod of yours was approved, rejected, needs changes or was archived.`)
};

const es_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod tuyo ha sido aprobado, rechazado, necesita cambios o ha sido archivado.`)
};

const de_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mod von dir wurde freigegeben, abgelehnt, braucht Änderungen oder wurde archiviert.`)
};

const fr_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un de vos mods a été approuvé, refusé, doit être modifié ou a été archivé.`)
};

const it_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una tua mod è stata approvata, rifiutata, richiede modifiche o è stata archiviata.`)
};

const nl_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod van jou is goedgekeurd, afgewezen, heeft wijzigingen nodig of is gearchiveerd.`)
};

const pl_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój mod został zatwierdzony, odrzucony, wymaga zmian lub został zarchiwizowany.`)
};

const pt_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod seu foi aprovado, rejeitado, precisa de mudanças ou foi arquivado.`)
};

const ru_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш мод одобрен, отклонён, требует изменений или отправлен в архив.`)
};

const sv_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En av dina moddar har godkänts, avvisats, behöver ändras eller har arkiverats.`)
};

const tr_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından biri onaylandı, reddedildi, değişiklik gerektiriyor ya da arşivlendi.`)
};

const zh_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组通过审核、被拒绝、需要修改或被归档。`)
};

const ja_settings_notif_status_hint = /** @type {(inputs: Settings_Notif_Status_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODが承認・却下・修正依頼・アーカイブされました。`)
};

/**
* | output |
* | --- |
* | "A mod of yours was approved, rejected, needs changes or was archived." |
*
* @param {Settings_Notif_Status_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_status_hint = /** @type {((inputs?: Settings_Notif_Status_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Status_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_status_hint(inputs)
	if (locale === "de") return de_settings_notif_status_hint(inputs)
	if (locale === "fr") return fr_settings_notif_status_hint(inputs)
	if (locale === "it") return it_settings_notif_status_hint(inputs)
	if (locale === "nl") return nl_settings_notif_status_hint(inputs)
	if (locale === "pl") return pl_settings_notif_status_hint(inputs)
	if (locale === "pt") return pt_settings_notif_status_hint(inputs)
	if (locale === "ru") return ru_settings_notif_status_hint(inputs)
	if (locale === "sv") return sv_settings_notif_status_hint(inputs)
	if (locale === "tr") return tr_settings_notif_status_hint(inputs)
	if (locale === "zh") return zh_settings_notif_status_hint(inputs)
	if (locale === "ja") return ja_settings_notif_status_hint(inputs)
	return en_settings_notif_status_hint(inputs)
});
