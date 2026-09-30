/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Ranger_SubmittedInputs */

const en_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Submitted ${i?.when}`)
};

const es_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviado ${i?.when}`)
};

const de_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eingereicht ${i?.when}`)
};

const fr_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Envoyé ${i?.when}`)
};

const it_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inviato ${i?.when}`)
};

const nl_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingediend ${i?.when}`)
};

const pl_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesłano ${i?.when}`)
};

const pt_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviado ${i?.when}`)
};

const ru_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отправлено ${i?.when}`)
};

const sv_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inskickat ${i?.when}`)
};

const tr_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gönderildi: ${i?.when}`)
};

const zh_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`提交于 ${i?.when}`)
};

const ja_ranger_submitted = /** @type {(inputs: Ranger_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}に投稿`)
};

/**
* | output |
* | --- |
* | "Submitted {when}" |
*
* @param {Ranger_SubmittedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_submitted = /** @type {((inputs: Ranger_SubmittedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_SubmittedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_submitted(inputs)
	if (locale === "de") return de_ranger_submitted(inputs)
	if (locale === "fr") return fr_ranger_submitted(inputs)
	if (locale === "it") return it_ranger_submitted(inputs)
	if (locale === "nl") return nl_ranger_submitted(inputs)
	if (locale === "pl") return pl_ranger_submitted(inputs)
	if (locale === "pt") return pt_ranger_submitted(inputs)
	if (locale === "ru") return ru_ranger_submitted(inputs)
	if (locale === "sv") return sv_ranger_submitted(inputs)
	if (locale === "tr") return tr_ranger_submitted(inputs)
	if (locale === "zh") return zh_ranger_submitted(inputs)
	if (locale === "ja") return ja_ranger_submitted(inputs)
	return en_ranger_submitted(inputs)
});
