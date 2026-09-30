/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_Escalated_ByInputs */

const en_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escalated by ${i?.name}`)
};

const es_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escalado por ${i?.name}`)
};

const de_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eskaliert von ${i?.name}`)
};

const fr_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escaladé par ${i?.name}`)
};

const it_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inoltrato da ${i?.name}`)
};

const nl_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geëscaleerd door ${i?.name}`)
};

const pl_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eskalowane przez ${i?.name}`)
};

const pt_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escalado por ${i?.name}`)
};

const ru_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Передал админам: ${i?.name}`)
};

const sv_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eskalerad av ${i?.name}`)
};

const tr_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} tarafından yükseltildi`)
};

const zh_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`由 ${i?.name} 上报`)
};

const ja_ranger_escalated_by = /** @type {(inputs: Ranger_Escalated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} がエスカレーション`)
};

/**
* | output |
* | --- |
* | "Escalated by {name}" |
*
* @param {Ranger_Escalated_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalated_by = /** @type {((inputs: Ranger_Escalated_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalated_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalated_by(inputs)
	if (locale === "de") return de_ranger_escalated_by(inputs)
	if (locale === "fr") return fr_ranger_escalated_by(inputs)
	if (locale === "it") return it_ranger_escalated_by(inputs)
	if (locale === "nl") return nl_ranger_escalated_by(inputs)
	if (locale === "pl") return pl_ranger_escalated_by(inputs)
	if (locale === "pt") return pt_ranger_escalated_by(inputs)
	if (locale === "ru") return ru_ranger_escalated_by(inputs)
	if (locale === "sv") return sv_ranger_escalated_by(inputs)
	if (locale === "tr") return tr_ranger_escalated_by(inputs)
	if (locale === "zh") return zh_ranger_escalated_by(inputs)
	if (locale === "ja") return ja_ranger_escalated_by(inputs)
	return en_ranger_escalated_by(inputs)
});
