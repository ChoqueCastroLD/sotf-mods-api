/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ field: NonNullable<unknown>, previous: NonNullable<unknown> }} Jams_Editor_Error_OrderInputs */

const en_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.field} can’t be before ${i?.previous}.`)
};

const es_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.field}» no puede ir antes de «${i?.previous}».`)
};

const de_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.field} darf nicht vor „${i?.previous}“ liegen.`)
};

const fr_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`« ${i?.field} » ne peut pas précéder « ${i?.previous} ».`)
};

const it_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.field}» non può essere prima di «${i?.previous}».`)
};

const nl_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.field} kan niet vóór ${i?.previous} liggen.`)
};

const pl_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.field}” nie może być przed „${i?.previous}”.`)
};

const pt_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.field}» não pode ser antes de «${i?.previous}».`)
};

const ru_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.field}» не может быть раньше, чем «${i?.previous}».`)
};

const sv_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.field} kan inte vara före ${i?.previous}.`)
};

const tr_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.field}, ${i?.previous} tarihinden önce olamaz.`)
};

const zh_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.field}”不能早于“${i?.previous}”。`)
};

const ja_jams_editor_error_order = /** @type {(inputs: Jams_Editor_Error_OrderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.field}」は「${i?.previous}」より前にできません。`)
};

/**
* | output |
* | --- |
* | "{field} can’t be before {previous}." |
*
* @param {Jams_Editor_Error_OrderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_error_order = /** @type {((inputs: Jams_Editor_Error_OrderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_OrderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_error_order(inputs)
	if (locale === "de") return de_jams_editor_error_order(inputs)
	if (locale === "fr") return fr_jams_editor_error_order(inputs)
	if (locale === "it") return it_jams_editor_error_order(inputs)
	if (locale === "nl") return nl_jams_editor_error_order(inputs)
	if (locale === "pl") return pl_jams_editor_error_order(inputs)
	if (locale === "pt") return pt_jams_editor_error_order(inputs)
	if (locale === "ru") return ru_jams_editor_error_order(inputs)
	if (locale === "sv") return sv_jams_editor_error_order(inputs)
	if (locale === "tr") return tr_jams_editor_error_order(inputs)
	if (locale === "zh") return zh_jams_editor_error_order(inputs)
	if (locale === "ja") return ja_jams_editor_error_order(inputs)
	return en_jams_editor_error_order(inputs)
});
