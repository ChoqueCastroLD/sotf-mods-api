/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Escalate_DoneInputs */

const en_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalated to the admins.`)
};

const es_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalado a los administradores.`)
};

const de_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An die Admins eskaliert.`)
};

const fr_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaladé aux admins.`)
};

const it_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inoltrato agli amministratori.`)
};

const nl_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geëscaleerd naar de beheerders.`)
};

const pl_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalowano do administratorów.`)
};

const pt_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalado para os administradores.`)
};

const ru_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передано администраторам.`)
};

const sv_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalerat till administratörerna.`)
};

const tr_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yöneticilere yükseltildi.`)
};

const zh_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已上报给管理员。`)
};

const ja_ranger_escalate_done = /** @type {(inputs: Ranger_Escalate_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理者にエスカレーションしました。`)
};

/**
* | output |
* | --- |
* | "Escalated to the admins." |
*
* @param {Ranger_Escalate_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate_done = /** @type {((inputs?: Ranger_Escalate_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate_done(inputs)
	if (locale === "de") return de_ranger_escalate_done(inputs)
	if (locale === "fr") return fr_ranger_escalate_done(inputs)
	if (locale === "it") return it_ranger_escalate_done(inputs)
	if (locale === "nl") return nl_ranger_escalate_done(inputs)
	if (locale === "pl") return pl_ranger_escalate_done(inputs)
	if (locale === "pt") return pt_ranger_escalate_done(inputs)
	if (locale === "ru") return ru_ranger_escalate_done(inputs)
	if (locale === "sv") return sv_ranger_escalate_done(inputs)
	if (locale === "tr") return tr_ranger_escalate_done(inputs)
	if (locale === "zh") return zh_ranger_escalate_done(inputs)
	if (locale === "ja") return ja_ranger_escalate_done(inputs)
	return en_ranger_escalate_done(inputs)
});
