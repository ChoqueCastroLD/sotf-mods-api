/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_ChangesInputs */

const en_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Before and after`)
};

const es_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes y después`)
};

const de_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorher und nachher`)
};

const fr_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avant et après`)
};

const it_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima e dopo`)
};

const nl_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor en na`)
};

const pl_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przed i po`)
};

const pt_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes e depois`)
};

const ru_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`До и после`)
};

const sv_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Före och efter`)
};

const tr_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce ve sonra`)
};

const zh_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前后对比`)
};

const ja_ranger_audit_changes = /** @type {(inputs: Ranger_Audit_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更前と変更後`)
};

/**
* | output |
* | --- |
* | "Before and after" |
*
* @param {Ranger_Audit_ChangesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_changes = /** @type {((inputs?: Ranger_Audit_ChangesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_ChangesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_changes(inputs)
	if (locale === "de") return de_ranger_audit_changes(inputs)
	if (locale === "fr") return fr_ranger_audit_changes(inputs)
	if (locale === "it") return it_ranger_audit_changes(inputs)
	if (locale === "nl") return nl_ranger_audit_changes(inputs)
	if (locale === "pl") return pl_ranger_audit_changes(inputs)
	if (locale === "pt") return pt_ranger_audit_changes(inputs)
	if (locale === "ru") return ru_ranger_audit_changes(inputs)
	if (locale === "sv") return sv_ranger_audit_changes(inputs)
	if (locale === "tr") return tr_ranger_audit_changes(inputs)
	if (locale === "zh") return zh_ranger_audit_changes(inputs)
	if (locale === "ja") return ja_ranger_audit_changes(inputs)
	return en_ranger_audit_changes(inputs)
});
