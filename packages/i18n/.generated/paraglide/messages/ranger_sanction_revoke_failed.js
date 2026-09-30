/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Revoke_FailedInputs */

const en_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The sanction wasn’t revoked`)
};

const es_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se revocó la sanción`)
};

const de_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Sanktion wurde nicht aufgehoben`)
};

const fr_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La sanction n’a pas été levée`)
};

const it_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La sanzione non è stata revocata`)
};

const nl_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De sanctie is niet ingetrokken`)
};

const pl_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sankcja nie została cofnięta`)
};

const pt_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A sanção não foi revogada`)
};

const ru_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Санкция не снята`)
};

const sv_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktionen återkallades inte`)
};

const tr_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaptırım kaldırılamadı`)
};

const zh_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处罚未撤销`)
};

const ja_ranger_sanction_revoke_failed = /** @type {(inputs: Ranger_Sanction_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制裁は解除されませんでした`)
};

/**
* | output |
* | --- |
* | "The sanction wasn’t revoked" |
*
* @param {Ranger_Sanction_Revoke_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_revoke_failed = /** @type {((inputs?: Ranger_Sanction_Revoke_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Revoke_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_revoke_failed(inputs)
	if (locale === "de") return de_ranger_sanction_revoke_failed(inputs)
	if (locale === "fr") return fr_ranger_sanction_revoke_failed(inputs)
	if (locale === "it") return it_ranger_sanction_revoke_failed(inputs)
	if (locale === "nl") return nl_ranger_sanction_revoke_failed(inputs)
	if (locale === "pl") return pl_ranger_sanction_revoke_failed(inputs)
	if (locale === "pt") return pt_ranger_sanction_revoke_failed(inputs)
	if (locale === "ru") return ru_ranger_sanction_revoke_failed(inputs)
	if (locale === "sv") return sv_ranger_sanction_revoke_failed(inputs)
	if (locale === "tr") return tr_ranger_sanction_revoke_failed(inputs)
	if (locale === "zh") return zh_ranger_sanction_revoke_failed(inputs)
	if (locale === "ja") return ja_ranger_sanction_revoke_failed(inputs)
	return en_ranger_sanction_revoke_failed(inputs)
});
