/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Escalate_SubmitInputs */

const en_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalate`)
};

const es_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalar`)
};

const de_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalieren`)
};

const fr_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalader`)
};

const it_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inoltra`)
};

const nl_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaleren`)
};

const pl_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskaluj`)
};

const pt_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalar`)
};

const ru_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передать`)
};

const sv_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalera`)
};

const tr_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükselt`)
};

const zh_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上报`)
};

const ja_ranger_escalate_submit = /** @type {(inputs: Ranger_Escalate_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エスカレーション`)
};

/**
* | output |
* | --- |
* | "Escalate" |
*
* @param {Ranger_Escalate_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate_submit = /** @type {((inputs?: Ranger_Escalate_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate_submit(inputs)
	if (locale === "de") return de_ranger_escalate_submit(inputs)
	if (locale === "fr") return fr_ranger_escalate_submit(inputs)
	if (locale === "it") return it_ranger_escalate_submit(inputs)
	if (locale === "nl") return nl_ranger_escalate_submit(inputs)
	if (locale === "pl") return pl_ranger_escalate_submit(inputs)
	if (locale === "pt") return pt_ranger_escalate_submit(inputs)
	if (locale === "ru") return ru_ranger_escalate_submit(inputs)
	if (locale === "sv") return sv_ranger_escalate_submit(inputs)
	if (locale === "tr") return tr_ranger_escalate_submit(inputs)
	if (locale === "zh") return zh_ranger_escalate_submit(inputs)
	if (locale === "ja") return ja_ranger_escalate_submit(inputs)
	return en_ranger_escalate_submit(inputs)
});
