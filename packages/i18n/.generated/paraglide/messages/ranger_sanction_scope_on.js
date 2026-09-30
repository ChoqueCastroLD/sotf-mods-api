/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Ranger_Sanction_Scope_OnInputs */

const en_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`on ${i?.mod}`)
};

const es_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`en ${i?.mod}`)
};

const de_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`bei ${i?.mod}`)
};

const fr_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`sur ${i?.mod}`)
};

const it_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`su ${i?.mod}`)
};

const nl_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`bij ${i?.mod}`)
};

const pl_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`przy ${i?.mod}`)
};

const pt_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`em ${i?.mod}`)
};

const ru_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`у ${i?.mod}`)
};

const sv_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`på ${i?.mod}`)
};

const tr_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} üzerinde`)
};

const zh_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`于 ${i?.mod}`)
};

const ja_ranger_sanction_scope_on = /** @type {(inputs: Ranger_Sanction_Scope_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} で`)
};

/**
* | output |
* | --- |
* | "on {mod}" |
*
* @param {Ranger_Sanction_Scope_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_scope_on = /** @type {((inputs: Ranger_Sanction_Scope_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Scope_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_scope_on(inputs)
	if (locale === "de") return de_ranger_sanction_scope_on(inputs)
	if (locale === "fr") return fr_ranger_sanction_scope_on(inputs)
	if (locale === "it") return it_ranger_sanction_scope_on(inputs)
	if (locale === "nl") return nl_ranger_sanction_scope_on(inputs)
	if (locale === "pl") return pl_ranger_sanction_scope_on(inputs)
	if (locale === "pt") return pt_ranger_sanction_scope_on(inputs)
	if (locale === "ru") return ru_ranger_sanction_scope_on(inputs)
	if (locale === "sv") return sv_ranger_sanction_scope_on(inputs)
	if (locale === "tr") return tr_ranger_sanction_scope_on(inputs)
	if (locale === "zh") return zh_ranger_sanction_scope_on(inputs)
	if (locale === "ja") return ja_ranger_sanction_scope_on(inputs)
	return en_ranger_sanction_scope_on(inputs)
});
