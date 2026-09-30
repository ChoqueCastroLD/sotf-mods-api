/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Ranger_Sanction_Revoked_OnInputs */

const en_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revoked on ${i?.date}`)
};

const es_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revocada el ${i?.date}`)
};

const de_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aufgehoben am ${i?.date}`)
};

const fr_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Levée le ${i?.date}`)
};

const it_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revocata il ${i?.date}`)
};

const nl_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingetrokken op ${i?.date}`)
};

const pl_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cofnięta ${i?.date}`)
};

const pt_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revogada em ${i?.date}`)
};

const ru_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Снята ${i?.date}`)
};

const sv_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Återkallad ${i?.date}`)
};

const tr_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kaldırıldı: ${i?.date}`)
};

const zh_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`于 ${i?.date} 撤销`)
};

const ja_ranger_sanction_revoked_on = /** @type {(inputs: Ranger_Sanction_Revoked_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に解除`)
};

/**
* | output |
* | --- |
* | "Revoked on {date}" |
*
* @param {Ranger_Sanction_Revoked_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_revoked_on = /** @type {((inputs: Ranger_Sanction_Revoked_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Revoked_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_revoked_on(inputs)
	if (locale === "de") return de_ranger_sanction_revoked_on(inputs)
	if (locale === "fr") return fr_ranger_sanction_revoked_on(inputs)
	if (locale === "it") return it_ranger_sanction_revoked_on(inputs)
	if (locale === "nl") return nl_ranger_sanction_revoked_on(inputs)
	if (locale === "pl") return pl_ranger_sanction_revoked_on(inputs)
	if (locale === "pt") return pt_ranger_sanction_revoked_on(inputs)
	if (locale === "ru") return ru_ranger_sanction_revoked_on(inputs)
	if (locale === "sv") return sv_ranger_sanction_revoked_on(inputs)
	if (locale === "tr") return tr_ranger_sanction_revoked_on(inputs)
	if (locale === "zh") return zh_ranger_sanction_revoked_on(inputs)
	if (locale === "ja") return ja_ranger_sanction_revoked_on(inputs)
	return en_ranger_sanction_revoked_on(inputs)
});
