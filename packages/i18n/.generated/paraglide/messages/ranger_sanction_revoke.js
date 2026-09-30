/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_RevokeInputs */

const en_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoke`)
};

const es_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revocar`)
};

const de_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aufheben`)
};

const fr_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lever`)
};

const it_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoca`)
};

const nl_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intrekken`)
};

const pl_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij`)
};

const pt_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revogar`)
};

const ru_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять`)
};

const sv_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återkalla`)
};

const tr_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldır`)
};

const zh_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const ja_ranger_sanction_revoke = /** @type {(inputs: Ranger_Sanction_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解除`)
};

/**
* | output |
* | --- |
* | "Revoke" |
*
* @param {Ranger_Sanction_RevokeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_revoke = /** @type {((inputs?: Ranger_Sanction_RevokeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_RevokeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_revoke(inputs)
	if (locale === "de") return de_ranger_sanction_revoke(inputs)
	if (locale === "fr") return fr_ranger_sanction_revoke(inputs)
	if (locale === "it") return it_ranger_sanction_revoke(inputs)
	if (locale === "nl") return nl_ranger_sanction_revoke(inputs)
	if (locale === "pl") return pl_ranger_sanction_revoke(inputs)
	if (locale === "pt") return pt_ranger_sanction_revoke(inputs)
	if (locale === "ru") return ru_ranger_sanction_revoke(inputs)
	if (locale === "sv") return sv_ranger_sanction_revoke(inputs)
	if (locale === "tr") return tr_ranger_sanction_revoke(inputs)
	if (locale === "zh") return zh_ranger_sanction_revoke(inputs)
	if (locale === "ja") return ja_ranger_sanction_revoke(inputs)
	return en_ranger_sanction_revoke(inputs)
});
