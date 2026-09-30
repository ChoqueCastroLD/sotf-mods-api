/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_RevokedInputs */

const en_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanction revoked.`)
};

const es_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanción revocada.`)
};

const de_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktion aufgehoben.`)
};

const fr_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanction levée.`)
};

const it_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanzione revocata.`)
};

const nl_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanctie ingetrokken.`)
};

const pl_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sankcja cofnięta.`)
};

const pt_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanção revogada.`)
};

const ru_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Санкция снята.`)
};

const sv_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktionen återkallades.`)
};

const tr_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaptırım kaldırıldı.`)
};

const zh_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处罚已撤销。`)
};

const ja_ranger_sanction_revoked = /** @type {(inputs: Ranger_Sanction_RevokedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制裁を解除しました。`)
};

/**
* | output |
* | --- |
* | "Sanction revoked." |
*
* @param {Ranger_Sanction_RevokedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_revoked = /** @type {((inputs?: Ranger_Sanction_RevokedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_RevokedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_revoked(inputs)
	if (locale === "de") return de_ranger_sanction_revoked(inputs)
	if (locale === "fr") return fr_ranger_sanction_revoked(inputs)
	if (locale === "it") return it_ranger_sanction_revoked(inputs)
	if (locale === "nl") return nl_ranger_sanction_revoked(inputs)
	if (locale === "pl") return pl_ranger_sanction_revoked(inputs)
	if (locale === "pt") return pt_ranger_sanction_revoked(inputs)
	if (locale === "ru") return ru_ranger_sanction_revoked(inputs)
	if (locale === "sv") return sv_ranger_sanction_revoked(inputs)
	if (locale === "tr") return tr_ranger_sanction_revoked(inputs)
	if (locale === "zh") return zh_ranger_sanction_revoked(inputs)
	if (locale === "ja") return ja_ranger_sanction_revoked(inputs)
	return en_ranger_sanction_revoked(inputs)
});
