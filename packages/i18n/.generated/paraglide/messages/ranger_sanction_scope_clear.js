/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Scope_ClearInputs */

const en_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mute everywhere instead`)
};

const es_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silenciar en todo el sitio`)
};

const de_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stattdessen überall stummschalten`)
};

const fr_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rendre muet partout`)
};

const it_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silenzia ovunque`)
};

const nl_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In plaats daarvan overal dempen`)
};

const pl_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamiast tego wycisz wszędzie`)
};

const pt_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silenciar em todo o site`)
};

const ru_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запретить везде`)
};

const sv_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tysta överallt i stället`)
};

const tr_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bunun yerine her yerde sustur`)
};

const zh_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`改为全站禁止`)
};

const ja_ranger_sanction_scope_clear = /** @type {(inputs: Ranger_Sanction_Scope_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全体で禁止にする`)
};

/**
* | output |
* | --- |
* | "Mute everywhere instead" |
*
* @param {Ranger_Sanction_Scope_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_scope_clear = /** @type {((inputs?: Ranger_Sanction_Scope_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Scope_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_scope_clear(inputs)
	if (locale === "de") return de_ranger_sanction_scope_clear(inputs)
	if (locale === "fr") return fr_ranger_sanction_scope_clear(inputs)
	if (locale === "it") return it_ranger_sanction_scope_clear(inputs)
	if (locale === "nl") return nl_ranger_sanction_scope_clear(inputs)
	if (locale === "pl") return pl_ranger_sanction_scope_clear(inputs)
	if (locale === "pt") return pt_ranger_sanction_scope_clear(inputs)
	if (locale === "ru") return ru_ranger_sanction_scope_clear(inputs)
	if (locale === "sv") return sv_ranger_sanction_scope_clear(inputs)
	if (locale === "tr") return tr_ranger_sanction_scope_clear(inputs)
	if (locale === "zh") return zh_ranger_sanction_scope_clear(inputs)
	if (locale === "ja") return ja_ranger_sanction_scope_clear(inputs)
	return en_ranger_sanction_scope_clear(inputs)
});
