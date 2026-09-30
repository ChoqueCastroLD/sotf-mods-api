/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_ClearInputs */

const en_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear`)
};

const es_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpiar`)
};

const de_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurücksetzen`)
};

const fr_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer`)
};

const it_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azzera`)
};

const nl_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wissen`)
};

const pl_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść`)
};

const pt_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar`)
};

const ru_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить`)
};

const sv_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa`)
};

const tr_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temizle`)
};

const zh_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除`)
};

const ja_ranger_audit_clear = /** @type {(inputs: Ranger_Audit_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリア`)
};

/**
* | output |
* | --- |
* | "Clear" |
*
* @param {Ranger_Audit_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_clear = /** @type {((inputs?: Ranger_Audit_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_clear(inputs)
	if (locale === "de") return de_ranger_audit_clear(inputs)
	if (locale === "fr") return fr_ranger_audit_clear(inputs)
	if (locale === "it") return it_ranger_audit_clear(inputs)
	if (locale === "nl") return nl_ranger_audit_clear(inputs)
	if (locale === "pl") return pl_ranger_audit_clear(inputs)
	if (locale === "pt") return pt_ranger_audit_clear(inputs)
	if (locale === "ru") return ru_ranger_audit_clear(inputs)
	if (locale === "sv") return sv_ranger_audit_clear(inputs)
	if (locale === "tr") return tr_ranger_audit_clear(inputs)
	if (locale === "zh") return zh_ranger_audit_clear(inputs)
	if (locale === "ja") return ja_ranger_audit_clear(inputs)
	return en_ranger_audit_clear(inputs)
});
