/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Comment_Reject_Reason_HintInputs */

const en_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kept in the audit log.`)
};

const es_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queda en el registro de auditoría.`)
};

const de_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bleibt im Audit-Log.`)
};

const fr_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conservé dans le journal d’audit.`)
};

const it_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resta nel registro di audit.`)
};

const nl_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blijft in het auditlog.`)
};

const pl_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zostaje w dzienniku audytu.`)
};

const pt_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fica no registro de auditoria.`)
};

const ru_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохраняется в журнале аудита.`)
};

const sv_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparas i granskningsloggen.`)
};

const tr_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denetim kaydında kalır.`)
};

const zh_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`记录在审计日志中。`)
};

const ja_ranger_comment_reject_reason_hint = /** @type {(inputs: Ranger_Comment_Reject_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`監査ログに残ります。`)
};

/**
* | output |
* | --- |
* | "Kept in the audit log." |
*
* @param {Ranger_Comment_Reject_Reason_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_comment_reject_reason_hint = /** @type {((inputs?: Ranger_Comment_Reject_Reason_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Comment_Reject_Reason_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_comment_reject_reason_hint(inputs)
	if (locale === "de") return de_ranger_comment_reject_reason_hint(inputs)
	if (locale === "fr") return fr_ranger_comment_reject_reason_hint(inputs)
	if (locale === "it") return it_ranger_comment_reject_reason_hint(inputs)
	if (locale === "nl") return nl_ranger_comment_reject_reason_hint(inputs)
	if (locale === "pl") return pl_ranger_comment_reject_reason_hint(inputs)
	if (locale === "pt") return pt_ranger_comment_reject_reason_hint(inputs)
	if (locale === "ru") return ru_ranger_comment_reject_reason_hint(inputs)
	if (locale === "sv") return sv_ranger_comment_reject_reason_hint(inputs)
	if (locale === "tr") return tr_ranger_comment_reject_reason_hint(inputs)
	if (locale === "zh") return zh_ranger_comment_reject_reason_hint(inputs)
	if (locale === "ja") return ja_ranger_comment_reject_reason_hint(inputs)
	return en_ranger_comment_reject_reason_hint(inputs)
});
